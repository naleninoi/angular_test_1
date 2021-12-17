import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  $currentLanguage = new BehaviorSubject<string>('EN');
  language = 'EN';

  constructor() { }
}
