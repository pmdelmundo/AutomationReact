class Shop {

  selectSize(size) {
    let sizeCovertions = {
      small: "S",
      medium: "M"
    };
    let sizeText = sizeCovertions[size];
    let sizeElement = browser.react$("t", { label: sizeText });
    sizeElement.waitForDisplayed();
    sizeElement.click();
  }

  selectAllTshirts() {
    browser.$(".shelf-item__thumb").waitForEnabled(1000);
    var allTShirts = browser.react$$("E", { classes: "shelf-item__thumb" });
    allTShirts.map(x => x.click());
  }

  addCheapShirt() {
    browser.$(".shelf-item").waitForEnabled(1000);
    let cheapShirt = browser.$(".shelf-item");
    console.log(cheapShirt);
    cheapShirt.waitForEnabled(1000);
    cheapShirt.click();
  }

  filterCheapShirt(price) {
    let priceCovertions = {
      cheapest: "Lowest to highest",
      expensive: "Highest to lowest"
    };
    browser.pause(1000);
    let priceText = priceCovertions[price];
    let priceElement = browser.react$("h");
    console.log(priceElement);

    if (priceText = "Lowest to highest"){
      priceElement.selectByIndex(1);
    } else {
      priceElement.selectByIndex(2);
    }
    browser.pause(1000);
  }

  checkout() {
    browser.$(".buy-btn").click();
    browser.pause(3000)
  }
}

module.exports = new Shop();