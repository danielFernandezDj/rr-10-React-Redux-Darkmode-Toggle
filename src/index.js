import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

// Reducer
import { Provider } from "react-redux";
import store from "./store";

// Get the root element from the DOM
const container = document.getElementById('root')

// Create a root
const root = createRoot(container)

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);