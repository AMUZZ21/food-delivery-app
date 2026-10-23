
const getOrderStatus = require("./app");
const { test } = require("node:test");
const assert = require("node:assert");

test("placed order returns Order received", () => {
  assert.strictEqual(getOrderStatus("placed"), "Order received");
});

test("preparing order returns Preparing your food", () => {
  assert.strictEqual(getOrderStatus("preparing"), "Preparing your food");
});

test("delivered order returns Order delivered", () => {
  assert.strictEqual(getOrderStatus("delivered"), "Order delivered");
});

