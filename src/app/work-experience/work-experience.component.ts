import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let work1 = {
      fecha : "2021-2022",
      ubicacion : "Monterrey, Nuevo Leon",
      puesto : "System Administrator",
      empresa: "Tec de Monterrey",
      logros : [
        {descripcion : "Administrar un sistema de mas de cinco mil estudiantes"},
        {descripcion: "Creacion de paneles de Salud del Sistema"}
      ]
    };

    let work2 = {
      fecha : "Abr-Jun 2022",
      ubicacion : "Monterrey, Nuevo Leon",
      puesto : "Full Stack Developer",
      empresa: "ATOS",
      logros : [
        {descripcion : "Realizacion de un Sitio Web completo para registrar interesados en la empresa (jobs)."},
        {descripcion: "Realizado en .NET"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);



  }


}
