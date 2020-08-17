// - Import external components
import * as redux from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { rootReducer } from "store/reducers";
import { fromJS } from "immutable";
import { END } from "redux-saga";
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// - Build the middleware for intercepting and dispatching navigation actions
// const sagaMiddleware = createSagaMiddleware()
// - initial state
let initialState = {};

// - Config and create store of redux
let store = redux.createStore(
  rootReducer,
  fromJS(initialState),
  redux.compose(redux.applyMiddleware(routerMiddleware(history)))
);

export default { store, close: () => store.dispatch(END), history };
