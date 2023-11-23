import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CocheI } from '../models/coche';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  api_uri_nodejs = 'http://localhost:4000';
   base_path = `${this.api_uri_nodejs}/Coche/`
  constructor(
    private http:HttpClient
  ) { }

  getAllCoche():Observable<{coche:CocheI[]}>{
    return this.http
      .get<{coche:CocheI[]}>(this.base_path)
  }

  getOneCoche(id: number):Observable<{coche:CocheI[]}>{
    return this.http
      .get<{coche:CocheI[]}>(`${this.base_path}${id}`)
  }

  createCoche(data: any):Observable<CocheI>{
    return this.http.post<CocheI>(this.base_path, data)
  }

  updateCoche(id: number, data: any): Observable<CocheI> {
    return this.http.patch<CocheI>(`${this.base_path}${id}`, data);
  }

  deleteCoche(id: number): Observable<CocheI> {
    return this.http.delete<CocheI>(`${this.base_path}${id}`);
  }
}
