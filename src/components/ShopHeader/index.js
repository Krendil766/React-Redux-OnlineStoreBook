import React from 'react';
import './style.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="#">Online Books Store</a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;