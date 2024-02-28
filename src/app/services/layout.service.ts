import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isLoading:boolean = false;
  constructor() {

  }
  
  setLoading(value:boolean){
    this.isLoading = value;
  }
}
