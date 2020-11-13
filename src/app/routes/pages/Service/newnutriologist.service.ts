import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewnutriologistService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  savedNutriologist(value: any) {
    return this.http.post(`${this.apiUrl}nutriologist`, value)
  }
}
