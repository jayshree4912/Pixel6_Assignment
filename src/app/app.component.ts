import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


declare var NgForm:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }
  title = 'reactive-form-validation-in-angular8';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      pannumber: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      
    });

  }

  get fval() { 
    return this.registerForm.controls; 
  }
  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!'); 
    // this.routers.navigate(['/verify']); 
  }
}
