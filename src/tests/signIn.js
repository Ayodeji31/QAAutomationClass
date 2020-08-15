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
        await t.click(homepage.AcceptCookies)
        await t.click(homepage.selectSignInButton)
        await signinpage.signInwithCorrectCredentials(config.email, config.password)
    });

// Signin wrong email address
    test('Sign-In with wrong user name and correct password', async t =>{
        await t.click(homepage.AcceptCookies)
               .click(homepage.selectSignInButton)
        await signinpage.signInwithWrongEmailAndCorrectPassword(config.wrongEmailAddress, config.password)
        await t
    
        const wrongEmail = await Selector('[id="aria-join_neu_email_field-error"]')
        await t.expect(wrongEmail.exists).ok()

        const Message = await wrongEmail.innerText
        console.log(Message);
        console.log(Message);
        console.log(Message);
        console.log(Message);
        console.log(Message);

    })

    test('SignIn with Correct email and a wrong password', async t =>{


    })
