import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage/localStorage";

import "./style.css";
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';
import ReduxToastr from 'react-redux-toastr';

const persistedState = loadState();
const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
    <ReduxToastr
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      // timeOut={4000000}
      // newestOnTop={false}
      // preventDuplicates
      // position="top-left"
      // getState={(state) => state.toastr} // This is the default
      // transitionIn="fadeIn"
      // transitionOut="fadeOut"
      // progressBar
      // closeOnToastrClick
    />
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();