import homepage from '../pages/homePage'
import config from '../module/config'
import forgot from '../pages/forgotPawordPage'
import signinpage from '../pages/loginPage'

const fixtureName = 'Forgot password functionality'
 const forgotEmail = `golden${Math.floor(Math.random() * 1000)}@gmail.com`;

fixture(fixtureName)
    .page (config.QABankApp);

    test('Feedback on customer', async t =>{
        await t.click(homepage.selectSignInButton)
        await t.click(signinpage.selectForgotPassword)
        await forgot.forgotPassword(forgotEmail)
    });
  