import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { CollapseComponent } from './collapse/collapse.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { DismissComponent } from './dismiss/dismiss.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PopoverComponent } from './popover/popover.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DevelopmentModule } from './development/development.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptService } from './services/http-intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AccordionComponent,
    CarouselComponent,
    ModalComponent,
    CollapseComponent,
    SpeedDialComponent,
    DismissComponent,
    DrawerComponent,
    DropdownComponent,
    PopoverComponent,
    TabsComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevelopmentModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
