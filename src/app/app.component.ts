import {AfterViewInit, Component, ViewChild, HostListener, ElementRef, OnInit} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { TextsService } from "./texts.service";
import {
  FormBuilder,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT';
type LanguageKey = keyof TextsHome;

interface LanguageTextHome {
  botones: string[];
  titulos: string[];
  textos: string[];
  carta: string[];
  formulario: string[];
  footer: string;
  horario: string[];
  errores: string[];
}

interface TextsHome {
  ES: LanguageTextHome;
  FR: LanguageTextHome;
  DE: LanguageTextHome;
  EN: LanguageTextHome;
  IT: LanguageTextHome;
}

interface LanguageTextCarta {

}

interface TextsCarta {
  ES: LanguageTextCarta;
  FR: LanguageTextCarta;
  DE: LanguageTextCarta;
  EN: LanguageTextCarta;
  IT: LanguageTextCarta;
}

function todayDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function endOfYearDate(): string {
  const now = new Date();
  const year = now.getMonth() >= 10 ? now.getFullYear() + 1 : now.getFullYear();
  const endOfYear = new Date(year, 11, 31);
  return endOfYear.toISOString().split('T')[0];
}

function timeRangeValidator(minTime: string, maxTime: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputTime = control.value;

    if (!inputTime) {
      return null;
    }

    const minDate = timeStringToDate(minTime);
    const maxDate = timeStringToDate(maxTime);
    const inputDate = timeStringToDate(inputTime);

    if (minDate > maxDate) {
      maxDate.setDate(maxDate.getDate() + 1);
    }

    if (inputDate < minDate || inputDate > maxDate) {
      return { invalidTime: true };
    }

    return null;
  };
}
function timeStringToDate(timeString: string): Date {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  is_mobile = false;
  language: LanguageCode = 'ES';

  reserva_intentada: boolean = false;
  formulario_reservas: FormGroup;

  fecha_hoy: string = todayDate();
  fin_de_anno: string = endOfYearDate();

  hora_min: string = '13:00';
  hora_max: string = '01:00';

  title: string | undefined;

  constructor(private deviceService: DeviceDetectorService, private router: Router, private TextsService: TextsService, private fb: FormBuilder) {
    this.formulario_reservas = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,40}')]],
      tel: ['', [Validators.required, Validators.pattern('[6-7,9]{1}[0-9]{8}')]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      personas: [1, [Validators.required, Validators.min(1), Validators.max(12)]],
      politica: [false, Validators.requiredTrue],
    });
  }
  ngOnInit() {
    this.is_mobile = this.deviceService.isMobile();
    if (!this.is_mobile) {
      this.is_mobile = this.deviceService.isTablet();
    }
    this.setLanguageTexts();
    document.body.style.margin = "0";
  }

  ngAfterViewInit() {
    let highlights = document.getElementsByClassName('highlight');
    for (let i = highlights.length - 1; i >= 0; i--) {
      let highlight = highlights[i] as HTMLElement;
      highlight.style.color = '#005C92';
      highlight.style.fontWeight = 'bold';
    }

    this.restoreFormData();
  }

  es_lang_home: LanguageTextHome = {
    botones: ['Carta', 'Reservar'],
    titulos: ['desde 1981', 'Bienvenidos', 'a Il Piccolino della Farfalla', 'A medida para ti', 'Nuestra Carta', '¿Quieres venir?', 'Nuestro Horario', 'Reservar'],
    textos: [
      'Il Piccolino della Farfalla abrió sus puertas en 1981 como un pequeño negocio familiar, convirtiéndose rápidamente en un punto de encuentro para actores, músicos, bailarines y magos. Tras sus actuaciones, buscaban aquí un rincón acogedor donde disfrutar de platos caseros, frescos, abundantes y a un precio inigualable.',
      'En Il Piccolino della Farfalla, consideramos importante que todos puedan disfrutar de una experiencia gastronómica inolvidable, sin importar sus necesidades o preferencias. Por eso, hemos diseñado un menú con opciones para todos: <span class="highlight">platos vegetarianos, recetas veganas</span> y, sobre todo, <span class="highlight">una gran selección sin gluten</span>, pensada para que disfrutes sin preocupaciones y sin renunciar al sabor.'
    ],
    carta: ['Entrantes y Ensaladas', 'Segundos Platos', 'Pizzas', 'Carnes', 'Postres y Bebidas'],
    formulario: ['Nombre', 'Teléfono de contacto', 'Fecha', 'Hora', 'Número de personas', 'He leído y acepto la Política de Privacidad', "Reservar"],
    footer: 'Teléfono',
    horario: ['Lunes a Jueves<br>13:00 - 02:00', 'Viernes, Sábados y Festivos<br>13:00 - 02:30', 'Domingos<br>13:00 - 17:00', 'Teléfono: 913694391', 'La última reserva será 1h15min antes del cierre'],
    errores: [
      'El nombre es obligatorio.',
      'El nombre debe ser solo letras y tener entre 3 y 40 caracteres.',
      'El teléfono es obligatorio.',
      'El teléfono es inválido. Asegúrate de introducir un número de España',
      'La fecha es obligatoria.',
      'La hora es obligatoria.',
      'La hora debe estar entre ',
      ' y ',
      'El número de personas es obligatorio.',
      'El mínimo de personas es 1.',
      'El máximo de personas es 12 personas, si son más, llámenos.',
      "Es obligatorio aceptar la política de privacidad"]
  };

  fr_lang_home: LanguageTextHome = {
    botones: ['Carte', 'Réserver'],
    titulos: ['depuis 1981', 'Bienvenue', 'à Il Piccolino della Farfalla', 'Sur mesure pour vous', 'Notre carte', 'Voulez-vous venir ?', 'Nos horaires', 'Réserver'],
    textos: [
      'Il Piccolino della Farfalla a ouvert ses portes en 1981 en tant que petite entreprise familiale, devenant rapidement un lieu de rencontre pour les acteurs, musiciens, danseurs et magiciens. Après leurs performances, ils cherchaient ici un coin accueillant pour profiter de plats faits maison, frais, copieux et à un prix imbattable.',
      'Chez Il Piccolino della Farfalla, nous considérons qu\'il est important que chacun puisse profiter d\'une expérience gastronomique inoubliable, peu importe ses besoins ou préférences. C\'est pourquoi nous avons conçu un menu avec des options pour tous : plats végétariens, recettes véganes et, surtout, une grande sélection sans gluten, pensée pour que vous puissiez profiter sans souci et sans renoncer à la saveur.'
    ],
    carta: ['Entrées et Salades', 'Plats principaux', 'Pizzas', 'Viandes', 'Desserts et boissons'],
    formulario: ['Nom', '\'Numéro de contact (en Espagne)\'\n', 'Date', 'Heure', 'Nombre de personnes', 'J\'ai lu et j\'accepte la politique de confidentialité', "Réserver"],
    footer: 'Téléphone',
    horario: ['Lundi à Jeudi<br>13:00 - 02:00', 'Vendredi, Samedi et Jours Fériés<br>13:00 - 02:30', 'Dimanche<br>13:00 - 17:00', 'Téléphone : 913694391', 'La dernière réservation sera 1h15 avant la fermeture.'],
    errores: [
      'Le nom est obligatoire.',
      'Le nom doit contenir uniquement des lettres et comporter entre 3 et 40 caractères.',
      'Le numéro de téléphone est obligatoire.',
      'Le numéro de téléphone est invalide. Il doit s\'agir d\'un numéro de téléphone espagnol.',
      'La date est obligatoire.',
      'L\'heure est obligatoire.',
      'L\'heure doit être comprise entre ',
      ' et ',
      'Le nombre de personnes est obligatoire.',
      'Le minimum de personnes est 1.',
      'Le maximum de personnes est de 12, pour plus de personnes, veuillez nous appeler.',
      'Il est obligatoire d\'accepter la politique de confidentialité.'
    ]

};

  de_lang_home: LanguageTextHome = {
    botones: ['Karte', 'Reservieren'],
    titulos: ['seit 1981', 'Willkommen', 'im Il Piccolino della Farfalla', 'Maßgeschneidert für Sie', 'Unsere Karte', 'Möchten Sie kommen?', 'Unsere Öffnungszeiten', 'Reservieren'],
    textos: [
      'Il Piccolino della Farfalla öffnete 1981 seine Türen als kleines Familienunternehmen und wurde schnell zu einem Treffpunkt für Schauspieler, Musiker, Tänzer und Zauberer. Nach ihren Aufführungen suchten sie hier eine gemütliche Ecke, um hausgemachte, frische, reichhaltige Gerichte zu genießen, die zu einem unschlagbaren Preis angeboten wurden.',
      'Im Il Piccolino della Farfalla halten wir es für wichtig, dass jeder ein unvergessliches gastronomisches Erlebnis genießen kann, unabhängig von seinen Bedürfnissen oder Vorlieben. Deshalb haben wir ein Menü mit Optionen für alle entwickelt: vegetarische Gerichte, vegane Rezepte und vor allem eine große Auswahl an glutenfreien Gerichten, die dafür sorgen, dass Sie ohne Sorgen genießen können, ohne auf Geschmack zu verzichten.'
    ],
    carta: ['Vorspeisen und Salate', 'Hauptgerichte', 'Pizzen', 'Fleisch', 'Desserts und Getränke'],
    formulario: ['Name', '\'Kontakttelefonnummer (in Spanien)\'', 'Datum', 'Uhrzeit', 'Anzahl der Personen', 'Ich habe die Datenschutzrichtlinie gelesen und akzeptiere sie', "Reservieren"],
    footer: 'Telefon',
    horario: ['Montag bis Donnerstag<br>13:00 - 02:00', 'Freitag, Samstag und Feiertage<br>13:00 - 02:30', 'Sonntag<br>13:00 - 17:00', 'Telefon: 913694391', 'Die letzte Reservierung erfolgt 1h15min vor Schließung.'],
    errores: [
      'Der Name ist erforderlich.',
      'Der Name darf nur Buchstaben enthalten und muss zwischen 3 und 40 Zeichen lang sein.',
      'Die Telefonnummer ist erforderlich.',
      'Die Telefonnummer ist ungültig. Es muss eine spanische Telefonnummer sein.',
      'Das Datum ist erforderlich.',
      'Die Uhrzeit ist erforderlich.',
      'Die Uhrzeit muss zwischen ',
      ' und ',
      'Die Anzahl der Personen ist erforderlich.',
      'Die Mindestanzahl an Personen ist 1.',
      'Die Höchstanzahl an Personen beträgt 12; bei mehr Personen kontaktieren Sie uns bitte.',
      'Es ist erforderlich, die Datenschutzrichtlinie zu akzeptieren.'
    ]

  };

  en_lang_home: LanguageTextHome = {
    botones: ['Menu', 'Reserve'],
    titulos: ['since 1981', 'Welcome', 'to Il Piccolino della Farfalla', 'Made specially for you', 'Our Menu', 'Do you want to come?', 'Our Schedule', 'Reserve'],
    textos: [
      'Il Piccolino della Farfalla opened its doors in 1981 as a small family business, quickly becoming a meeting point for actors, musicians, dancers, and magicians. After their performances, they would seek a cozy corner here to enjoy homemade, fresh, abundant dishes at an unbeatable price.',
      'At Il Piccolino della Farfalla, we believe it\'s important that everyone can enjoy an unforgettable dining experience, regardless of their needs or preferences. That\'s why we have designed a menu with options for everyone: vegetarian dishes, vegan recipes, and, most importantly, a great selection of gluten-free options, so you can enjoy without worries and without sacrificing taste.'
    ],
    carta: ['Starters and Salads', 'Main Dishes', 'Pizzas', 'Meats', 'Desserts and beverages'],
    formulario: ['Name', 'Spanish Contact Number', 'Date', 'Time', 'Number of people', 'I have read and accept the Privacy Policy', "Reserve"],
    footer: 'Phone',
    horario: ['Monday to Thursday<br>13:00 - 02:00', 'Friday, Saturday, and Holidays<br>13:00 - 02:30', 'Sunday<br>13:00 - 17:00', 'Phone: 913694391', 'The last reservation will be 1h15min before closing.'],
    errores: [
      'The name is required.',
      'The name must contain only letters and be between 3 and 40 characters.',
      'The phone number is required.',
      'The phone number is invalid. It must be a Spanish phone number.',
      'The date is required.',
      'The time is required.',
      'The time must be between ',
      ' and ',
      'The number of people is required.',
      'The minimum number of people is 1.',
      'The maximum number of people is 12; if there are more, please call us.',
      'It is mandatory to accept the privacy policy.'
    ]

  };

  it_lang_home: LanguageTextHome = {
    botones: ['Carta', 'Prenotare'],
    titulos: ['dal 1981', 'Benvenuti', 'a Il Piccolino della Farfalla', 'Su misura per te', 'Il nostro menù', 'Vuoi venire?', 'I nostri orari', 'Prenotare'],
    textos: [
      'Il Piccolino della Farfalla ha aperto le sue porte nel 1981 come una piccola attività familiare, diventando rapidamente un punto di incontro per attori, musicisti, ballerini e maghi. Dopo le loro esibizioni, cercavano qui un angolo accogliente dove gustare piatti fatti in casa, freschi, abbondanti e a un prezzo imbattibile.',
      'Da Il Piccolino della Farfalla, riteniamo che sia importante che tutti possano godere di un\'esperienza gastronomica indimenticabile, indipendentemente dalle loro necessità o preferenze. Per questo motivo, abbiamo progettato un menù con opzioni per tutti: piatti vegetariani, ricette vegane e, soprattutto, una grande selezione senza glutine, pensata per permetterti di gustare senza preoccupazioni e senza rinunciare al sapore.'
    ],
    carta: ['Antipasti e Insalate', 'Piatti principali', 'Pizze', 'Carni', 'Desserts e bevande'],
    formulario: ['Nome', 'Numero di contatto (spagnolo)', 'Data', 'Orario', 'Numero di persone', 'Ho letto e accetto la Politica sulla Privacy', "Prenotare"],
    footer: 'Telefono',
    horario: ['Lunedì a Giovedì<br>13:00 - 02:00', 'Venerdì, Sabato e Festivi<br>13:00 - 02:30', 'Domenica<br>13:00 - 17:00', 'Telefono: 913694391', 'L\'ultima prenotazione sarà 1h15min prima della chiusura.'],
    errores: [
      'Il nome è obbligatorio.',
      'Il nome deve contenere solo lettere e avere tra 3 e 40 caratteri.',
      'Il numero di telefono è obbligatorio.',
      'Il numero di telefono non è valido. Deve essere un numero di telefono spagnolo.',
      'La data è obbligatoria.',
      'L\'orario è obbligatorio.',
      'L\'orario deve essere tra ',
      ' e ',
      'Il numero di persone è obbligatorio.',
      'Il numero minimo di persone è 1.',
      'Il numero massimo di persone è 12; per un numero maggiore, contattaci.',
      'È obbligatorio accettare la politica sulla privacy.'
    ]

  };

  all_texts_home: TextsHome = {
    ES: this.es_lang_home,
    FR: this.fr_lang_home,
    DE: this.de_lang_home,
    EN: this.en_lang_home,
    IT: this.it_lang_home,
  };

  texts_home: LanguageTextHome = this.all_texts_home['ES'];
  current_language_texts_carta: LanguageTextCarta = this.all_texts_home['ES'];

  setLanguageTexts() {
    this.texts_home = this.all_texts_home[this.language];
    this.current_language_texts_carta = this.all_texts_home[this.language];
    this.TextsService.textsHome = this.all_texts_home[this.language];
    this.TextsService.textsCarta = this.all_texts_home[this.language];
    this.TextsService.textLangBasic = this.language;
  }

  @ViewChild('seccionReservas') seccion_reservas: ElementRef | null = null;
  goToReservas(): void {
    if (this.seccion_reservas) {
      this.seccion_reservas.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  open_popup = false
  @ViewChild('cambioIdioma') cambio_idioma_popup: ElementRef | null = null;
  openLanguageChanger() {
    if (this.cambio_idioma_popup) {
      this.open_popup = true;
      this.cambio_idioma_popup.nativeElement.style.opacity = '1';
      this.cambio_idioma_popup.nativeElement.style.transform = 'translateX(0)';
    }
  }
  closeLanguageChanger() {
    if (this.cambio_idioma_popup) {
      this.open_popup = false;
      this.cambio_idioma_popup.nativeElement.style.opacity = '0';
      this.cambio_idioma_popup.nativeElement.style.transform = 'translateX(200%)';
    }
  }

  changeLanguage(new_language: LanguageCode) {
    this.language = new_language;
    this.setLanguageTexts()
    this.closeLanguageChanger()
  }

  @ViewChild('openPopup1') opener1: ElementRef | undefined;
  @ViewChild('openPopup2') opener2: ElementRef | undefined;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.cambio_idioma_popup && this.opener1 && this.opener2 &&
      !this.opener1.nativeElement.contains(event.target) &&
      !this.opener2.nativeElement.contains(event.target) &&
      !this.cambio_idioma_popup.nativeElement.contains(event.target)) {
      this.closeLanguageChanger();
    }
  }

  cambiarHorasConstraints() {
    const fecha_elegida = this.formulario_reservas.get('fecha')?.value;
    const dia = new Date(fecha_elegida).getDay();

    if (dia === 0) {
      this.hora_min = '13:00';
      this.hora_max = '15:45';
    } else if (dia >= 1 && dia <= 4) {
      this.hora_min = '13:00';
      this.hora_max = '00:45';
    } else {
      this.hora_min = '13:00';
      this.hora_max = '01:15';
    }

    console.log(this.hora_min, this.hora_max, dia, fecha_elegida);
    this.formulario_reservas.get('hora')?.setValidators([
      Validators.required,
      timeRangeValidator(this.hora_min, this.hora_max)  // Usa el validador de rango de tiempo
    ]);
  }

  enviarReserva(): void {
    console.log('Form submitted:', this.formulario_reservas.value);
    console.log(this.formulario_reservas.valid);
    this.reserva_intentada = true;
  }

  @ViewChild('checkbox') checkbox: ElementRef | undefined;
  @ViewChild('checkboxLabel') checkbox_label: ElementRef | undefined;
  @ViewChild('checkboxControl') checkbox_control: ElementRef | undefined;
  @HostListener('document:click', ['$event'])
  readPolicy(event: MouseEvent): void {
    if (!this.checkbox?.nativeElement.contains(event.target) &&
      !this.checkbox_control?.nativeElement.contains(event.target) &&
      this.checkbox_label?.nativeElement.contains(event.target)) {
      console.log("read policy");

      // Guardar los valores del form en una cookie
      const formData = this.formulario_reservas.value;
      const formDataString = JSON.stringify(formData);

      document.cookie = `formData=${formDataString}; path=/; max-age=1800;`; // 30 minutos
    }
  }

  restoreFormData(): void {
    const cookies = document.cookie.split('; ');
    const formDataCookie = cookies.find(cookie => cookie.startsWith('formData='));

    if (formDataCookie) {
      const formDataString = formDataCookie.split('=')[1];
      const formData = JSON.parse(formDataString);

      this.formulario_reservas.patchValue(formData);
    }
  }
}

