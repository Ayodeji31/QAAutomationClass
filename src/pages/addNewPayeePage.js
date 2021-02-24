import { t, Selector } from 'testcafe'
import config from '../module/config'

class AddNewPayeePage{
 selectPayeeName = Selector('[id="np_new_payee_name"]')

 selectPayeeAddress = Selector('[id="np_new_payee_address"]')

 selectPayeeAccount = Selector('[id="np_new_payee_account"]')

 selectPayeeDetails = Selector('[id="np_new_payee_details"]')

 selectAddButton = Selector('[id="add_new_payee"]')

 verifyNewPayeeMessage = Selector('[id="alert_content"]')

 enterWhoIsPayingDetails = async() => {
     await t.typeText(this.selectPayeeName, config.payeeName)
            .typeText(this.selectPayeeAddress, 'BR3 3AE 25 Wickham Way Beckenham')
            .typeText(this.selectPayeeAccount, 'Checking Account')
            .typeText(this.selectPayeeDetails, 'Adeola Odeku')
            .click(this.selectAddButton)
            .expect(this.verifyNewPayeeMessage.exists).ok()
 }
}
export default new AddNewPayeePage()