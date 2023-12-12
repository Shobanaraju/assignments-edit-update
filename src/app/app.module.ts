import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ColorComponent } from './components/color/color.component';
import { ChildRedColorComponent } from './components/child-red-color/child-red-color.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorComponent,
    ChildRedColorComponent,
   
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
