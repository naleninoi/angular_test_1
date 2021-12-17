import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = {
    EN: 'OUR HEADER IN ENGLISH',
    RU: 'НАШ ВЕРХНИЙ РАЗДЕЛ НА РУССКОМ'
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
