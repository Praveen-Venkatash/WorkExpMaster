import React from 'react';

function DataItem({ product }) {
  const capitalize = (text) =>
    text ? text.replace(text.charAt(0), text.charAt(0).toUpperCase()) : '';

  return (
    <div className="relative">
      <img
        src={`../img/${product.pic}`}
        alt="product pic"
        width="250px"
        height="150px"
      />

      <div className="coloumone">
        <p>Name: {capitalize(product.name)}</p>
        <p>Size: {capitalize(product.size)}</p>
        <p>Department: {capitalize(product.department)}</p>
        <p>Type: {capitalize(product.type)}</p>
      </div>

      <div className="coloumtwo">
        <p>Price: £{product.price.toFixed(2)}</p>
         <p>
          Rating: {product.averageRating} / 5 <br />
          {'❤️'.repeat(Math.round(product.averageRating))}
        </p>
      </div>
    </div>
  );
}

export default DataItem;

