import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import signinpage from '../pages/signInPage'
import config from '../module/config'
import register from '../pages/registerPage'

const fixtureName = 'Search functionality'
 const randomEmail = `goldenfish${Math.floor(Math.random() * 1000)}@gmail.com`;

fixture(fixtureName)
    .page (config.QAetsy);

//Search for product
    test('Search with valid product', async t => {
        await homepage.searchForProduct()
    });



   

  
