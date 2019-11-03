import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFieldComponent } from './first-field/first-field.component';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SecondFieldComponent } from './second-field/second-field.component';
import { RouterModule } from '@angular/router';
import { cardDirective } from './card.directive'
import { monthDirective } from './month.directive';
import { ThirdFieldComponent } from './third-field/third-field.component';
import { LastPageComponent } from './last-page/last-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFieldComponent,
    SecondFieldComponent,
    cardDirective,
    monthDirective,
    ThirdFieldComponent,
    LastPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
