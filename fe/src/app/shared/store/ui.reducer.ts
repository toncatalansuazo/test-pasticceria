import { Action, createReducer, on } from '@ngrx/store';
import { Sidebars } from 'src/app/models/sidebars';
import { closeSidebar, openSidebar, startLoading, stopLoading } from './ui.actions';


export const uiFeatureKey = 'ui';

export interface Sidebar {
  isOpen: boolean;
};

export interface State {
  loading: boolean;
  sidebars: { [key: string]: Sidebar };
}

let sidebarInitialStates: { [key: string]: Sidebar } = {};
for (const sidebar in Sidebars) {
  sidebarInitialStates[sidebar] = {isOpen: false};
}

export const initialState: State = {
  loading: false,
  sidebars: sidebarInitialStates
};


export const reducer = createReducer(
  initialState,
  on(startLoading, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(stopLoading, (state, action) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(openSidebar, (state, action) => {
    // deep clone
    const sidebars = JSON.parse(JSON.stringify(state.sidebars));
    sidebars[action.id].isOpen = true;
    return {
      ...state,
      sidebars
    }
  }),
  on(closeSidebar, (state, action) => {
    // deep clone
    const sidebars = JSON.parse(JSON.stringify(state.sidebars));
    sidebars[action.id].isOpen = false;
    return {
      ...state,
      sidebars
    }
  })
);

