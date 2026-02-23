import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./ProductSearchData";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    if (results.length === 1) {
      navigate(results[0].route);
    } else if (results.length > 1) {
      setSearchResults(results);
    } else {
      alert("No product found");
      setSearchResults([]);
    }
  };

  const handleAboutClick = () => navigate("/about");
  const handleHomeClick = () => navigate("/");
  const handleLoginClick = () => navigate("/login");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{  top: 0, zIndex: 999 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{fontFamily: "math",}} onClick={handleHomeClick}>
          BuyMore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLoginClick}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleAboutClick}>
                About Us
              </a>
            </li>
          </ul>
          {/* <ul>
            <img src="/imagess/cart.png" alt="" className="nav-item" />
          </ul> */}

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((item) => (
                <li key={item.id} onClick={() => navigate(item.route)}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
