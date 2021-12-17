import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerTitle = {
    EN: 'OUR FOOTER IN ENGLISH',
    RU: 'НАШ ПОДВАЛ НА РУССКОМ'
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
