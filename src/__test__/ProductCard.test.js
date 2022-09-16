import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

test('should match the product card props to Snapshot', () => {
  const data = [{
    id: 1,
    title: 'basit',
    image: 'image',
    price: '45',
  }];
  const tree = render(
    <BrowserRouter>
      <ProductCard data={data} />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
