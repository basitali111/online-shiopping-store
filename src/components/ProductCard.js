/* eslint-disable */
import '../components/ProductCard.css'
const ProductCard = (props) => {
  const {
    id, title, price, image,
  } = props;

  return (
 
   <li className='card-container'>
    <div className='card-info'>
      <div className="image-product">
        <img src={image} alt={title} width="220" height="200"/>
      </div>
      <div className='text-info'>
        <p>{title}</p>
        <p>
          $
          {price}
        </p>
      </div>
      </div>
   </li>
  );
};

export default ProductCard;
