import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import signinpage from '../pages/signInPage'
import config from '../module/config'
import register from '../pages/registerPage'

const fixtureName = 'SignIn functionality'

fixture(fixtureName)
    .page (config.QAetsy);
// Signin with correct
    test('SingIn to Etsy account with correct credentials', async t =>{
        await homepage.proceedToAcceptCookies()
        await signinpage.signInwithCorrectCredentials(config.email, config.password)
    });
// Signin wrong email address
    test('Sign-In with wrong user name and correct password', async t =>{
        await homepage.proceedToAcceptCookies()
        await signinpage.signInwithWrongEmailAndCorrectPassword(config.wrongEmailAddress, config.password)
    })
// SignIn with wrong password
    test('SignIn with Correct email and a wrong password', async t =>{
        await homepage.proceedToAcceptCookies()
        await signinpage.signInwithCorrectEmailAndIncorrectPassword(config.email, "config.password")  
    })
