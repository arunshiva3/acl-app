import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AclService } from "angular2-acl/dist/index";
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private aclService: AclService, private router: Router, private localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('role').subscribe((role) => {
      if(role)
        this.aclService.attachRole(role)
    });
  }

  /**
   * Logout user clear roles from localstorage and aclService
   */
  logout = () => {
    this.aclService.flushRoles();
    this.localStorage.clear().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
