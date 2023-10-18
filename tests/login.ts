import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page'

test('Login and verify that user lands on the home page', async ({ page }) => {
  
  //V1 - the hardcoded version

  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await loginPage.acceptCookies();
  await loginPage.login();

  //V2 hadcoded stuff in the test file

  // const url = 'https://jeademo.planday.dk/';
  // const credentials = {
  //   username: 'jea@planday.com',
  //   password: '123456789' 
  // }

  // await loginPage.login(
  //   url,
  //   credentials.username, 
  //   credentials.password
  //   );  

});


