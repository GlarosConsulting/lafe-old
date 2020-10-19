import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from '../index';

const persistConfig = {
  key: 'lafe',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const middleware = applyMiddleware(thunk);

  const store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store);

  return { store, persistor };
};
