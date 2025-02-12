// carta-pc.component.ts

import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TextsService } from "../texts.service";

type Secciones = 'ent' | 'seg' | 'piz' | 'car' | 'pos'
type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT' | 'ZH';

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
    styleUrls: ['./carta-pc.component.scss'],
    standalone: false
})
export class CartaPcComponent implements OnInit, AfterViewInit {
  texts_carta: LanguageTextCarta = this.textsService.getTextsCarta();
  current_element!: Element;
  current_index: number = 0;
  marca_element: Element | null = null;

  menuSectionsArray: { key: string, items: any[] }[] = [];
  private language: LanguageCode = "ES";
  currently_sin_gluten: boolean = false

  constructor(
    private router: Router,
    private textsService: TextsService,
    private cdr: ChangeDetectorRef,
    private viewportScroller: ViewportScroller
  ) {}

  @ViewChild('html') html: ElementRef | undefined;
  ngOnInit() {
    this.texts_carta = this.textsService.getTextsCarta();
    this.processMenuSections();

    this.textsService.currentLanguage$.subscribe(new_lang => {
      this.language = new_lang;

      this.currently_sin_gluten ? this.texts_carta = this.textsService.getTextsCartaSg() : this.texts_carta = this.textsService.getTextsCarta()

      if (this.html) {
        if (new_lang === 'ZH') {
          this.html.nativeElement.lang = 'zh-CN';
        } else {
          this.html.nativeElement.lang = new_lang.toLowerCase();
        }
      }
      this.processMenuSections();
      this.cdr.detectChanges();
      this.changeSection(this.current_index);
    });
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
        if (Number(value) >= 0 && Number(value) < 5) {
          this.changeSection(Number(value));
          return true;
        }
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

    if (!(localStorage.getItem('cookiesAccepted') === 'true') || !this.readRedirectCookie()) {
      this.changeSection(0)
      this.scrollToTop()
    } else {
      this.scrollToTop()
    }
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  isPyBSection(key: string): boolean {
    return key === 'PyB';
  }

  isSalsas(precio: any) {
    if (precio == '0') {
     return true
    }
    return false
  }

  changeSection(index: number) {
    const classes = ['menu-eye', 'menu-s', 'menu-p', 'menu-c', 'menu-pyb'];
    const section_classes = ['ent', 'seg', 'piz', 'car', 'pos'];

    const section_class = section_classes[index];
    const section_class_plus = classes[index];
    if (this.current_element && this.current_element.textContent?.includes(section_class)) {
      this.unselect();
      return;
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
      this.current_index = index;
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

  getClassName(index: number) {
    const classes = ['ent', 'seg', 'piz', 'car', 'pos'];
    return classes[index];
  }

  @ViewChild('marca') marca!: ElementRef;
  unselect() {

    if (this.current_element) {
      this.current_element.classList.remove('selected');
      if (this.marca_element) {
          const image = this.current_element.children[0] as HTMLImageElement;
          if (image) {
            image.src = image.src.replace('.png', '6.png')
          }
        this.current_element = this.marca_element;
      }
    }
    const all_elements = document.getElementsByClassName('menu');
    for (let i = 0; i < all_elements.length; i++) {
      all_elements[i].classList.add('hidden');
    }
  }

  @ViewChild('flip') flip!: ElementRef;
  toggleSinGluten() {
    this.currently_sin_gluten = !this.currently_sin_gluten;

    this.flip.nativeElement.checked = this.currently_sin_gluten;

    this.texts_carta = this.currently_sin_gluten
      ? this.textsService.getTextsCartaSg()
      : this.textsService.getTextsCarta();

    const current_element = this.current_element.classList[1]
    const classes = ['ent', 'seg', 'piz', 'car', 'pos'];
    const current_index = classes.indexOf(current_element);
    this.processMenuSections()
    this.cdr.detectChanges();
    this.changeSection(current_index);
    this.changeSection(current_index);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToReservas() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      document.cookie = "redirect=reservas; max-age=20";
    }
    this.goToHome()
  }

  isVinos(key: string) {
    if (key == 'Vinos') {
      return true
    }
    return false
  }
}
