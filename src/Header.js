//shortcut for structure code is rfce + tab

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <Link to="/">
      <nav className="header">
        {/* logo */}
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt=""
        ></img>
        {/* Search Bar */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 links with icons */}
        <div className="header__nav">
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Anix</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <ShoppingBasketIcon className="header__optionBasket"/>
            <span className="header__optionLineTwo header__basketCount">0</span>
          </Link>
        </div>
      </nav>
    </Link>
  );
}

export default Header;

//<nav> tag tells browser that its a navbar
