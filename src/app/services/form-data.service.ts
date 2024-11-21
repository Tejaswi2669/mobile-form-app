// src/app/services/form-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class FormDataService {

  private apiUrl = environment.apiUrl; // Ensure this is correctly defined in environment files

  constructor(private http: HttpClient) { }

  submitForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Additional methods can be implemented here
}
