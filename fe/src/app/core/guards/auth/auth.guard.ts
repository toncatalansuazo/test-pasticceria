import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationEndpoint } from 'src/app/configuration/configuration-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // check access_token
    console.log('user logged');
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      this.router.navigate(['/login']);
      return true;
    }
    return true;
  }

}
