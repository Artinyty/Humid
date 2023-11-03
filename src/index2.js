import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from './Redux/state';
import './index.css';
import App from "./App";




let rerenderEntireTree = (state) => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />

    </StrictMode>
  );

}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);