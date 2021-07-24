const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { everWanted } from "./everWanted";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const app = new everWanted(driver);

describe("Ever Wanterd app", () => {
    beforeEach(async () => {
      await app.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });
    describe("fill up the form", () => {
        test("insert characters into a header", async () => {
            await app.navigate();
            await app.sendKeys(app.header, "12345678910");
            await app.sendKeys(app.mke, "test");
            await app.sendKeys(app.agid, "testtestt");
            await app.sendKeys(app.name, "test");
            await app.sendKeys(app.sex, "F");
            await app.sendKeys(app.race, "W");
            await app.sendKeys(app.height, "F00");
            await app.sendKeys(app.weight, "123");
            await app.sendKeys(app.hair, "test");
            await app.sendKeys(app.offset, "12345");
            await app.sendKeys(app.date, "12345678");
            await app.sendKeys(app.dL, "12345678910");
            await app.sendKeys(app.dlState, "SC");
            await app.sendKeys(app.exDate, "12345678");
            await app.sendKeys(app.lPlate, "testtest");
            await app.sendKeys(app.lState, "SC");
            await app.sendKeys(app.lYear, "2021");



//   await app.header("it should be 9 to 19 characters long");
//   expect(await app.error).not.toContain(this.headerError);
});
afterAll(async () => {
  await driver.quit();
    });});});