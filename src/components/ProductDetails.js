import { useLocation } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetails = () => {
  const location = useLocation();
  const productData = location.state;
  return (
    <div className="detail-container">
      <div><img src={productData.image} alt={productData.name} width="600" /></div>
      <div>
        <p>{productData.name}</p>
        <h3>{productData.price}</h3>
      </div>

      <div className="des-container">
        <h2>Description</h2>
        {productData.description}
      </div>
    </div>
  );
};

export default ProductDetails;
