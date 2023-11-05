const { Given, When, Then } = require('@wdio/cucumber-framework');
const bs = require('../features/pageobjects/baseClass')
const lp=require('../features/pageobjects/landingPage')
Given(/^I am on Home page$/,async () => 
{
   bs.homePage()
});

When('I am new user ,should click on login button', async () => {
  lp.clickAccount()
  lp.clickSignup()
});

When('give all the neccesary details to create account', () => {
  // Write code here that turns the phrase above into concrete actions
});

Then('verify whether new user account is created by checking with username', () => {
  // Write code here that turns the phrase above into concrete actions
});


