import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../details/details.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'home', component: HomeComponent},
  { path: 'details', component: DetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }