import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { fromUiEffects } from './shared/store';
import { metaReducers, reducers } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EffectsModule.forRoot([
      fromUiEffects.UiEffects
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        // Verifies if the actions are serializable. Please note, you may not need to set it to `true` unless you are storing/replaying actions using external resources, for example `localStorage`.
        strictActionSerializability: true,
        /**
         * Verifies that the state isn't mutated
         */
        strictStateImmutability: true,
        /**
         * Verifies that actions aren't mutated
         */
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
