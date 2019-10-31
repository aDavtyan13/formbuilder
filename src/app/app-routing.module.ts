import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFieldComponent } from './first-field/first-field.component';
import { SecondFieldComponent } from './second-field/second-field.component';


const routes: Routes = [
  { path: 'first', component: FirstFieldComponent },
  { path: 'second', component: SecondFieldComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
