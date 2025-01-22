import {EventEmitter, Injectable} from '@angular/core';

type LanguageCode = 'ES' | 'FR' | 'DE' | 'EN' | 'IT';

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  _texts_home: any;
  _texts_carta: any;
  _text_language: LanguageCode = "ES";
  languageChanged = new EventEmitter<LanguageCode>();

  get textsHome() {
    return this._texts_home;
  }
  set textsHome(new_texts: any) {
    this._texts_home = new_texts;
  }

  get textsCarta() {
    return this._texts_carta;
  }
  set textsCarta(new_texts: any) {
    this._texts_carta = new_texts;
  }

  get textLang() {
    return this._text_language;
  }
  set textLangBasic(new_lang: LanguageCode) {
    this._text_language = new_lang;
  }
  set textLang(new_lang: LanguageCode) {
    this._text_language = new_lang;
    this.languageChanged.emit(new_lang);
  }

  constructor() { }
}
