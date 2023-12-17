import logo from "./logo.svg";
import "./App.css";
const INITIAL_PRODUCT_LIST = [
  {
    name: "Motivational Poster Frame",
    poster: "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    price: "₹874",
    summary:
      "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
    rating: 4,
  },
  {
    name: "Apple iPhone 15 Pro Max (256 GB)",
    poster:
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹1,56,990",
    summary:
      "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    rating: 3.9,
  },
  {
    name: "Apple 2022 MacBook Pro Laptop with M2 chip",
    poster: "https://cdn.shopify.com/s/files/1/0696/7345/1805/files/DellLaptopLatitude5430I53rdGen4GB320HDD15.6_Refurbished_260x.jpg?v=1689683481",
    price: "₹1,40,990",
    summary:
      "SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
    rating: 4.9,
  },
  {
    name: " iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 3,
    summary:
      "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
  },
  {
    name: "iPhone 15 Pro (128 GB) ",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 3.5,
    summary:
      " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
  },
  {
    name: "Samsung Galaxy S23 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.7,
    summary:
      "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
  },
  {
    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: 5.0,
    summary:
      "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
  },
  {
    name: "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: 4.8,
    summary:
      "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
  },
  {
    name: " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: 4.9,
    summary:
      "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
  },
  {
    name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster: "https://www.reliancedigital.in/medias/Samsung-SM-R825FSSAINU-Smart-Watches-491666870-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDdhLzkyNTE2Mjc5OTEwNzAuanBnfGE3NGVmODAxZjY3OTBjYzhiZGI5MmM0MDhmNWVhN2FhN2M5MWYwZTNkMGU4MzdjZjUwMWM4OGRkYTZjZmI5NzY",
    price: "₹22,999",
    rating: 4.5,
    summary:
      "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
  },
  {
    name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    poster: "https://www.czone.com.pk/images/thumbnails-large/copy-1-czone.com.pk-1540-12961-020322013734.jpg",
    price: "₹27,141",
    rating: 4.3,
    summary:
      "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
  },
  {
    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster: "https://cdn.shopify.com/s/files/1/0696/7345/1805/files/DellLaptopLatitude5430I53rdGen4GB320HDD15.6_Refurbished_260x.jpg?v=1689683481",
    price: "₹84,990",
    rating: 5.0,
    summary:
      "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
  },
  
];
function App() {
  let style = {
    color: "white",
    marginTop: "30px",
  };
  let productlist = INITIAL_PRODUCT_LIST;
  return (
    <div className="container">
      <div className="card">
        <span>
          <span className="link">Start bootstrap</span>
          <span className="link">Home</span>
          <span className="link">About</span>
          <span className="link">Shop</span>
          <span>
            {" "}
            <button className="btn btn-success">🛒Cart </button>
          </span>
        </span>
      </div>
      <div className="black">
        <div className="con2">
          <h1 style={style}>Welcome to online shopping</h1>
          <h3 style={style}>Have a great shopping experience</h3>
        </div>
      </div>

      <div className="product-list">
        {productlist.map((roduct) => (
          <Product product={roduct} />
        ))}
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="product-container">
      <img ClassName="Product-poster" src={product.poster} alt={product.name} />
      <div className="product-spec">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-rating">⭐{product.rating}</p>
      </div>

      {/* conditional Styling */}
      {/* <p style={summaryStyle} className='product-summary'>{product.summary}</p> */}
      {/* conditional rendering */}
      <p className="product-summary">{product.summary}</p>
      <div className="priceStyle">
        Price: <p className="product-price"> {product.price}</p>
        
      </div>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}
export default App;
