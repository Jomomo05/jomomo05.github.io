import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  certifications : Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let com1 = {
      cerName : "Green Belt",
      issuer : "Six Sigma International",
      expires : "Not Expires"
    };

    let com2 = {
      cerName : "PowerBi Certification",
      issuer : "Tec de Monterrey",
      expires : "Not Expires"
    };


    this.certifications.push(com1);
    this.certifications.push(com2);

  }

}
