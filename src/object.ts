type goods = {
  price: number;
  quantity: number;
};

const calculateTotalAmount = (goods: goods): number => {
  return goods.price * goods.quantity;
}

console.log(calculateTotalAmount({price: 100, quantity: 15}));