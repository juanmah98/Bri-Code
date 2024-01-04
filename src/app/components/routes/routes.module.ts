import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { Skills2Component } from './skills2/skills2.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ContactoComponent,
    PortfolioComponent,
    SkillsComponent,
    Skills2Component,
    FormComponent
    
  ],
  
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class RoutesModule { }
