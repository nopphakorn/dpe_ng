import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../api-url';
import { Observable } from 'rxjs';
import { ExampleModel } from '../Model/ExampleModel';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: {
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJjb2RlIjoiZHBlQCRyZWNyZXRrZXkkIn0sImlhdCI6MTU5MzA1NTkyOCwiZXhwIjoxNTkzMTQyMzI4fQ.7MZDEXrAejELNY5Qbx7Swdvne8SSmNKNRUyWLi6O5M4',
    },
    body: {
      'flag': 'GetAll'
    }
  }

    // อ่านข้อมูล แบบ array คล้าย List<model> ใน c#
    getExample(): Observable<ExampleModel>{
    // return this.http.get<ProductModel>(this.apiURL+ 'products')
    return this.http.get<ExampleModel>(`${apiURL}/login`)
   }

   getExample2(param){
    // return this.http.get<ProductModel>(this.apiURL+ 'products')
    // return this.http.post<any>(`${apiURL}/getuserall`,)
   }

   setProducts(params) {
    // return this.http.post(`${API_URL}/collection/${status}`, params)
     return this.http.post(`${apiURL}/login`, params)
   }

}
