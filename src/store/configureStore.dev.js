import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";

export const history = createBrowserHistory();

const configureStoreDev = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    sagaMiddleware,
    reactRouterMiddleware,
  ];

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  const store = createStore(rootReducer(history), initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStoreDev;
