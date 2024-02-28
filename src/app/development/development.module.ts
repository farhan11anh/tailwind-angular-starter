import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopmentRoutingModule } from './development-routing.module';
import { DevelopmentComponent } from './development.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { CardComponent } from './component/card/card.component';
import { DefaultComponent } from './layout/default/default.component';
import { NgIconsModule } from '@ng-icons/core';
import * as heroicons from '@ng-icons/heroicons/solid';
import * as outlinehero from '@ng-icons/heroicons/outline';
import { FormInputComponent } from './component/form/form-input/form-input.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModalComponent } from './component/modal/default-modal/default-modal.component';


@NgModule({
  declarations: [
    DevelopmentComponent,
    CarouselComponent,
    CardComponent,
    DefaultComponent,
    FormInputComponent,
    HomeComponent,
    DefaultModalComponent
  ],
  imports: [
    CommonModule,
    DevelopmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgIconsModule.withIcons({
      ...heroicons, ...outlinehero
    })
  ],
  exports : [
    DefaultComponent,
    CardComponent,
    CarouselComponent
  ]
})
export class DevelopmentModule { }
