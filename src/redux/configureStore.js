 const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
  });

  const store = Redux.createStore(rootReducer);