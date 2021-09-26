import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor(private http:HttpClient) { }

  subscribesFromSer(){
    alert('Data subscribe3d from srvice');
  }
  FetchDataFromApi():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
