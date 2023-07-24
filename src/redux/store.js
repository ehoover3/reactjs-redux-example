// The store is a central object that holds the entire state tree of the application.
// It is created using the createStore() function provided by Redux.
// The store is responsible for combining the reducers, holding the application state, and providing methods to interact with the state.
// Once the store is created, it is the single source of truth for the application's state,
// and any component that needs access to the state can subscribe to the store and receive updates whenever the state changes.

import { createStore } from "redux";
import counterReducer from "./reducers";

const store = createStore(counterReducer);

export default store;
