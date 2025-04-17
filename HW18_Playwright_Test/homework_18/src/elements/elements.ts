export const BookDetailsSelectors = {
    bookTitle: 'h1.work-title', // точний селектор з Puppeteer, видимий після скролу
    authorLink: 'div.workDetails > div.work-title-and-author h2 > a'
};

export const SearchPageSelectors = {
    searchInput: '#header-bar input[type="text"]',
    searchButton: '#header-bar input[type="submit"]',
    searchResults: '#searchResults > ul > li',
    firstTitle: '#searchResults > ul > li:nth-child(1) > div > div.details > div > h3 > a',
    firstAuthor: '#searchResults > ul > li:nth-child(1) > div > div.details > span.bookauthor > a',
    firstPreviewButton: '#searchResults > ul > li:nth-child(1) .cta-button-group > a[href="#bookPreview"]'
};
