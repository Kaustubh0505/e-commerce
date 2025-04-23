import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home/index.jsx";

import { AuthProvider } from "./context/authContext/index.jsx";
import { useRoutes, BrowserRouter } from "react-router-dom";
import './App.css'; 
import Store from "./components/Store.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";

function AppRoutes() {
  const allProducts = [
    {
      id: 1,
      type: "clothing",
      name: "Men Navy Blue Solid Sweatshirt",
      brand: "United Colors of Benetton",
      price: 2599,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
    },
    {
      id: 2,
      type: "clothing",
      name: "Men Black MAMGP T7 Sweat Sporty Jacket",
      brand: "Puma",
      price: 2999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg"
    },
    {
      id: 3,
      type: "clothing",
      name: "Men Black Action Parkview Lifestyle Shoes",
      brand: "Hush Puppies",
      price: 6999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg"
    },
    {
      id: 4,
      type: "clothing",
      name: "Women Black Solid Lightweight Leather Jacket",
      brand: "BARESKIN",
      price: 9999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg"
    },
    {
      id: 5,
      type: "clothing",
      name: "Women Blue Solid Shirt Dress",
      brand: "SASSAFRAS",
      price: 5200,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg"
    },
  ]
  const allAccessories = [
    {
      id: 1,
      type: "accessory",
      name: "Apple Unisex Smart Watches",
      brand: "Apple",
      price: 31999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg"
    },
    {
      id: 2,
      type: "accessory",
      name: "Unisex Black & Green Reflex 2.0 Smart Band",
      brand: "Fastrack",
      price: 1999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg"
    },
    {
      id: 3,
      type: "accessory",
      name: "Unisex Black Galaxy Fit Fitness Band",
      brand: "Samsung",
      price: 9990,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg"
    },
    {
      id: 4,
      type: "accessory",
      name: "Gear IconX Black Cord-free Fitness Earbuds",
      brand: "Samsung",
      price: 13990,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg"
    },
    {
      id: 5,
      type: "accessory",
      name: "White 2nd Gen AirPods with Charging Case",
      brand: "Apple",
      price: 15999,
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg"
    }
  ]
  const [cart, setCart] = useState([]); 

  const routesArray = [
    { path: "*", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home allProducts={allProducts} allAccessories={allAccessories} cart={cart} setCart={setCart} /> },
    { path: "/store", element: <Store allProducts={allProducts} allAccessories={allAccessories}  /> },
    { path :"/cart" , element: <Cart cart={cart} setCart={setCart} />}
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <>
      <Header />
      <div className="app-routes-container">
        {routesElement}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
