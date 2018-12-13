import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  /**
   * Api call to login user
   * @param formData
   * @returns {any}
     */
  login = (formData: any): Observable<any> => {
    let response: any;
    if(formData.password == 'admin'){
      response = new Observable((observer) => {

        observer.next({isAdmin: true});
        observer.complete();
      });
    } else if(formData.password == 'user') {
      response = new Observable((observer) => {
        observer.next({isAdmin: false});
        observer.complete();
      });
    }
    return response;
  }
}
