import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUi from '../shared/store/ui.reducer';

export interface AppState {

  [fromUi.uiFeatureKey]: fromUi.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromUi.uiFeatureKey]: fromUi.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
