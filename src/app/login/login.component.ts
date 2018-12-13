import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from "./login.service";
import {AclService} from "angular2-acl/dist/index";
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private aclService: AclService,
  private router: Router, private localStorage: LocalStorage) {
    this.aclService.flushRoles();
    this.localStorage.clear().subscribe(() => {});
    this.loginForm = this.formBuilder.group({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  /**
   * Login to service method and set role of user to acl
   * and store role for using in other components
   * @param formData
     */
  submitForm = (formData: any): void => {
    this.loginService.login(formData).subscribe(resposne => {
      if(resposne.isAdmin){
        this.aclService.attachRole('admin');
        this.localStorage.setItem('role', 'admin').subscribe(() => {});
      } else {
        this.aclService.attachRole('user');
        this.localStorage.setItem('role', 'user').subscribe(() => {});
      }
    }, (error) => {

    }, () => {
        this.router.navigate(['/labelData']);
    });
  }

}
