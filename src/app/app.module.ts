import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing/app.routing';
import { HomeComponent } from './home/home.component';
import {
  MdSidenavModule,
  MdButtonModule,
  MdInputModule,
  MdCardModule,
  MdIconModule,
  MdSelectModule,
  MdTableModule,
  MdCheckboxModule,
  MdChipsModule,
  MdSnackBarModule,
  MdTabsModule,
} from "@angular/material";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
    MdTableModule,
    MdCheckboxModule,
    MdChipsModule,
    MdSnackBarModule,
    MdTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
