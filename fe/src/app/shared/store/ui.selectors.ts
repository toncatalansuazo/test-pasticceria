import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiFeatureKey } from './ui.reducer';
import { fromUi, fromUiSelectors } from './index';
import { Sidebars } from 'src/app/models/sidebars';

const uiFeature = createFeatureSelector<fromUi.State>(uiFeatureKey);
export const isLoading = createSelector(uiFeature, (state: fromUi.State) => state.loading);
export const isSideBarOpen = (id: Sidebars) => createSelector(uiFeature,
  (state: fromUi.State) => state.sidebars[id].isOpen
  );
