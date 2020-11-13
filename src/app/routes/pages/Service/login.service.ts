import { environment } from './../../../../environments/environment.prod';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(body) {
    return this.http.post(`${this.apiUrl}login`, body)
  }

}
