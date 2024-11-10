import { $, browser } from "@wdio/globals";

class reviewPage {
  // elemen locator

  get reviewRating3() {
    return $('//select[@id="star-rating"]/option[@value="3"]');
  }

  get displayReviewRating3() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "32 Reviews")]'
    );
  }

  get reviewSize10() {
    return $('//select[@id="typical-size"]/option[@value="10"]');
  }

  get displayReviewSize10() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "33 Reviews")]'
    );
  }

  get reviewWidthAvg() {
    return $('//select[@id="typical-width"]/option[@value="2"]');
  }

  get displayReviewWidthAvg() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "183 Reviews")]'
    );
  }

  get reviewSizePurchased() {
    return $('//select[@id="size-purchased"]/option[@value="14"]');
  }

  get displaySizePurchased() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "4 Reviews")]'
    );
  }

  get reviewOverallFitJR() {
    return $('//select[@id="overall-fit"]/option[@value="2"]');
  }

  get displayOverallFitJR() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "196 Reviews")]'
    );
  }

  get reviewActLvl() {
    return $('//select[@id="activity-level"]/option[@value="Walking"]');
  }

  get displayActLvl() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "199 Reviews")]'
    );
  }

  get review5Rating() {
    return $('//select[@id="star-rating"]/option[@value="5"]');
  }

  get reviewSize9() {
    return $('//select[@id="typical-size"]/option[@value="9"]');
  }

  get reviewWidthWide() {
    return $('//select[@id="typical-width"]/option[@value="3"]');
  }

  get reviewPurchased9() {
    return $('//select[@id="size-purchased"]/option[@value="9"]');
  }

  get reviewActLvlTrv() {
    return $('//select[@id="activity-level"]/option[@value="Traveling"]');
  }

  get displayAllReview() {
    return $(
      '//p[contains(@class, "PdpReviewsList__total-count") and contains(text(), "2 Reviews")]'
    );
  }

  // page actions
  async show3StarReview() {
    await this.reviewRating3.waitForExist({ timeout: 10000 });
    await this.reviewRating3.scrollIntoView({ behavior: "smooth" });
    await this.reviewRating3.click();
  }

  async showReviewSize10() {
    await this.reviewSize10.waitForExist({ timeout: 10000 });
    await this.reviewSize10.scrollIntoView({ behavior: "smooth" });
    await this.reviewSize10.click();
  }

  async showReviewWidthAvg() {
    await this.reviewWidthAvg.waitForExist({ timeout: 10000 });
    await this.reviewWidthAvg.scrollIntoView({ behavior: "smooth" });
    await this.reviewWidthAvg.click();
  }

  async showReviewSizePurchased() {
    await this.reviewSizePurchased.waitForExist({ timeout: 10000 });
    await this.reviewSizePurchased.scrollIntoView({ behavior: "smooth" });
    await this.reviewSizePurchased.click();
  }

  async showReviewOverallFitJR() {
    await this.reviewOverallFitJR.waitForExist({ timeout: 10000 });
    await this.reviewOverallFitJR.scrollIntoView({ behavior: "smooth" });
    await this.reviewOverallFitJR.click();
  }

  async showReviewActLvl() {
    await this.reviewActLvl.waitForExist({ timeout: 10000 });
    await this.reviewActLvl.scrollIntoView({ behavior: "smooth" });
    await this.reviewActLvl.click();
  }

  async showAllReview() {
    await this.review5Rating.waitForExist({ timeout: 10000 });
    await this.review5Rating.scrollIntoView({ behavior: "smooth" });
    await this.review5Rating.click();
    await this.reviewSize9.click();
    await this.reviewWidthWide.click();
    await this.reviewPurchased9.click();
    await this.reviewOverallFitJR.click();
    await this.reviewActLvlTrv.click();
  }

  async openPage() {
    await browser.url(
      "https://www.allbirds.com/products/mens-wool-runner-go-natural-black-kea-red"
    );
  }
}

export default new reviewPage();
