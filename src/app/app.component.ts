import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  constructor(
    private spinner : NgxSpinnerService,
    private sidebarService: NbSidebarService
  ){

  }

  ngOnInit(): void {
    initFlowbite();
    this.spinner.show();
    this.stopSpinner();
  }

  toggle() {
    this.sidebarService.onCollapse().subscribe(()=>{
      
    })
  }

  stopSpinner(){
    setTimeout(()=>this.spinner.hide(), 5000)
  }
}
