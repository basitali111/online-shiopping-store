import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../redux/Reducer/GetProductDetail';
import './ProductPage.css';

const ProductPage = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const filtered = products.filter((pro) => pro.name.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <div className="input-product">
        <div>
          {' '}
          <h2>Search Your Product here...</h2>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <ul className="product-item">
        {filtered.map((product) => (
          <Link
            style={{ textDecoration: 'none' }}
            state={product}
            key={product.id}
            to={`product/${product.id}`}
          >
            <ProductCard
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
