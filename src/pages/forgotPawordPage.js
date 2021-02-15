import { t, Selector } from 'testcafe'

class ForgotPassword{
  
    selectForgotEmail = Selector('[id="user_email"]')

    selectForgotButton = Selector('[name="submit"]')


    forgotPassword = async(forgotemail)=>{
      await t.typeText(this.selectForgotEmail, forgotemail)
             .click(this.selectForgotButton)
             console.log(forgotemail);
    }

}
export default new ForgotPassword()