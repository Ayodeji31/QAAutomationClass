import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import config from '../module/config'
import feedback from '../pages/feedbackPage'

const fixtureName = 'Feedback functionality'
 const randomEmail = `goldenfish${Math.floor(Math.random() * 1000)}@gmail.com`;

fixture(fixtureName)
    .page (config.QABankApp);

    test('Feedback on customer', async t =>{
        await t.click(homepage.selectFeedback)
        await feedback.sendCustomerFeedback(randomEmail)
    });
  