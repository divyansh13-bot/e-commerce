import React, { use } from "react";
import { useState } from "react";

function SidebarFilter({ onFilterChange }) {
  const [maxPrice, setMaxPrice] = useState(100);
  const [brands, setBrands] = useState({
    nike: false,
    adidas: false,
  });


const handlePriceChange = (e) => {
  const value = Number(e.target.value);
  setMaxPrice(value);
  onFilterChange({ maxPrice: value, brands });
};

const handleBrandChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    
    // Create new brands object
    const newBrands = {
      ...brands, 
      [name]: checked
    };
    
    setBrands(newBrands);
    onFilterChange({ maxPrice, brands: newBrands });
};

// const handleBrandChange = (e) => {
//   const [name, checked] = e.target;
//   const updated = { ...brands, [name]: checked };
//   setBrands(updated);
//   onFilterChange({ maxPrice, brands: updated });
// };

return (
  <aside className="sidebar">
    <h3 className="sidebar-title">Filters</h3>
    <div className="sidebar-section">
      <p>Price</p>
      <input
        type="range"
        min="0"
        max="1000"
        value={maxPrice}
        onChange={handlePriceChange}
      />
      <span>upto Rs{maxPrice}</span>
    </div>

    <div className="sidebar-section">
      <p>Brand</p>
      <label>
        <input
          type="checkbox"
          name="nike"
          checked={brands.nike}
          onChange={handleBrandChange}
        />
        Nike
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="adidas"
          checked={brands.adidas}
          onChange={handleBrandChange}
        />
        Adidas
      </label>
    </div>
  </aside>
)
};

export default SidebarFilter;
