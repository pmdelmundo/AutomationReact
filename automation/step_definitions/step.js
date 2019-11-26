const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shop = require("../pages/pages");

Given("I open {string}", function(page) {
  browser.url(page);
});

Then("I verify page title is {string}", function(title) {
  assert.equal(browser.getTitle(), title);
});

Given("I launch the shopping site", function() {
  browser.url("https://react-shopping-cart-67954.firebaseapp.com/");
});

When("I select all {string} T-shirts", size => {
  shop.selectSize(size);
});

When("I add all to cart", function() {
  shop.selectAllTshirts();
});

Then("I should checkout successfully", function() {
  shop.checkout();
});

When("I select the {string} shirt", price => {
  shop.filterCheapShirt(price);
  shop.addCheapShirt();
});
