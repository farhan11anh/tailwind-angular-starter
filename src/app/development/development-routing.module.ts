import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './development.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuInputComponent } from './pages/menu-input/menu-input.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu-input',
    component: MenuInputComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentRoutingModule { }
