import { createAction, props } from '@ngrx/store';
import { Sidebars } from 'src/app/models/sidebars';
import { Sidebar } from './ui.reducer';

export const startLoading = createAction(
  '[Ui] Start Loading'
);

export const stopLoading = createAction(
  '[Ui] Stop Loading',
  props<{ data: any }>()
);

export const openSidebar = createAction(
  '[Ui] Open sidebar',
  props<{ id: Sidebars }>()
);

export const closeSidebar = createAction(
  '[Ui] Close Sidebar',
  props<{ id: Sidebars }>()
);


