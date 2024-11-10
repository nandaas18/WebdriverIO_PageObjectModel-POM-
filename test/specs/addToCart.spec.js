import { browser, $, expect } from "@wdio/globals";
import addToCartPage from "../pageobjects/addToCart.page";

describe("TAMBAH PRODUK", function () {
  it("Memilih sepatu berwarna biru dengan ukuran 8", async function () {
    await addToCartPage.openPage();
    await addToCartPage.hazyMin();
    await expect(addToCartPage.messageAddToCart).toHaveText(
      "Congrats! You get free standard shipping."
    );
    await expect(addToCartPage.titleProduct).toHaveText("Men's Wool Runner Go");
    await expect(addToCartPage.jenisProduct).toHaveText(
      "Hazy Indigo (Blizzard Sole)"
    );
    await expect(addToCartPage.sizeProduct).toHaveText("Size: 8");
    await addToCartPage.deleteProduct();
  });

  it("Memilih sepatu berwarna biru dengan ukuran 14", async function () {
    await addToCartPage.openPage();
    await addToCartPage.hazyMax();
    await expect(addToCartPage.messageAddToCart).toHaveText(
      "Congrats! You get free standard shipping."
    );
    await expect(addToCartPage.titleProduct).toHaveText("Men's Wool Runner Go");
    await expect(addToCartPage.jenisProduct).toHaveText(
      "Hazy Indigo (Blizzard Sole)"
    );
    await expect(addToCartPage.sizeProduct).toHaveText("Size: 14");
    await addToCartPage.deleteProduct();
  });

  // it("Menghapus produk yang sudah ditambahkan", async function () {
  //   await addToCartPage.openPage();
  //   await addToCartPage.deleteProduct();
  //   await expect(addToCartPage.messageDeleteProduct).toHaveText(
  //     "Your Cart is Empty"
  //   );
  // });

  it("Menambahkan 1 produk lagi ukuran 14 di qty", async function () {
    await addToCartPage.openPage();
    await addToCartPage.editQty();
  });
});
