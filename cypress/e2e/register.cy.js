/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")
describe('Register page', () => {

    it('Negative case - try to register with leaving last-name field empty', () => {
        cy.visit("/register");
        cy.get(locators.registerPage.FirstNameField).type('Milan');
        cy.get(locators.registerPage.LastNameField).clear();
        cy.get(locators.registerPage.emailField).type('milannnnnnaleksic23@gmail.com');
        cy.get(locators.registerPage.passwordField).type('milanaleksic123');
        cy.get(locators.registerPage.confPasswordField).type('milanaleksic123');
        cy.get(locators.registerPage.termsField).click();
        cy.get(locators.registerPage.submitButton).click();
    });
});