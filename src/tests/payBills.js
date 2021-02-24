import myAccount from '../pages/myAccountPage'
import paybill from '../pages/payBillsPage'
import homepage from '../pages/homePage'
import config from '../module/config'
import signinpage from '../pages/loginPage'

const fixtureName = 'Payment functionality'

fixture(fixtureName)
    .page (config.QABankApp);


test('Make payment to an existing account', async t =>{
    await t.click(homepage.selectSignInButton)
    await signinpage.signInwithCorrectCredentials();
    await t.click(myAccount.selectPayBills)
    await paybill.makePaymentToSavedPayees()
    await myAccount.signOutOfUserAccount();
});

