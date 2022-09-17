import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CatFact } from './catFact';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catUrl: string = 'https://catfact.ninja/fact';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  getCatFact(): Observable<CatFact>{
    return this.http.get<CatFact>(this.catUrl)
    .pipe(
      tap(_ => console.log('fetched cat fact')),
      catchError(this.handleError<CatFact>('getCatFact', {fact: '', length: 0}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}
