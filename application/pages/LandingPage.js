// filename: pages/landingpage.js
const BasePage = require('./BasePage')

//  TODO: Find a more elegant solution to storing test environment related variables
const PAGE_HEADING = { xpath:'//h1[contains(text(), \"Simple App\")]'}
const LOGIN_BUTTON = { xpath:'//a[contains(text(), \"login\")]' }
const baseurl = "http://localhost:3000"

class LandingPage extends BasePage{

  constructor(driver) {
    super(driver)
  }

  async isLoginLinkPresent() {
    return await this.isExist(LOGIN_BUTTON)
  }

  async navigateToLogin() {
    await this.click(LOGIN_BUTTON);
  }
}

module.exports = LandingPage