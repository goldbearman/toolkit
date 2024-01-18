import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";

import {configureStore,combineReducers} from "@reduxjs/toolkit";
// import toolkitReducer from "./toolkitRedux/toolkitReducer";
// import toolkitSlice from "./toolkitSlices/toolkitSlice";
import toolkitBuilder from "./toolkitBuilder/toolkitBuilder";

const rootReducer = combineReducers({
  toolkit: toolkitBuilder,
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


