'use strict';

require('chromedriver');
const {Builder, By} = require('selenium-webdriver');
const {assert} = require('chai');

const LandingPage = require('../application/pages/LandingPage')
const LoginPage = require('../application/pages/LoginPage')
const HomePage = require('../application/pages/HomePage')
const ProfilePage = require('../application/pages/ProfilePage')


describe('Simple App', function() {
  this.timeout(50000);
  let driver
  let landing
  let login
  let home
  let profile

  beforeEach(function(){
    //Enter actions performed before test
    driver = new Builder().forBrowser('chrome').build()
    landing = new LandingPage(driver)
    login = new LoginPage(driver)
    home = new HomePage(driver)
    profile = new ProfilePage(driver)
    landing.load();
  });

  afterEach(function(){
    //Enter actions to be performed after test
    driver.quit();
  });

  describe('for anonymous user', function () {
    it('home page shows login link', async function () {
        assert((await landing.pageHeadingPresent()), 'Landing page loading failed')
        assert((await landing.isLoginLinkPresent()), 'Login link not found')
    });
    it('login page is displayed after login link click', async function() {
        assert(await landing.isLoginLinkPresent(), 'Login link not found')
        await landing.navigateToLogin();
        assert((await login.pageHeadingPresent()), 'Login page loading failed')
        assert((await login.isUserInputPresent()), 'User name input missing')
        assert((await login.isPasswordInputPresent()), 'Password input missing')
        assert((await login.isSubmitButtonPresent()), 'Submit button missing')
    });
  });

  describe('for User Jack', function () {
    it ('user is able to login and navigate to home page', async function () {
        assert(await landing.isLoginLinkPresent(), 'Login link not found')
        await landing.navigateToLogin();
        await login.authenticate('jack', 'secret');
        assert((await home.pageHeadingPresent()), 'Home page loading failed')
        assert((await home.pageMessagePresent()), 'Home page message failed')
        assert((await home.pageProfileLinkPresent()), 'Home page logout link failed')
        assert((await home.pageLogoutLinkPresent()), 'Home page logout link failed')
    });
    it ('user is able to get to own profile page', async function () {
        await landing.navigateToLogin();
        await login.authenticate('jack', 'secret');
        await home.navigateToProfile();
        assert((await profile.pageHeadingPresent()), 'Profile page loading failed')
        assert((await profile.pageIdLabelPresent()), 'Id label detection failed')
        assert((await profile.pageUserNameLabelPresent()), 'username label detection failed')
        assert((await profile.pageNameLabelPresent()), 'name label detection failed')
        assert((await profile.pageEmailLabelPresent()), 'email label detection failed')
    });
  });

  describe('for Invalid User Credentials', async function () {
    it ('does returns to log in for invalid password', async function () {
                  assert(await landing.isLoginLinkPresent(), 'Login link not found')
                  await landing.navigateToLogin();
                  await login.authenticate('jack', 'secrets');
                  assert((await login.pageHeadingPresent()), 'Login page loading failed')
    });
    it ('does returns to log in for invalid username', async function () {
            assert(await landing.isLoginLinkPresent(), 'Login link not found')
            await landing.navigateToLogin();
            await login.authenticate('invaliduser', 'secrets');
            assert((await login.pageHeadingPresent()), 'Login page loading failed')
    });
    it ('does returns to log in for blank username and password', async function () {
                assert(await landing.isLoginLinkPresent(), 'Login link not found')
                await landing.navigateToLogin();
                await login.authenticate('', '');
                assert((await login.pageHeadingPresent()), 'Login page loading failed')
    });
  });
});

