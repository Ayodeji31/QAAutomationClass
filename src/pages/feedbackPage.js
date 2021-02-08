import { t, Selector } from 'testcafe'
import config from '../module/config'



class FeedbackPage{

    selectAndTypeName = Selector('[id="name"]')

    selectAndTypeEmail = Selector('[name="email"]')

    selectSubjet = Selector('[id="subject"]')

    selectAndTypeQuestion = Selector('[name="comment"]')

    selectSendMessage = Selector('[name="submit"]')

    verifyFeedbackMessage = Selector('[id="feedback-title"]')


    sendCustomerFeedback = async(email) => {
      await t.typeText(this.selectAndTypeName, 'Adesuwa')
             .typeText(this.selectAndTypeEmail, email)
             .typeText(this.selectSubjet, 'Register link ', {paste:true} )
             .typeText(this.selectAndTypeQuestion, config.message, {paste:true} )
             .click(this.selectSendMessage)
             .wait(2000)
             .expect(this.verifyFeedbackMessage.exists).ok();
    }



}

export default new FeedbackPage()