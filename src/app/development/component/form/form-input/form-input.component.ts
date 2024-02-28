import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent {
  @Input() label:string = 'default'
  @Input() formContolName:string = 'default'
  @Input() placeholder:string = 'default'

  formControl!: FormControl;
  onTouched:any;
  onChange:any;

  value:string = ''
  constructor() {

  }

  ngOnInit(){
    const validators: ValidatorFn[]=[]
  }
}
