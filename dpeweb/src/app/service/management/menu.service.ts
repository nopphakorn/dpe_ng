import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../api-url';
import { Observable } from 'rxjs';
import { MenuModel } from '../Model/MenuModel';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient,
              private header: HttpClient
    ) { }

  // Headers
  httpOption = {
    header: new HttpHeaders({
      'Content-Type':'application/json'
    }),
    body:new HttpHeaders({
      'flag':'GetAllFont'
    })
  } 

  getMenu(){ 
    //const headers = { 'Authorization': 'Bearer my-token'}
    const body = { flag: 'GetAllFont' }
    //return this.http.post<any>('https://dpestep.digitalhomemade.com/api/frontend/managemenu/', body, { headers });
      //return this.http.post<any>(`${apiURL}/frontend/managemenu/`, body, { headers })
      return this.http.post<any>(`${apiURL}/managemenu/`, body)
   }

}
