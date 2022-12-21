const SeleniumWrapper = require('../../core/ui/seleniumwrapper')

const PAGE_HEADING = { xpath:'//h1[contains(text(), \"Simple App\")]'}
const baseurl = "http://localhost:3000"

class BasePage extends SeleniumWrapper{
    constructor(driver) {
    super(driver)
    }

    async load() {
    await this.visit(baseurl);
    }

    async pageHeadingPresent() {
      return await this.isDisplayed(PAGE_HEADING)
    }

}

module.exports = BasePage
