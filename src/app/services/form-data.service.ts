// src/app/services/form-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { FormSubmission } from '../models/form-submission.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  
  private apiUrl = `${environment.apiUrl}/form-submissions`;

  constructor(private http: HttpClient) { }
   submitForm(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, {data});
  }

  // Fetch all records
  getAllRecords(): Observable<{ data: FormSubmission[] }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${your_token}` // Include if authentication is required
    });
    return this.http.get<{ data: FormSubmission[] }>(this.apiUrl, { headers })
      .pipe(
        catchError(error => {
          console.error('Error fetching records:', error);
          return throwError(error);
        })
      );
  }

  // Fetch a single record by documentId
  getRecordByDocumentId(documentId: string): Observable<FormSubmission | null> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${your_token}` // Include if authentication is required
    });
    // Using Strapi v4 filtering syntax
    const url = `${this.apiUrl}?filters[documentId][$eq]=${documentId}`;

    return this.http.get<{ data: FormSubmission[] }>(url, { headers })
      .pipe(
        map(response => {
          return response.data.length > 0 ? response.data[0] : null;
        }),
        catchError(error => {
          console.error('Error fetching record by documentId:', error);
          return throwError(error);
        })
      );
  }

  // Update a record by id (using Strapi's default id)
  updateRecord(documentId: string, data: Partial<FormSubmission>): Observable<{ data: FormSubmission }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${your_token}` // Include if authentication is required
    });
    const url = `${this.apiUrl}/${documentId}`;
    return this.http.put<{ data: FormSubmission }>(url, { data }, { headers })
      .pipe(
        catchError(error => {
          console.error('Error updating record:', error);
          return throwError(error);
        })
      );
  }
  // Delete a record by ID (Optional)
  deleteRecord(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }


  // ... other methods (submitForm, deleteRecord, etc.)
}
