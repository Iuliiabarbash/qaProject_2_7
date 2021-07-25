const chromedriver = require("chromedriver");
import { waitForDebugger } from "inspector";
import { WebDriver, Builder, Capabilities, until } from "selenium-webdriver";
import { elementIsVisible } from "selenium-webdriver/lib/until";
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
            await driver.wait(until.elementIsVisible(await driver.findElement(app.header)));
            await app.sendKeys(app.header, "12345678910");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.mke)));
            await app.sendKeys(app.mke, "test");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.agid)));
            await app.sendKeys(app.agid, "testtestt");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.name)));
            await app.sendKeys(app.name, "test");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.sex)));
            await app.sendKeys(app.sex, "F");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.race)));
            await app.sendKeys(app.race, "W");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.height)));
            await app.sendKeys(app.height, "F00");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.weight)));
            await app.sendKeys(app.weight, "123");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.hair)));
            await app.sendKeys(app.hair, "test");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.offset)));
            await app.sendKeys(app.offset, "12345");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.date)));
            await app.sendKeys(app.date, "12345678");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.dL)))
            await app.sendKeys(app.dL, "12345678910");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.dlState)));
            await app.sendKeys(app.dlState, "SC");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.exDate)));
            await app.sendKeys(app.exDate, "12345678");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.lPlate)));
            await app.sendKeys(app.lPlate, "testtest");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.lState)));
            await app.sendKeys(app.lState, "SC");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.lYear)));
            await app.sendKeys(app.lYear, "2021");
            await driver.wait(until.elementIsVisible(await driver.findElement(app.submit)));
            await app.clickButton(app.submit);
            let theResult = await driver.wait(until.elementIsVisible(await driver.findElement(app.result)));
            expect(theResult).toBe("Valid");

});
afterAll(async () => {
  await driver.quit();
    });
  });
});