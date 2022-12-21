// filename: pages/profilepage.js
const BasePage = require('./BasePage')

//  TODO: Find a more elegant solution to storing test environment related variables
const PAGE_HEADING = { xpath:'//h1[contains(text(), \"Your Simple Profile\")]'}
const ID_LABEL = { xpath: '//th[text()=\'ID:\']'}
const USERNAME_LABEL = { xpath: '//th[text()=\'Username:\']'}
const NAME_LABEL = { xpath: '//th[text()=\'Name:\']'}
const EMAIL_LABEL = { xpath: '//th[text()=\'Email:\']'}
const LOGOUT_BUTTON = { xpath: '//a[contains(text(), \"Logout\")]' }
const baseurl = "http://localhost:3000/profile"

class ProfilePage extends BasePage{

  constructor(driver) {
    super(driver)
  }

  async navigateToLogout() {
    await this.click(LOGOUT_BUTTON)
  }

  async pageIdLabelPresent() {
    return await this.isDisplayed(ID_LABEL)
  }

  async pageUserNameLabelPresent() {
      return await this.isDisplayed(ID_LABEL)
  }

  async pageNameLabelPresent() {
      return await this.isDisplayed(ID_LABEL)
  }

  async pageEmailLabelPresent() {
        return await this.isDisplayed(ID_LABEL)
  }

  async pageLogoutLinkPresent() {
    return await this.isDisplayed(LOGOUT_BUTTON)
  }
}

module.exports = ProfilePage