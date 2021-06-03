import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigurationEndpoint } from 'src/app/configuration/configuration-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    // return this.http.post(ConfigurationEndpoint.getLoginEndpoint(), {});
    return of('asdasd');
  }
}
