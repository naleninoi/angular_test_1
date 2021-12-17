import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-language-check',
  templateUrl: './language-check.component.html',
  styleUrls: ['./language-check.component.css']
})
export class LanguageCheckComponent implements OnInit {

  currentLanguage: string = 'EN';

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.currentLanguage = event.target.value;
    this.languageService.$currentLanguage.next(this.currentLanguage);
  }

}
