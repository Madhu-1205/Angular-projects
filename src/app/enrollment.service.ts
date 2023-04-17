import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

   _url='';

  constructor(private _http:HttpClient) {


   }
   enroll(user:user){
    return this._http.post<any>(this._url,user)
   }
}
