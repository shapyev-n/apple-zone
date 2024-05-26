export const calcSubPrice = (product) => +product.count * +product.item.price;

// export const calcTotalPrice = (product) => {
//   product.reduce((acc, el) => {
//     return +acc + +el.subPrice;
//   }, 0);
// };

export const calcTotalPrice = (products) => {
  return products.reduce((acc, el) => {
    return acc + el.subPrice;
  }, 0);
};
