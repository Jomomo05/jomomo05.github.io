import { Component } from '@angular/core';

@Component({
  selector: 'app-skillscompetences',
  templateUrl: './skillscompetences.component.html',
  styleUrls: ['./skillscompetences.component.css']
})
export class SkillscompetencesComponent {

  competences : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let com1 = {
      comp : "C++",
      percentage : "4/5",
    };

    let com2 = {
      comp: "Python",
      percentage : "5/5",
    };

    let com3 = {
      comp : ".Net",
      percentage : "4/5",
    };

    let com4 = {
      comp : "Teamwork",
      percentage : "5/5",
    };

    this.competences.push(com1);
    this.competences.push(com2);
    this.competences.push(com3);



  }
}
