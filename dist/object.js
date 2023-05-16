"use strict";
const calculateTotalAmount = (goods) => {
    return goods.price * goods.quantity;
};
console.log(calculateTotalAmount({ price: 100, quantity: 15 }));
