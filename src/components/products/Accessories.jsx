import "./Accessories.css";

const Accessories = ({allAccessories,cartA,setCartA}) => {
  

  

  const handleAddToCart = (accessory) => {
    setCartA(prevCart => [...prevCart, accessory]);
    console.log([...cartA, accessory])
  };

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
              <button onClick={() => handleAddToCart(accessory)}><h4>Add to Cart</h4></button>
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