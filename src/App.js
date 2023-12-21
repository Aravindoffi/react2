import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Product } from "./Product";
import "./Product";
const INITIAL_PRODUCT_LIST = [
  {
    id: 1,
    name: "Motivational Poster Frame",
    poster: "https://designerpages.s3.amazonaws.com/assets/71649701/f3b8bb24-a484-4d9b-af1f-957b8af0ed7b_large.png",
    price: "₹874",
   
    isaddedtocart: false,
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max (256 GB)",
    poster:
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹1,56,990",
   
    isaddedtocart: false,
  },
  {
    id: 3,
    name: "Apple 2022 MacBook Pro Laptop with M2 chip",
    poster:
      "https://cdn.shopify.com/s/files/1/0696/7345/1805/files/DellLaptopLatitude5430I53rdGen4GB320HDD15.6_Refurbished_260x.jpg?v=1689683481",
    price: "₹1,40,990",
    
    isaddedtocart: false,
  },
  {
    id: 4,
    name: " iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
   isaddedtocart: false,
  },
  {
    id: 5,
    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
     isaddedtocart: false,
  },
  {
    id: 6,
    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    isaddedtocart: false,
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
     isaddedtocart: false,
  },
  {
    id: 8,
    name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    isaddedtocart: false,
  },
  {
    id: 9,
    name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    isaddedtocart: false,
  },
  {
    id: 10,
    name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster:
      "https://www.reliancedigital.in/medias/Samsung-SM-R825FSSAINU-Smart-Watches-491666870-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDdhLzkyNTE2Mjc5OTEwNzAuanBnfGE3NGVmODAxZjY3OTBjYzhiZGI5MmM0MDhmNWVhN2FhN2M5MWYwZTNkMGU4MzdjZjUwMWM4OGRkYTZjZmI5NzY",
    price: "₹22,999",
    isaddedtocart: false,
  },
  {
    id: 11,
    name: "SAMSUNG Galaxy Buds2 Pro false Wireless Bluetooth Earbud Headphones - White",
    poster:
      "https://designerpages.s3.amazonaws.com/assets/71649701/f3b8bb24-a484-4d9b-af1f-957b8af0ed7b_large.png",
    price: "₹27,141",
    isaddedtocart: false,
  },
  {
    id: 12,
    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster:
      "https://cdn.shopify.com/s/files/1/0696/7345/1805/files/DellLaptopLatitude5430I53rdGen4GB320HDD15.6_Refurbished_260x.jpg?v=1689683481",
    price: "₹84,990",
    isaddedtocart: false,
  },
];
function App() {
  let style = {
    color: "white",
    marginTop: "30px",
  };
  
  

  const [productlist, setproductlist] = useState(INITIAL_PRODUCT_LIST);
  //let productlist = INITIAL_PRODUCT_LIST;
  const [cart, setCart] = useState([]);
  const handleCart = (id) => {
    const updatedProducts = productlist.map((product) =>
      product.id === id
        ? { ...product, isaddedtocart: !product.isaddedtocart }
        : product
    );

    const updatedCart = updatedProducts.filter(
      (product) => product.isaddedtocart
    );

    setproductlist(updatedProducts);
    setCart(updatedCart);
    console.log(updatedProducts)

  console.log(updatedCart)
  };
  
  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <span className="d-flex flex-wrap">
            <span className="link mx-2">Start bootstrap</span>
            <span className="link mx-2">Home</span>
            <span className="link mx-2">About</span>
            <span className="link mx-2">Shop</span>
          </span>
        </div>
        <div className="col-12 col-md-3 mt-3 mt-md-0 text-md-right" style={{paddingTop:"40px"}}>
          <span>
            <button className="btn btn-success">🛒Cart{cart.length} </button>
          </span>
        </div>
      </div>
          
    
      
      <div className="black">
        <div className="con2">
          <h1 style={style}>Welcome to online shopping</h1>
          <h3 style={style}>Have a great shopping experience</h3>
        </div>
      </div>

      <div className="product-list">
        {productlist.map((roduct) => (
          <Product product={roduct} onAddCart={handleCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
