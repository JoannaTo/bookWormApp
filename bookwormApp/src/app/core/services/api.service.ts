import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  public get(path: string, id?: string): Observable<any> {
    const fullPath = id
      ? `${this.baseUrl}/${path}/${id}`
      : `${this.baseUrl}/${path}`;
    return this.http.get(fullPath, this.options);
  }

  public post(path: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${path}`, data, this.options);
  }
  public delete(path: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${path}/${id}`, this.options);
  }
  public patch(path: string, id: number, data): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${path}/${id}`, data, this.options);
  }
}
