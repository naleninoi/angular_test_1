import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainTitle = {
    EN: 'OUR BEAUTIFUL MAIN PAGE IN ENGLISH',
    RU: 'НАША ПРЕКРАСНАЯ СТРАНИЦА НА РУССКОМ',
    FR: 'NOTRE PAGE BELLE EN FRANCAIS'
  }

  language: string;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.language = this.languageService.language;
    this.languageService.$currentLanguage.subscribe(
      value => this.language = value
    );
  }

}
