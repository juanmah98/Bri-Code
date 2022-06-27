import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/routes/card/card.component';
import { ContactoComponent } from './components/routes/contacto/contacto.component';
import { HomeComponent } from './components/routes/home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'contacto', component: ContactoComponent}
 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
