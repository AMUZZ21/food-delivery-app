
function getOrderStatus(order) {
  if (order === "placed") {
    return "Order received";
  }

  if (order === "preparing") {
    return "Preparing your food";
  }

  if (order === "delivered") {
    return "Order delivered";
  }

  return "Unknown order status";
}

console.log(getOrderStatus("placed"));
console.log(getOrderStatus("preparing"));
console.log(getOrderStatus("delivered"));

module.exports = getOrderStatus;
