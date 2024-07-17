import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://localhost:7229/api/v1'; 
  constructor(private httpClient:HttpClient) { }
  registerProfile(profile:any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/Registration/RegisterProfile`,profile);
  }
  
}
