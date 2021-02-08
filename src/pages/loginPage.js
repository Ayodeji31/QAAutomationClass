import { t, Selector } from 'testcafe'
import config from '../module/config'


class LoginPage {
    
    selectAndtypeUserName = Selector('[name="user_login"]')
    
    selectAndtypePasswordField = Selector('[id="user_password"]')
    
    selectSignInButton = Selector('[name="submit"]')
    
    selectForgotPassword = Selector('a').withText('Forgot your password ?')

    errorMessage = Selector('#login_form > div.alert.alert-error').withText('Login and/or password are wrong.')




    signInwithCorrectCredentials = async () =>{
        await t 
             .typeText(this.selectAndtypeUserName, config.user)
             .typeText(this.selectAndtypePasswordField, config.password)
             .click(this.selectSignInButton)
    }

    signInwithIncorrectUserName = async () =>{
        await t
              .typeText(this.selectAndtypeUserName, "config1user")
              .typeText(this.selectAndtypePasswordField, 'password')
              .click(this.selectSignInButton)
              .expect(this.errorMessage.exists).ok()
    }

    signInwithIncorrectPassword = async () =>{
        await t 
             .typeText(this.selectAndtypeUserName, 'username')
             .typeText(this.selectAndtypePasswordField, 'passwordss')
             .click(this.selectSignInButton)
             .expect(this.errorMessage.exists).ok()
    }

}
export default new LoginPage();