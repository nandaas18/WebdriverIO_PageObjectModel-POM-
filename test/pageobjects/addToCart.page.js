import { $, browser } from "@wdio/globals";

class addToCartPage {
  // elemen locator
  get buttonAddToCart() {
    return $("#add-to-cart");
  }

  get colorBlack() {
    return $(
      'button[aria-label="Select color Natural Black (Natural Black Sole)"]'
    );
  }

  get colorHazy() {
    return $('button[aria-label="Select color Hazy Indigo (Blizzard Sole)"]');
  }

  get addSize8() {
    return $('button[aria-label="Add Size 8"]');
  }

  get addSize14() {
    return $('button[aria-label="Add Size 14"]');
  }

  get addSize9() {
    return $('button[aria-label="Add Size 9"]');
  }

  get minQty() {
    return $(".NumberStepper__button--step-down");
  }

  get messageAddToCart() {
    return $('//span[text()="Congrats! You get free standard shipping."]');
  }

  get messageDeleteProduct() {
    return $(".CartEmptyState__heading");
  }

  get totalHazyMin() {
    return $('//p[@class="jsx-97356891 Sub Sub--bold"]');
  }

  get totalHazyMax() {
    return $('//div[@class="jsx-430119080 Subtotal__price" and text()="$77"]');
  }

  get totalQtyHazy() {
    return $(
      '//div[@class="jsx-4183709822 CartOrderSummary__value" and text()="$231"]'
    );
  }

  get addQty() {
    return $(
      '//button[contains(@class, "NumberStepper__button--step-up") and text()="Increment"]'
    );
  }

  get errorQty() {
    return $("//div[@id='qty-error']");
  }

  get viewChart() {
    return $(".Subtotal__view-cart");
  }

  get titleProduct() {
    return $(".ATCProductCard__details--text:nth-child(1)");
  }

  get jenisProduct() {
    return $(".ATCProductCard__details--text:nth-child(2)");
  }

  get sizeProduct() {
    return $(".ATCProductCard__details--text:nth-child(3)");
  }

  // page actions
  async hazyMin() {
    await this.colorHazy.click();
    await this.addSize8.click();
    await this.buttonAddToCart.click();
  }

  async hazyMax() {
    await this.colorHazy.waitForExist({ timeout: 10000 });
    await this.colorHazy.click();
    await this.addSize14.click();
    await this.buttonAddToCart.click();
  }

  async deleteProduct() {
    await this.viewChart.click();
    await this.minQty.click();
  }

  async editQty() {
    await this.colorHazy.waitForExist({ timeout: 10000 });
    await this.colorHazy.click();
    await this.addSize14.click();
    await this.buttonAddToCart.click();
    await this.viewChart.click();
    await this.addQty.click();
  }

  async openPage() {
    await browser.url(
      "https://www.allbirds.com/products/mens-wool-runner-go-natural-black-kea-red"
    );
  }
}

export default new addToCartPage();
