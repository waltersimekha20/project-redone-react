import React, { useState } from 'react';




function Header() {

  const [tshirts] = useState([
    
  ]);

  

  return (
   <div>
      <div className="tshirt-list">
        {tshirts.map(tshirt => (
          <div key={tshirt.id}>
            <img src={tshirt.img} alt={tshirt.type} />
            <h2>{tshirt.type}</h2>
            <p>Brand: {tshirt.brand}</p>
            <p>Size: {tshirt.size}</p>
            <p>Color: {tshirt.color}</p>
            <p>Price: ${tshirt.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
