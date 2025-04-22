import React from 'react';
import "./Accessories.css";

const Accessories = () => {
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
  ];


  return (
    <div className="accessories-main">
      <p className="accessories-title">Accessories</p>

      <div className="accessories-container">
        {allAccessories.length > 0 ? (
          allAccessories.map(accessory => (
            <div className="accessory-card" key={accessory.id}>
              <img src={accessory.image} />
              <p>{accessory.name}</p>
              <h4>{accessory.brand}</h4>
              <p>Rs {accessory.price}</p>
            </div>
          ))
        ) : (
          <p>No accessories found.</p>
        )}
      </div>
    </div>
  );
}

export default Accessories;
