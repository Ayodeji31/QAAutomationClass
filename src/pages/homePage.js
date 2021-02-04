//const { Selector } = require("testcafe");
import { t, Selector } from 'testcafe'

class Homepage {

AcceptCookies = Selector('[data-gdpr-single-choice-accept]')

selectSearchField = Selector('[id="global-enhancements-search-query"]')

selectSearchButton = Selector('.etsy-icon.wt-nudge-b-1')

selectSignInButton = Selector('.wt-btn.wt-btn--small.wt-btn--transparent.wt-mr-xs-1.inline-overlay-trigger.signin-header-action.select-signin')

selectCartButton = Selector('span').withText('Cart')

signOutDropdown = Selector('[aria-label="Your account"]')

signOutButton = Selector('.subnav-text-link.sign-out')



   searchForProduct = async () =>{
     await t .click(this.AcceptCookies)
            .typeText(this.selectSearchField, 'bag')
            .click(this.selectSearchButton)
    }

    proceedToAcceptCookies = async () =>{
        await t .click(this.AcceptCookies)
                .click(this.selectSignInButton)
    }

}
export default new Homepage();