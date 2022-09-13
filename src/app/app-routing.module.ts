import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/routes/card/card.component';
import { ContactoComponent } from './components/routes/contacto/contacto.component';
import { HomeComponent } from './components/routes/home/home.component';
import { PortfolioComponent } from './components/routes/portfolio/portfolio.component';
import { SkillsComponent } from './components/routes/skills/skills.component';
import { Skills2Component } from './components/routes/skills2/skills2.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'skills2', component: Skills2Component}
 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
