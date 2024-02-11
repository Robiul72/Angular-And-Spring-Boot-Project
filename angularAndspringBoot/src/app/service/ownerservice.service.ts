import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { OwnerModel } from '../models/ownerModel';

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {


  baseUrl: string="http://localhost:8085/api/owner";

  constructor(private http:HttpClient) { }

  saveOwner(data:any){
    return this.http.post<any>(this.baseUrl, data)
      .pipe(map(res=>{
        return res;
      }))
  
  }
  


  getAllOwner(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }

  deleteOwner(id:number): Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
    
  }


  editOwner(id:number, row:any){
    return this.http.put<any>(this.baseUrl+id, row)
    .pipe(map(
      (res=>{
        return res;
      })
    ))
  }
}
