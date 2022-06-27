import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ContactoComponent
    
  ],
  
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class RoutesModule { }
