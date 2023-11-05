Feature: signup,sigin and book bus ticket

  Scenario: Create new user by registeration
    Given I am on Home page
    When I am new user ,should click on login button
    And give all the neccesary details to create account
    Then verify whether new user account is created by checking with username
