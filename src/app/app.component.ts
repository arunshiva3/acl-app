import { Component } from '@angular/core';
import {AclService} from "angular2-acl/dist/index";
import {ACLData} from "./constants";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  private aclData = {};

  constructor(private aclService: AclService) {
    // Setting ACL permissions based on type User
    this.aclData = ACLData;
    this.aclService.setAbilities(this.aclData);
  }

}
