import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,ConfirmEqualValidatorDirective, VerifyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }