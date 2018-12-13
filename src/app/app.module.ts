import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import {AclService} from "angular2-acl/dist/index";
import { HeaderComponent } from './header/header.component';
import { LabelDataComponent } from './label-data/label-data.component';
import { SurveyConfigComponent } from './survey-config/survey-config.component';
import {AclResolver} from "./login/AclResolver";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LabelDataComponent,
    SurveyConfigComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AclService, AclResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
