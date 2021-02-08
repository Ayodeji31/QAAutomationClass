import { t, Selector } from 'testcafe'


class SearchResultPage{
verifySearchResult = Selector('h2').withText('Search Results:')

selectResultLink = Selector('a').withText('Zero - Free Access to Online Banking')

searchResultDisplayed = Selector('h1').withText('Online Banking')

verifyProductSearch = async () =>{
    await t.expect(this.verifySearchResult.exists).ok()
           .click(this.selectResultLink)
           .expect(this.searchResultDisplayed.exists).ok()
}

}
export default new SearchResultPage();