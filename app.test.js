
const getOrderStatus = require("./app");

test("placed order returns Order received", () => {
  if (getOrderStatus("placed") !== "Order received") {
    throw new Error("Test failed: placed order");
  }
});

test("preparing order returns Preparing your food", () => {
  if (getOrderStatus("preparing") !== "Preparing your food") {
    throw new Error("Test failed: preparing order");
  }
});

test("delivered order returns Order delivered", () => {
  if (getOrderStatus("delivered") !== "Order delivered") {
    throw new Error("Test failed: delivered order");
  }
});

console.log("All food delivery tests passed!");
