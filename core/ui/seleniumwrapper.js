class SeleniumWrapper {
  constructor(driver) {
    this.driver = driver
  }

  async visit(url) {
    await this.driver.get(url)
  }

  find(locator) {
    return this.driver.findElement(locator)
  }

  async click(locator) {
    await this.find(locator).click()
  }

  async type(locator, inputText) {
    await this.find(locator).sendKeys(inputText)
  }

  async isDisplayed(locator) {
    try
    {
        return await this.find(locator).isDisplayed()
    }
    catch
    {
        return false
    }
  }

  async isExist(locator) {
        try {
            await this.driver.findElement(locator);
            return true
        }
        catch (e) {
            if (e.name === 'NoSuchElementError')
            console.log('Element not found');
            return false
        }
    }
}

module.exports = SeleniumWrapper
