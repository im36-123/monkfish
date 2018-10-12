import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
