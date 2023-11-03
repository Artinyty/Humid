import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux_store';
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}
rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

reportWebVitals();







