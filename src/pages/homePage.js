//const { Selector } = require("testcafe");
import { t, Selector } from 'testcafe'

class Homepage {

selectFeedback = Selector('[id="feedback"]')

selectSearchField = Selector('[id="searchTerm"]')

selectOnlineBanking = Selector('[id="onlineBankingMenu"]')

selectSignInButton = Selector('[id="signin_button"]')

signOutButton = Selector('.subnav-text-link.sign-out')



searchForProduct = async () =>{
    await t .typeText(this.selectSearchField, 'banking')
            .pressKey('enter')
}

}
export default new Homepage();