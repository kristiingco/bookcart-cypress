/// <reference types = "cypress"/>

class Navbar {
    static get logo() {
        return cy.get(".brand-title");
    }

    static get searchBar() {
        return cy.get(".mat-mdc-autocomplete-trigger");
    }

    static get cartButton() {
        return cy.get(
            '[ng-reflect-router-link="/shopping-cart"] > .mat-mdc-button-touch-target'
        );
    }

    static get loginButton() {
        return cy.get(".ng-star-inserted > .mat-mdc-button-touch-target");
    }

    static get wishListButton() {
        return cy.get(
            ".mdc-icon-button.ng-star-inserted > .mat-mdc-button-touch-target"
        );
    }

    static get userMenu() {
        return cy.get(".mat-mdc-menu-trigger > .mat-mdc-button-touch-target");
    }

    static get username() {
        return cy.get(".mat-mdc-menu-trigger > .mdc-button__label > span");
    }

    static get myOrdersButton() {
        return cy.get('[ng-reflect-router-link="/myorders"]');
    }

    static get logoutButton() {
        return cy.get(".mat-mdc-menu-content > :nth-child(2)");
    }
}

export default Navbar;
