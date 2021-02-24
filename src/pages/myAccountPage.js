import { t, Selector } from 'testcafe'
import homepage from './homePage'


class AccountPage{

verifyCashAccount = Selector('h2').withText('Cash Accounts')

verifyInvestmentAccount = Selector('h2').withText('Investment Accounts')

verifyCreditAccount = Selector('h2').withText('Credit Accounts')

verifyLoanAccount = Selector('h2').withText('Loan Accounts')

selectUsernameToSignOut = Selector('a').withText('username')

selectLogOutLink = Selector('[id="logout_link"]')

selectPayBills = Selector('[id="pay_bills_tab"]')

selectTransferFunds = Selector('[id="transfer_funds_tab"]')


signOutOfUserAccount = async ()=>{
    await t.click(this.selectUsernameToSignOut)
           .click(this.selectLogOutLink)
}
}
export default new AccountPage()