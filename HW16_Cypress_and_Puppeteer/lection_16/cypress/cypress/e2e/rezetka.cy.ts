describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
    });

    it('should find RZTK', () => {
        //cy.visit('https://rozetka.com.ua/');
        cy.get('[name="search"]').type('RZTK');
        cy.contains('button', ' Знайти ').click();

        const resultSelector = 'rz-button-product-page .goods-tile__title';

        cy.get(resultSelector).eq(0).should('contain.text', 'RZTK');
        cy.get(resultSelector).each(($el) => {
            cy.wrap($el).should('contain.text', 'RZTK');
        });
    });

    it('Side bar should contain menu "Computers and Notebooks"', () => {
        const menuItemsSelector = '.sidebar-theme li a';
        cy.get(menuItemsSelector).then(() => {
            console.log('waiting completed');
        });

        const menuItems: string[] = [];
        cy.get(menuItemsSelector).each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                menuItems.push(text.trim());
            });
        }).then(() => {
            expect(menuItems).to.include('Ноутбуки та комп’ютери');
        });
    });


});
