import React from "react";
import CounterApp from "./src/app/components/CounterApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from './src/app/redux/store/configureStore'

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
