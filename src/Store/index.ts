import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import Settings from "../Store/Settings/Actions";

import { State as SettingsState } from "./Settings/Types";
import { Reducer as SettingsReducer } from "./Settings/Reducer";

// The top-level state object
export interface ApplicationState {
  settings: SettingsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  settings: SettingsReducer
});

export const Actions = {
  Settings
};

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  // yield all([fork(heroesSaga), fork(teamsSaga)]);
}
