describe('OpenLibrary - Book Search Functionality (Dune)', () => {
    const baseUrl = 'https://openlibrary.org';

    it('should return search results for "dune frank herbert"', () => {
        cy.visit(baseUrl);
        cy.get('input[name="q"]').type('dune frank herbert{enter}');

        cy.url().should('include', '/search');
        cy.get('.searchResultItem').should('exist');
        cy.contains('Dune', { matchCase: false });
    });

    it('should navigate to the book detail page from search results', () => {
        cy.visit(baseUrl);
        cy.get('input[name="q"]').type('dune frank herbert{enter}');

        cy.get('.searchResultItem a').first().click();

        cy.url().should('include', '/works/');
        cy.get('h1').should('exist');
    });
});

describe('OpenLibrary - Author (Frank Herbert)', () => {
    const baseUrl = 'https://openlibrary.org';

    it('should allow navigating to an author page via search', () => {
        cy.visit(baseUrl);
        cy.get('input[name="q"]').type('Frank Herbert{enter}');

        cy.url().should('include', '/search');
        cy.contains('Frank Herbert').click();

        cy.url().should('include', '/authors/');
        cy.get('h1').should('contain.text', 'Frank Herbert');
    });
});
