import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  languages : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let l1 = {
      name : "Spanish",
      skill : "Native"
    };

    let l2 = {
      name : "English",
      skill : "Advanced"
    };


    this.languages.push(l1);
    this.languages.push(l2);

  }
}
