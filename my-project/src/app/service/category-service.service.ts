import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../config/URL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
private apiUrl = `${APP_CONFIG.root_api_uri}`
  constructor(private http:HttpClient) { }

  getCategory():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/all`)
  }

  insertCategory(dataCategory: FormData):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/add`,dataCategory)
  }

  deleteCategory(id:any){
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`)
  }

  getCategoryById(id:any){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  updateCategory(id:any , dataCategory:FormData){
    return this.http.put<any>(`${this.apiUrl}/update/${id}`,dataCategory)
  }
}
