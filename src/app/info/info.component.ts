import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../shared/language.service";
import {filter, map, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  infoText = 'info';

  constructor(
    private languageService: LanguageService
  ) {
  }

  ngOnInit(): void {
    this.languageService.$currentLanguage
      .pipe(
        // take(3),
        // filter(data => data !== 'EN'),
        map(data => 'Current language: ' + data),
        tap( data => console.log(data) )
      )
      .subscribe(
        value => this.infoText = value
      );
  }

}
