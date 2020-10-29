import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get<T>(resourcePath: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${resourcePath}`);
  }
}
