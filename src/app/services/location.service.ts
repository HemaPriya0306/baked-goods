import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, reduce, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl).pipe(
      catchError(this.handleError)
    );
    // return throwError(() => new Error('Simulated error: Failed to fetch locations.'));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Failed to fetch locations. Please try again later.'));
  }
}
