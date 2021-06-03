import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { ConfigurationEndpoint } from 'src/app/configuration/configuration-endpoint';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { fromLoginActions } from './index';

@Injectable()
export class LoginEffects {

  loadLogins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(fromLoginActions.login),
      concatMap(() =>
        this.auth.login().pipe(
          tap(data => {
            localStorage.setItem('access_token', 'asdasdasd');
            this.router.navigate(['/home']);
          }),
          catchError(error => of(fromLoginActions.loginFailure({ error }))))
      )
    );
  }, {dispatch: false});

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}

}
