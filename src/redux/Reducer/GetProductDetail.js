import { createAsyncThunk } from '@reduxjs/toolkit';

// API

const baseApi = 'https://fakestoreapi.com/products';

// Action

const GET_PRODUCTS = 'online-shopping-store/products/GET_PRODUCTS';

// Redux thunk

export const fetchProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  const response = await fetch(baseApi);
  const productList = await response.json();
  const updateProductList = [];
  productList.forEach((product) => {
    updateProductList.push({
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    });
  });
  return updateProductList;
});

// Reducer

const productReducer = (state = [], action = {}) => {
  switch (action.type) {
    case `${GET_PRODUCTS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
export default productReducer;
