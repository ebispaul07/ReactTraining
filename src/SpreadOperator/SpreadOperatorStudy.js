import React from 'react';

const extraProducts = [
  { id: 5, Item: "Dairy", itemName: "Milk", Quantity: 2 },
  { id: 6, Item: "Bakery", itemName: "Bread", Quantity: 1 },
  { id: 7, Item: "Fruit", itemName: "Banana", Quantity: 6 },
  { id: 8, Item: "Drink", itemName: "Orange Juice", Quantity: 1 }
];

const SpreadOperatorStudy = () => {
  return (
    <div>
      <h2>Extra Products</h2>
      <ul>
        {[...extraProducts, { id: 9, Item: "Snack", itemName: "Chips", Quantity: 3 }].map((product) => (
          <li key={product.id}>
            {product.itemName} ({product.Item}) - Qty: {product.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpreadOperatorStudy;
