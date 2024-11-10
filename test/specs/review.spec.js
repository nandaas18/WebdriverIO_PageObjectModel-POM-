import { browser, $, expect } from "@wdio/globals";
import reviewPage from "../pageobjects/review.page";

// Deskripsi pengujian review produk
describe("REVIEW PRODUK", function () {
  it("Melihat review dari rating 3", async function () {
    await reviewPage.openPage();
    await reviewPage.show3StarReview();
    await expect(reviewPage.displayReviewRating3).toHaveText("32 Reviews");
  });

  it("Melihat review dengan typical size - 10", async function () {
    await reviewPage.openPage();
    await reviewPage.showReviewSize10();
    await expect(reviewPage.displayReviewSize10).toHaveText("33 Reviews");
  });

  it("Melihat review dengan typical width - average", async function () {
    await reviewPage.openPage();
    await reviewPage.showReviewWidthAvg();
    await expect(reviewPage.displayReviewWidthAvg).toHaveText("183 Reviews");
  });

  it("Melihat review dengan size purchased - 14", async function () {
    await reviewPage.openPage();
    await reviewPage.showReviewSizePurchased();
    await expect(reviewPage.displaySizePurchased).toHaveText("4 Reviews");
  });

  it("Melihat review dengan overall fit - just right", async function () {
    await reviewPage.openPage();
    await reviewPage.showReviewOverallFitJR();
    await expect(reviewPage.displayOverallFitJR).toHaveText("196 Reviews");
  });

  it("Melihat review dengan activity level - walking", async function () {
    await reviewPage.openPage();
    await reviewPage.showReviewActLvl();
    await expect(reviewPage.displayActLvl).toHaveText("199 Reviews");
  });

  it("Melihat review berdasarkan semua pilihannya", async function () {
    await reviewPage.openPage();
    await reviewPage.showAllReview();
    await expect(reviewPage.displayAllReview).toHaveText("2 Reviews");
  });
});
