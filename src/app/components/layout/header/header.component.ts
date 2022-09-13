import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state1=true;
  state2=false;
  state3=false;
  state4=false;

  setHome(){
    this.state1 = true;
    this.state2 = false;
    this.state3 = false;
    this.state4 = false;
  }

  setQuienes(){
    this.state1 = false;
    this.state2 = true;
    this.state3 = false;
    this.state4 = false;
  }

  setContacto(){
    this.state1 = false;
    this.state2 = false;
    this.state3 = true;
    this.state4 = false;
  }

  setPortfolio(){
    this.state1 = false;
    this.state2 = false;
    this.state3 = false;
    this.state4 = true;
  }
}
