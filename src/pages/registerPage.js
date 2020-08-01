import { t, Selector } from 'testcafe'
import homepage from '../pages/homePage'


class RegisterPage{

selectCreateEmailAddress = Selector('[aria-describedby="aria-join_neu_email_field-error"]')

selectCreateAccountFirstName = Selector('[id="join_neu_first_name_field"]')

selectCreateAccountPassword = Selector('[aria-describedby="aria-join_neu_password_field-error"]')

selectCretaeAccountButton = Selector('[name="submit_attempt"]')


createCustomerAccount = async (random)=>{

    await t
           .typeText(this.selectCreateEmailAddress, random)
           .typeText(this.selectCreateAccountFirstName, 'Bamidele')
           .typeText(this.selectCreateAccountPassword, 'Today0801')
           .click(this.selectCretaeAccountButton)
           .click(homepage.signOutDropdown)
           .click(homepage.signOutButton);

}
}
export default new RegisterPage()