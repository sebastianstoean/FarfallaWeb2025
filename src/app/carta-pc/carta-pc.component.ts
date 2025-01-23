// carta-pc.component.ts

import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TextsService } from "../texts.service";
import { DeviceDetectorService } from "ngx-device-detector";
import {delay} from "rxjs";

type Secciones = 'ent' | 'seg' | 'piz' | 'car' | 'pos'

interface MenuItem {
  titulo: string;
  texto: string[];
  precio: string[];
}

interface MenuItem2 extends MenuItem {
  especial: string;
}

interface MenuSection {
  EyE: MenuItem[];
  S: MenuItem[];
  P: MenuItem[];
  C: MenuItem[];
  PyB: MenuItem2[];
}

interface LanguageTextCarta {
  botones: string[];
  titulo: string;
  titulos: string[];
  menu_sections: MenuSection;
}

@Component({
  selector: 'app-carta-pc',
  templateUrl: './carta-pc.component.html',
  styleUrls: ['./carta-pc.component.scss']
})
export class CartaPcComponent implements OnInit, AfterViewInit {
  texts_carta: LanguageTextCarta = this.textsService.getTextsCarta();
  current_element!: Element;
  marca_element: Element | null = null;

  menuSectionsArray: { key: string, items: any[] }[] = [];

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router,
    private textsService: TextsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.textsService.currentLanguage$.subscribe(new_lang => {
      this.texts_carta = this.textsService.getTextsCarta();
    });
    this.processMenuSections()
  }

  private processMenuSections() {
    if (this.texts_carta && this.texts_carta.menu_sections) {
      this.menuSectionsArray = Object.entries(this.texts_carta.menu_sections).map(([key, items]) => ({ key, items }));
    }
  }

  readRedirectCookie(): boolean {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');

      if (key === 'redirectCarta') {
        switch (value){
          case '0':
            this.changeSection('ensaladas y entrantes')
            break;
          case '1':
            this.changeSection('segundos platos')
            break;
          case '2':
            this.changeSection('pizzas')
            break;
          case '3':
            this.changeSection('carnes')
            break;
          case '4':
            this.changeSection('postres y bebidas')
            break;
        }
        return true;
      }
    }
    return false;
  }

  @ViewChild('header') header!: ElementRef;
  @ViewChild('contenido') contenido_element!: ElementRef;
  ngAfterViewInit() {
    const header_element = this.header.nativeElement;
    const header_height = header_element.clientHeight;
    const device_width = window.innerWidth;

    const marginTop = device_width > 440 ? header_height + 90 : header_height  + 50;

    if (this.contenido_element) {
      this.contenido_element.nativeElement.style.marginTop = `${marginTop}px`;
    }

    const marca = document.getElementById('marca')!;
    this.marca_element = marca

    if (!this.readRedirectCookie()) {
      this.changeSection('Ensaladas y Entrantes')
    }
  }

  isPyBSection(key: string): boolean {
    return key === 'PyB';
  }

  isSalsas(titulo: any) {
    if (titulo == 'Salsa para Pastas') {
     return true
    }
    return false
  }

  changeSection(titulo: string) {
    if (this.current_element && this.current_element.textContent?.includes(titulo)) {
      this.unselect();
      return;
    }

    const section_class = titulo.slice(0, 3).toLowerCase();
    let section_class_plus!: string
    switch (section_class) {
      case "ens":
        section_class_plus = 'menu-eye';
        break;
      case "seg":
        section_class_plus = 'menu-s';
        break;
      case "piz":
        section_class_plus = 'menu-p';
        break;
      case "car":
        section_class_plus = 'menu-c';
        break;
      case "pos":
        section_class_plus = 'menu-pyb';
        break;
    }
    if (this.current_element) {
      const old_image = this.current_element.children[0] as HTMLImageElement;
      if (old_image) {
        old_image.src = old_image.src.replace('.png', '6.png')
      }
      this.current_element.classList.remove('selected');
    }

    const new_element = document.getElementsByClassName(section_class)[0];
    if (new_element) {
      const image = new_element.children[0] as HTMLImageElement;
      if (image) {
        image.src = image.src.replace('6', '')
      }
      new_element.classList.add('selected');
      this.current_element = new_element;
    }

    const all_elements = document.getElementsByClassName('menu')
    for (let i = 0; i < all_elements.length; i++) {
      const element = all_elements[i];

      if (element.classList.contains(section_class_plus)) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  }

  getClassName(titulo: string) {
    return titulo.slice(0,3).toLowerCase();
  }

  @ViewChild('marca') marca!: ElementRef;
  unselect() {
    if (this.current_element) {
      this.current_element.classList.remove('selected');
      if (this.marca_element) {
        this.current_element = this.marca_element;
      }
    }

    const all_elements = document.getElementsByClassName('menu');
    for (let i = 0; i < all_elements.length; i++) {
      all_elements[i].classList.add('hidden');
    }
  }

  currently_sin_gluten: boolean = false
  toggleSinGluten() {
    this.currently_sin_gluten = !this.currently_sin_gluten;
    this.texts_carta = this.currently_sin_gluten
      ? this.textsService.getTextsCartaSg()
      : this.textsService.getTextsCarta();
    const current_element = this.current_element.classList[1]
    this.processMenuSections()
    this.cdr.detectChanges();
    this.changeSection(current_element);
    this.changeSection(current_element);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToReservas() {
    document.cookie = "redirect=reservas; max-age=20";
    this.goToHome()
  }

  isVinos(key: string) {
    if (key == 'Vinos') {
      return true
    }
    return false
  }
}
