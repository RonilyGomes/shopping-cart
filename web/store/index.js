import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const makeStore = () => {
  // Create store
  return createStore(reducers, composedEnhancer);
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });
