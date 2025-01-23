import {AfterViewInit, Component, ViewChild, HostListener, ElementRef, OnInit} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { TextsService } from "./texts.service";

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  is_mobile = false;
  language: LanguageCode = 'ES';

  title: string | undefined;

  constructor(private deviceService: DeviceDetectorService, private router: Router, private TextsService: TextsService) { }
  ngOnInit() {
    this.is_mobile = this.deviceService.isMobile();
    if (!this.is_mobile) {
      this.is_mobile = this.deviceService.isTablet();
    }
    document.body.style.margin = "0";
  }

  ngAfterViewInit() {
    let highlights = document.getElementsByClassName('highlight');
    for (let i = highlights.length - 1; i >= 0; i--) {
      let highlight = highlights[i] as HTMLElement;
      highlight.style.color = '#005C92';
      highlight.style.fontWeight = 'bold';
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
    this.TextsService.setLanguage(new_language);
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
}

