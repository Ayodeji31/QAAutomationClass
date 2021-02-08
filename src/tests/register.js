import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import signinpage from '../pages/signInPage'
import config from '../module/config'
import register from '../pages/registerPage'

const fixtureName = 'Register functionality'
 const randomEmail = `goldenfish${Math.floor(Math.random() * 1000)}@gmail.com`;

fixture(fixtureName)
    .page (config.QAetsy);


    test('Register to Etsy', async t =>{
        await homepage.proceedToAcceptCookies()
        await t.click(signinpage.selectRegisterButton)
        await register.createCustomerAccount(randomEmail)
    });
  