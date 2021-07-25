import { By, until, WebDriver } from "selenium-webdriver";
import { DeclarationStatement } from "typescript";

//we will test fields in everWanyted: header require 9-19 cher length any allowed

export class everWanted {
  driver: WebDriver;
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  header: By = By.name("hdrInput");
  mke: By = By.name('mkeInput');
  agid: By = By.name('oriInput');
  name: By = By.name('namInput');
  sex: By = By.name('sexInput');
  race: By = By.name('racInput');
  height: By = By.name('hgtInput');
  weight: By = By.name('wgtInput');
  hair: By = By.name('haiInput');
  offset: By = By.name('offInput');
  date: By = By.name('dowInput');
  dL: By = By.name('olnInput');
  dlState: By = By.name('olsInput');
  exDate: By = By.name('olyInput');
  lPlate: By = By.name('licInput');
  lState: By = By.name('lisInput');
  lYear: By = By.name('liyInput');
  submit: By = By.id('saveBtn');
  result: By = By.id('validHeader')

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.header));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.header)));
    }
  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementsLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
    }
  async findElement(keys) {
    await this.driver.wait(until.elementIsVisible(keys));
    await this.driver.findElement(keys);
  }
  async clickButton(elementBy) {
    await this.driver.wait(until.elementIsVisible(elementBy));
    await this.driver.findElement(elementBy);
  }
  async getResult(elementBy) {
    await this.driver.wait(until.elementIsVisible(elementBy));
    await this.driver.findElement(elementBy);
  }

}

const sendKeys = async function (driver, elementBy: By, keys) {
  await driver.wait(until.elementLocated(elementBy));
  return driver.findElement(elementBy).sendKeys(keys);
};
