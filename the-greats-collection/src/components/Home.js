import React, { useState, useEffect} from 'react';
import SearchStyles from './Searchbar';
import './Home.css'


function Home() {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/TSHIRTS")
    .then(res => res.json())
    .then(data => setTshirts(data))
}, []);


function onSearch(search){const results = tshirts.filter(tshirt => tshirt.brand.toLowerCase().includes(search.toLowerCase()))
  return setTshirts(results)
  

}

  return (

    <div className='alt'>

      <div id="search">
      <SearchStyles onSearch={onSearch} className="search" />
      </div>

      {tshirts.map((tshirt) => (
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
  );
}

export default Home;
