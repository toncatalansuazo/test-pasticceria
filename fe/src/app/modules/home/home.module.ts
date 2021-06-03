import { HomeBodyComponent } from './home-body/home-body.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';

const ROUTER = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent,
    HomeSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ROUTER,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
