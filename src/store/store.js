import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from '@utils/localStorage';

import rootReducer from "./reducers";

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;
