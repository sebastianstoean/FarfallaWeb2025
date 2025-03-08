import {AfterViewInit, Component, ViewChild, HostListener, ElementRef, OnInit} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { TextsService } from "../texts.service";
import {
  FormBuilder,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT' | 'ZH';

interface LanguageTextHome {
  botones: string[];
  titulos: string[];
  textos: string[];
  carta: string[];
  formulario: string[];
  horario: string[];
  errores: string[];
  alts: string[];
}

const festivos: string[] = [
  '2025-01-01', // Año Nuevo
  '2025-01-06', // Epifanía del Señor
  '2025-04-17', // Jueves Santo
  '2025-04-18', // Viernes Santo
  '2025-05-01', // Fiesta del Trabajador
  '2025-05-02', // Fiesta de la Comunidad de Madrid
  '2025-07-25', // Santiago Apóstol
  '2025-08-15', // Asunción de la Virgen
  '2025-11-01', // Todos los Santos
  '2025-12-06', // Día de la Constitución Española
  '2025-12-08', // Día de la Inmaculada Concepción
  '2025-12-25'  // Natividad del Señor
];

function esFestivo(date: string): boolean {
  return festivos.includes(date);
}

function todayDate(): string {
  const today = new Date();
  today.setDate(today.getDate());
  return today.toISOString().split('T')[0];
}

function endOfYearDate(): string {
  const now = new Date();
  const year = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
  const endOfYear = new Date(year, 11, 31);
  return endOfYear.toISOString().split('T')[0];
}

function timeStringToDate(timeString: string): Date {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function getCurrentSpanishTime(): Date {
  const now = new Date();
  const spainOffset = 1;
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * spainOffset));
}

function getMinTimeForToday(): string {
  const now = getCurrentSpanishTime();
  now.setMinutes(now.getMinutes() + 60);
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
function timeRangeValidator(minTime: string, maxTime: string, selectedDate: string = '') {
  console.log('Validando rango de horas:', minTime, maxTime, selectedDate);
  return (control: AbstractControl): ValidationErrors | null => {
    const inputTime = control.value;

    if (!inputTime) {
      return null;
    }

    const convertToMinutes = (time: string): number => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const minMinutes = convertToMinutes(minTime);
    const maxMinutes = convertToMinutes(maxTime);
    const inputMinutes = convertToMinutes(inputTime);

    let isValid = false;

    if (maxMinutes < minMinutes) {
      isValid = (inputMinutes >= minMinutes) || (inputMinutes <= maxMinutes);
    } else {
      isValid = inputMinutes >= minMinutes && inputMinutes <= maxMinutes;
    }

    if (selectedDate) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();
      const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
      console.log('Es fin de semana:', isWeekend);

      if (esFestivo(selectedDate) || isWeekend) {
        console.log('Es festivo o fin de semana');
        const restrictedStartMinutes = convertToMinutes('14:01');
        const restrictedEndMinutes = convertToMinutes('15:29');

        if (inputMinutes >= restrictedStartMinutes && inputMinutes <= restrictedEndMinutes) {
          return { intentoReservaHoraFestivo: true };
        }
      }
    }

    if (!isValid) {
      return { invalidTime: true };
    }

    return null;
  };
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit, AfterViewInit {
  language: LanguageCode = 'ES';
  is_mobile = false;

  reserva_intentada: boolean = false;
  formulario_reservas: FormGroup;

  hora_min: string = '13:00';
  hora_max: string = '24:59';

  fecha_hoy: string = todayDate();
  fin_de_anno: string = endOfYearDate();

  reserva_url: string = 'https://lafarfalla.es/api/reservas';

  texts_home: LanguageTextHome = this.textsService.getTextsHome()

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private textsService: TextsService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.formulario_reservas = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-ZáéíóúçÁÉÍÓÚÇ ]{3,40}')]],
      tel: ['', [Validators.required, Validators.pattern('[6-7,9]{1}[0-9]{8}')]],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
      hora: ['', [
        Validators.required,
        timeRangeValidator(this.hora_min, this.hora_max, '')
      ]],
      personas: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      politica: [false, Validators.requiredTrue],
    });
  }

  @ViewChild('html') html: ElementRef | undefined;
  ngOnInit() {
    this.is_mobile = this.deviceService.isMobile();
    if (!this.is_mobile) {
      this.is_mobile = this.deviceService.isTablet();
    }
    this.texts_home= this.textsService.getTextsHome()
    document.body.style.margin = "0";

    this.textsService.currentLanguage$.subscribe(new_lang => {
      this.language = new_lang;
      if (this.html) {
        if (new_lang === 'ZH') {
          this.html.nativeElement.lang = 'zh-CN';
        } else {
          this.html.nativeElement.lang = new_lang.toLowerCase();
        }
      }
      this.texts_home= this.textsService.getTextsHome();
    });
  }

  @ViewChild('fondo') fondo!: ElementRef;
  ngAfterViewInit() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.fondo.nativeElement.src = "../../assets/images/entrada2.jpg"
    } else {
      this.fondo.nativeElement.src = "../../assets/images/inicio.png"
    }
    let highlights = document.getElementsByClassName('highlight');
    for (let i = highlights.length - 1; i >= 0; i--) {
      let highlight = highlights[i] as HTMLElement;
      highlight.style.color = '#005C92';
      highlight.style.fontWeight = 'bold';
    }

    if (localStorage.getItem('cookiesAccepted') === 'true') {

      const cookies = document.cookie.split(';');
      const redirectCookie = cookies.find(cookie => cookie.trim().startsWith('redirect='));
      if (redirectCookie) {
        document.cookie = "redirect=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        this.goToReservas();
      }

      this.restoreFormData();
    }
  }

  @ViewChild('header') header: ElementRef | undefined;
  @ViewChild('aMedida') a_medida: ElementRef | undefined;
  @ViewChild('carta') carta: ElementRef | undefined;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.a_medida && this.carta) {
      const rect = this.a_medida.nativeElement.getBoundingClientRect();
      const rect2 = this.carta.nativeElement.getBoundingClientRect();

      if (rect.top <= 50) {
        if (this.header) {
          this.header.nativeElement.style.opacity = '1';
          this.header.nativeElement.style.top = '0';
        }
      } else {
        if (this.header) {
          this.header.nativeElement.style.opacity = '0';
          this.header.nativeElement.style.top = '-50px';
        }
      }
      if (rect2.top <= 15 || rect.top > 50) {
        if (this.header) {
          this.header.nativeElement.style.opacity = '0';
          this.header.nativeElement.style.top = '-50px';
        }
      }
    }
  }

  cambiarHorasConstraints() {
    const fecha_elegida = this.formulario_reservas.get('fecha')?.value;
    const dia = new Date(fecha_elegida).getDay();

    const today = new Date().toISOString().split('T')[0];
    if (fecha_elegida === today) {
      this.hora_min = getMinTimeForToday();
    } else {
      this.hora_min = '13:00';
    }

    if (dia <= 4) {
      this.hora_max = '24:45';
    } else {
      this.hora_max = '01:15';
    }

    console.log(this.hora_min, this.hora_max, dia, fecha_elegida);
    this.formulario_reservas.get('hora')?.setValidators([
      Validators.required,
      timeRangeValidator(this.hora_min, this.hora_max, fecha_elegida)
    ]);

    this.formulario_reservas.get('hora')?.updateValueAndValidity();
  }

  enviarReserva(): void {
    this.reserva_intentada = true;

    if (this.formulario_reservas.invalid) {
      console.log('Formulario inválido');
      return;
    }

    let form_value = { ... this.formulario_reservas.value };
    this.http.post(this.reserva_url, form_value).subscribe({
      next: (res) => {
        console.log('Reserva creada:', res)
        alert(`Reserva creada con éxito para el ${form_value.fecha} a las ${form_value.hora} para ${form_value.personas} personas`);
      },
      error: (err) => console.error('Error:', err)
    });
  }

  @ViewChild('checkbox') checkbox: ElementRef | undefined;
  @ViewChild('checkboxLabel') checkbox_label: ElementRef | undefined;
  @ViewChild('checkboxControl') checkbox_control: ElementRef | undefined;
  @HostListener('document:click', ['$event'])
  readPolicy(event: MouseEvent): void {
    if (!this.checkbox?.nativeElement.contains(event.target) &&
      !this.checkbox_control?.nativeElement.contains(event.target) &&
      this.checkbox_label?.nativeElement.contains(event.target)) {
      if (localStorage.getItem('cookiesAccepted') === 'true') {
        this.formulario_reservas.get('politica')?.setValue(true);

        const formData = this.formulario_reservas.value;
        const formDataString = JSON.stringify(formData);

        document.cookie = `formData=${formDataString}; path=/; max-age=1800;`;
        console.log(document.cookie);
      }
      this.router.navigate(['/privacy']);
    }
  }

  restoreFormData(): void {
    const cookies = document.cookie.split('; ');
    const formDataCookie = cookies.find(cookie => cookie.startsWith('formData='));

    if (formDataCookie) {
      this.reserva_intentada = true;

      const formDataString = formDataCookie.split('=')[1];
      const formData = JSON.parse(formDataString);

      this.formulario_reservas.patchValue(formData);

      const fecha_elegida = formData.fecha;

      this.formulario_reservas.get('hora')?.setValidators([
        Validators.required,
        timeRangeValidator(this.hora_min, this.hora_max, fecha_elegida)
      ]);

      this.formulario_reservas.get('hora')?.updateValueAndValidity();
    }
  }

  goToCarta(): void {
    this.router.navigate(['/carta']);
  }

  goToCartaWithSelection(i: number) {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      document.cookie = `redirectCarta=${i}; path=/`;
    }
    this.goToCarta()
  }

  @ViewChild('seccionReservas') seccion_reservas: ElementRef | null = null;
  goToReservas(): void {
    if (this.seccion_reservas) {
      this.seccion_reservas.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
