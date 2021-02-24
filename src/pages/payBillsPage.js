import { t, Selector } from 'testcafe'


class PayBillsPage{
    selectPayee = Selector('[id="sp_payee"]')

    selectPayeeOption = Selector('[name="payee"] > option')

    selectAccount = Selector('[id="sp_account"]')

    selectAccountOption = Selector('[name="account"]')

    selectAddNewPayee = Selector('a').withText('Add New Payee')

    inputAmount = Selector('[id="sp_amount"]')

    inputDate = Selector('[id="sp_date"')

    selectDescription = Selector('[id="sp_description"]')

    selectPayButton = Selector('[id="pay_saved_payees"]')

    verifyPaymentSuccess = Selector('span').withText('The payment was successfully submitted.')

    makePaymentToSavedPayees = async () => {   
        await t.click(this.selectPayee)
               .click(this.selectPayeeOption.withText('Bank of America'))
               .click(this.selectAccount)
               .click(this.selectAccountOption.withText('Brokerage'))
               .typeText(this.inputAmount, '500')
               .typeText(this.inputDate, '2021-03-15')
               .pressKey('enter')
               .typeText(this.selectDescription, 'Vehicle payment')
               .click(this.selectPayButton)
               .expect(this.verifyPaymentSuccess.exists).ok()
    }
}
export default new PayBillsPage()