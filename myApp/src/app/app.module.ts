import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonDirective } from './button.directive';
import { FormsModule } from '@angular/forms';
import { ReverseIfDirective } from './reverse-if.directive';
import { ExerciseDirective } from './exercise.directive';
import { LoginComponent } from './login/login.component';
import { LoginexerciseComponent } from './loginexercise/loginexercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDirective,
    ReverseIfDirective,
    ExerciseDirective,
    LoginComponent,
    LoginexerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
