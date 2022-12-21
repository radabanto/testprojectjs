// filename: pages/loginpage.js
const BasePage = require('./BasePage')

//  TODO: Find a more elegant solution to storing test environment related variables
const LOGIN_PAGE_HEADING = { xpath:'//h1[contains(text(), \"Simple App Login\")]'}
const USERNAME_INPUT = { xpath: '//input[@name=\'username\']' }
const PASSWORD_INPUT = { xpath: '//input[@name=\'password\']' }
const SUBMIT_BUTTON = { xpath: '//input[@value=\'Submit\']' }

const baseurl = "http://localhost:3000/login"

class LoginPage extends BasePage {

  constructor(driver) {
    super(driver)
  }

    async isUserInputPresent()
    {
        return await this.isExist(USERNAME_INPUT)
    }

    async isPasswordInputPresent()
    {
        return await this.isExist(PASSWORD_INPUT)
    }

    async isSubmitButtonPresent()
    {
        return await this.isExist(SUBMIT_BUTTON)
    }

    async authenticate(username, password)
    {
        await this.type(USERNAME_INPUT, username)
        await this.type(PASSWORD_INPUT, password)
        await this.click(SUBMIT_BUTTON)
        this.driver.sleep(5000)
    }
}

module.exports = LoginPage