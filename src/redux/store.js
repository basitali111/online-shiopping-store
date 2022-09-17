import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducer/GetProductDetail';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
