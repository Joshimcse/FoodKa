import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";

export const history = createBrowserHistory();

const configureStoreProd = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    sagaMiddleware,
    reactRouterMiddleware,
  ];
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStoreProd;
