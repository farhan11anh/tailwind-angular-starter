import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myForm:FormGroup;

  constructor(
    private fb : FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.myForm.value);

  }

  onChange(event:any){
    console.log(event);
    this.myForm.get('name')?.setValue(event)
  }
}
