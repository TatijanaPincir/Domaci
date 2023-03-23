class LoginPage { 

get emailInputField() {
    return cy.get("#email")
}
get passwordInputField (){
    return cy.get("#password")
}
get submitButton (){
    return cy.get ("button[type='submit']")
}
get loginTitle(){
    return cy.get (".tytle-style")
}
loginUser(userEmail, password) {
    this.emailInputField.type(userEmail); 
    this.passwordInputField.type(password);
    this.submitButton.click()
}
}


export const loginPage = new LoginPage ()

