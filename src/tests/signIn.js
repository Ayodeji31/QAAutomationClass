import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import signinpage from '../pages/signInPage'
import config from '../module/config'
import register from '../pages/registerPage'

const fixtureName = 'SignIn functionality'

fixture(fixtureName)
    .page (config.QAetsy);
// Signin with correct
    test('SingIn to Etsy account', async t =>{
        await t.click(homepage.AcceptCookies)
        await t.click(homepage.selectSignInButton)
        await signinpage.signInwithCorrectCredentials(config.email, config.password)
    });

// Signin wrong email address
    test('Sign-In with wrong user name and password', async t =>{
        await t
        .click('[data-gdpr-single-choice-accept]')
        .click('.wt-btn.wt-btn--small.wt-btn--transparent.wt-mr-xs-1.inline-overlay-trigger.signin-header-action.select-signin')
        .typeText('[aria-describedby="aria-join_neu_email_field-error"]', 'tope2eedg@yahoo.com')
        .typeText('[id="join_neu_password_field"]', 'Today18')
        .click('[name="submit_attempt"]')
        const wrongEmail = await Selector('[id="aria-join_neu_email_field-error"]')
        await t.expect(wrongEmail.exists).ok()

        const Message = await wrongEmail.innerText
        console.log(Message);
        console.log(Message);
        console.log(Message);

    })
