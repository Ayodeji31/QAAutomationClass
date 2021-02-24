import myAccount from '../pages/myAccountPage'
import paybill from '../pages/payBillsPage'
import homepage from '../pages/homePage'
import config from '../module/config'
import signinpage from '../pages/loginPage'
import addpayee from '../pages/addNewPayeePage'

const fixtureName = 'Add new Payee functionality'

fixture(fixtureName)
    .page (config.QABankApp);


test('Add new payee to Account', async t =>{
    await t.click(homepage.selectSignInButton)
    await signinpage.signInwithCorrectCredentials();
    await t.click(myAccount.selectPayBills)
    await t.click(paybill.selectAddNewPayee)
    await addpayee.enterWhoIsPayingDetails()
    await myAccount.signOutOfUserAccount();
});