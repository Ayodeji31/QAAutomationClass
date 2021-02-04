import { t, Selector } from 'testcafe'
import homepage from '../pages/homePage'


class SigninPage {
    
    typeEmailAddress = Selector('[aria-describedby="aria-join_neu_email_field-error"]')
    
    typePasswordField = Selector('[id="join_neu_password_field"]')
    
    selectSignInButton = Selector('[name="submit_attempt"]')

    selectRegisterButton = Selector('.wt-btn.wt-btn--outline.wt-btn--small.inline-overlay-trigger.register-header-action.select-register')

    message = Selector('[id="aria-join_neu_email_field-error"]').withText('Email address is invalid.')

    passwordMessage = Selector('[id="aria-join_neu_password_field-error"]').withText('Password was incorrect.')




    signInwithCorrectCredentials = async (email, pass) =>{
     await t 
             .typeText(this.typeEmailAddress, email)
             .typeText(this.typePasswordField, pass)
             .click(this.selectSignInButton)
             .click(homepage.signOutDropdown)
             .click(homepage.signOutButton);

    }

    signInwithWrongEmailAndCorrectPassword = async (email, pass) =>{
        await t 
            .typeText(this.typeEmailAddress, email)
            .typeText(this.typePasswordField, pass)
            .click(this.selectSignInButton)
        await t.expect(this.message.exists).ok()

    }

    signInwithCorrectEmailAndIncorrectPassword = async (email, pass) =>{
        await t 
                .typeText(this.typeEmailAddress, email)
                .typeText(this.typePasswordField, pass)
                .click(this.selectSignInButton)
        await t.expect(this.passwordMessage.exists).ok()

    }

}
export default new SigninPage();