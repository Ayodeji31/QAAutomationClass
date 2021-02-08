import { t, Selector } from 'testcafe'
import homepage from './homePage'


class RegisterPage{

verifyCashAccount = Selector('h2').withText('Cash Accounts')

verifyInvestmentAccount = Selector('h2').withText('Investment Accounts')

verifyCreditAccount = Selector('h2').withText('Credit Accounts')

verifyLoanAccount = Selector('h2').withText('Loan Accounts')

selectUsernameToSignOut = Selector('a').withText('username')

selectLogOutLink = Selector('[id="logout_link"]')


signOutOfUserAccount = async ()=>{
    await t.click(this.selectUsernameToSignOut)
           .click(this.selectLogOutLink)
}
}
export default new RegisterPage()