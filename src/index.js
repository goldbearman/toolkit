import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";

import {configureStore,combineReducers} from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitRedux/toolkitReducer";

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


