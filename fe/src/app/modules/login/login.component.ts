import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { Store } from '@ngrx/store';
import { fromLogin, fromLoginActions } from './store'
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sidebar } from 'src/app/shared/store/ui.reducer';
@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFG: FormGroup;

  constructor(
    private store: Store<fromLogin.State>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin() {
    const {email, password} = this.loginFG.value;
    const user: User = {email, password};
    this.store.dispatch(fromLoginActions.login({user}))
  }

  private initForm() {
    this.loginFG = this.formBuilder.group({
      'email': ['admin@gmail.com', [Validators.email]],
      'password': ['coolPassword', [Validators.min(3)]]
    });
  }

}
