import { $$ } from '@wdio/globals';

class SearchResultsPage {
    public get searchResults(): ReturnType<typeof $$> {
        return $$('li.searchResultItem');
    }

    public async clickFirstResult(): Promise<void> {
        const results = await this.searchResults;
        const count = await results.length;

        if (count > 0) {
            await results[0].click();
        } else {
            throw new Error(' No search results found.');
        }
    }
}

export default new SearchResultsPage();
