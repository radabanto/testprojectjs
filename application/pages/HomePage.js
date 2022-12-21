// filename: pages/homepage.js
const BasePage = require('./BasePage')

//  TODO: Find a more elegant solution to storing test environment related variables
const PAGE_HEADING = { xpath:'//h1[contains(text(), \"Simple App\")]'}
const PAGE_MESSAGE = { xpath: '//p[contains(text(), \'Hello\') and contains(text(), \'View your \')]'}
const PROFILE_BUTTON = { xpath:'//a[contains(text(), \"profile\")]' }
const LOGOUT_BUTTON = { xpath: '//a[contains(text(), \"logout\")]' }
const baseurl = "http://localhost:3000"

class HomePage extends BasePage{

  constructor(driver) {
    super(driver)
  }

  async navigateToProfile() {
    await this.click(PROFILE_BUTTON)
  }

  async navigateToLogout() {
    await this.click(LOGOUT_BUTTON)
  }

  async pageMessagePresent() {
    return await this.isDisplayed(PAGE_MESSAGE)
  }

  async pageProfileLinkPresent() {
    return await this.isDisplayed(PROFILE_BUTTON)
  }

  async pageLogoutLinkPresent() {
    return await this.isDisplayed(LOGOUT_BUTTON)
  }
}

module.exports = HomePage