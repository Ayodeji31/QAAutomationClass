import { Selector } from 'testcafe';

import homepage from '../pages/homePage'
import config from '../module/config'
import search from '../pages/searchResultPage'

const fixtureName = 'Search functionality'

fixture(fixtureName)
    .page (config.QABankApp);

//Search for product
    test('Search for product', async t => {
        await homepage.searchForProduct()
        await search.verifyProductSearch()
    });



   

  
