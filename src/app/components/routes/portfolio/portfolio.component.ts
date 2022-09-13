import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
 
  dataJM:any  = {
    name: "Juan Manuel Herrero",
    img: "../../../../assets/img/optimizadas/jmfinal.png",
    desc: "Estudiante universitario, autodidacta, trabajando en MMakers actualmente. Cofundador de BriCode.",    
  };

  dataBR:any  = {
    name: "Braian Vargas",
    img: "../../../../assets/img/optimizadas/brafinal.png",
    desc: "Estudiante universitario, autodidacta, amante de las tecnologias. Fundador de BriCode.",    
  };


}
