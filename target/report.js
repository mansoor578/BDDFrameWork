$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.before({
  "duration": 5274218489,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4369284845,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1401330492,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_see_test_environment_page()"
});
formatter.result({
  "duration": 21747206,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 419498823,
  "status": "passed"
});
formatter.after({
  "duration": 707852008,
  "status": "passed"
});
formatter.before({
  "duration": 4581633736,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4004703539,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1348209517,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 77238306,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 341702329,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 366960511,
  "status": "passed"
});
formatter.after({
  "duration": 921150293,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 30,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "test001@test.com",
        "test001"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4847796798,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4365356610,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1398562450,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test001@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 63369676,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 486758837,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 314548916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001@test.com",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 5106802506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 5117494125,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_continue_button()"
});
formatter.result({
  "duration": 524214639,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 11965108,
  "status": "passed"
});
formatter.after({
  "duration": 713891408,
  "status": "passed"
});
});