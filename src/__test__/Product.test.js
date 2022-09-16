import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductPage from '../pages/ProductPage';
import store from '../redux/store';

test('should match the home page Snapshot', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductPage />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
