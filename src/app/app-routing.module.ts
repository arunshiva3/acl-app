import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LabelDataComponent} from "./label-data/label-data.component";
import {SurveyConfigComponent} from "./survey-config/survey-config.component";
import {AclResolver} from "./login/AclResolver";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, resolve: { route: AclResolver } },
  {path: 'noPageFound', component: NoPageFoundComponent, resolve: { route: AclResolver } },
  {path: 'labelData', component: LabelDataComponent, resolve: { route: AclResolver } },
  {path: 'surveyConfig', component: SurveyConfigComponent, resolve: { route: AclResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
