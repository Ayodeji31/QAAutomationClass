import { Selector } from 'testcafe';
import homepage from '../pages/homePage'
import signinpage from '../pages/loginPage'
import config from '../module/config'
import myAccount from '../pages/myAccountPage'

const fixtureName = 'Login functionality'

fixture(fixtureName)
    .page (config.QABankApp);
// Signin with correct
    test('SingIn With correct credentials', async t =>{
        await t.click(homepage.selectSignInButton)
        await signinpage.signInwithCorrectCredentials();
        await myAccount.signOutOfUserAccount();
    });
// Signin with incorrect username
    test('SingIn With incorrect username and correct password', async t =>{
        await t.click(homepage.selectSignInButton)
        await signinpage.signInwithIncorrectUserName();
    });
// Signin with incorrect password
    test('SingIn With correct username and incorrect password', async t =>{
        await t.click(homepage.selectSignInButton)
        await signinpage.signInwithIncorrectPassword();
    });
