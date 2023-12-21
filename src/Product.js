import React from 'react';

export function Product({ product, onAddCart }) {
  //const [count, setCount] = useState(product.isaddedtocart);
  return (
    <div className="product-container">
      <img ClassName="Product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h3 className="product-name">{product.name}</h3>
        
      </div>

      {/* conditional Styling */}
      {/* <p style={summaryStyle} className='product-summary'>{product.summary}</p> */}
      {/* conditional rendering */}
      <p className="product-summary">{product.summary}</p>
      <div className="priceStyle">
        Price: <p className="product-price"> {product.price}</p>

      </div>
      <div><button className="btn btn-primary" onClick={() => onAddCart(product.id)}> {product.isaddedtocart ? "Remove" : "Add"} </button>
      </div>
    </div>
  );
}
