/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json')

describe("login page", () => {

    before(()=> {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it("visit login page", () => {
        cy.visit("/login");
    });

    it("positive case - successful login", () => {
        cy.visit("/login");
        cy.get(locators.loginPage.emailInputField).type('tatianapintir@gmail.com');
        cy.get(locators.loginPage.passwordInputField).type('23jul2022');
        cy.get(locators.loginPage.submitBtn).click();
    });

});




