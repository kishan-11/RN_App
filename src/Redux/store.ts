import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/root';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: [],
};

export const store = configureStore({
  reducer: persistReducer(config, rootReducer),
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
