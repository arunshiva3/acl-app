import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {AclService} from "angular2-acl";
import {Observable} from "rxjs";
import {ACLData} from "../constants";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AclResolver implements Resolve<any> {

  aclData = ACLData;
  constructor(private aclService:AclService, private router:Router, private localStorage: LocalStorage) {

  }

  /**
   * Before loading admin related pages
   * for every admin route check the role and navigate if authorized else navigate to page not found
   * @param route
   * @param state
     */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    if (route.url[0].path != 'login') {
      this.localStorage.getItem('role').subscribe((role: string) => {
        if(role){
          if(!this.aclData[role].includes(route.url[0].path)){
            this.router.navigate(['noPageFound']);
          }
        }
      });
    } else {
      this.aclService.flushRoles();
      this.localStorage.clear();
    }

  }
}
