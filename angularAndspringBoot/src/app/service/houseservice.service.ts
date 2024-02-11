import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseserviceService {

  
  baseUrl: string="http://localhost:8088/api/house";

  constructor(private http:HttpClient) { }

  // House save method start
  saveHouse(data:any){
    return this.http.post<any>(this.baseUrl, data)
      .pipe(map(res=>{
        return res;
      }))
  }
 // House save method end

  

 
  // House All House View method start
  getAllHouse(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
  // House All House View method end


  // House Delete method Start
  deleteHouse(id:number): Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
   // House Delete method end


  // House Update method Start
   editHouse(id:number, row:any){
    return this.http.put<any>(this.baseUrl+id, row)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
  // House Update method end


}
