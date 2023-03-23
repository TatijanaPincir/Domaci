/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')
import { loginPage } from "../page_object/loginPage"
import { faker } from '@faker-js/faker'
describe("login page", () => {

    before(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });
    beforeEach(() => {
        cy.visit('/login');
        cy.url().should('include', 'gallery-app');
        cy.url().should('contains', '/login')
    })

    it('check if present', () => {
        loginPage.loginTitle.should('have.text', 'Please login')
    })

    it("visit login page", () => {
        cy.visit("/login");
    });

    it.only("positive case - successful login", () => {
        cy.visit("/login");
        loginPage.emailInputField.type(faker.internet.email());
        loginPage.passwordInputField.type(faker.internet.password());
        loginPage.submitButton.click();
        
    });

    it("positive case - successful login", () => {
        cy.visit("/login");
        loginPage.loginUser('tatianapintir@gmail.com', '23jul2022');
    })


});




