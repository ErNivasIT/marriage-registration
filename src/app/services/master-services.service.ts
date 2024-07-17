import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class MasterServicesService {
  private apiUrl = 'https://localhost:7229/api/v1'; 
  constructor(private httpClient:HttpClient) { }
  getGenders(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(`${this.apiUrl}/Masters/GetGenders`);
  }
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/Masters/GetCategories`);
  }
}
