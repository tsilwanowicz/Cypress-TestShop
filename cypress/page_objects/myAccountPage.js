import Urls from "./urls";

const usernameEmailField = '#username'
const passwordField = '#password'
const loginButton = 'button[name="login"]'
const myAccountNavigation = '.woocommerce-MyAccount-navigation'
const incorrectLoginError = 'ul[role="alert"]'
const registrationEmailField = '#reg_email'
const registerButton = 'button[name="register"]'
const forgotPassword = '.lost_password > a'
const userLogin = '#user_login'
const resetPasswordButton = '.woocommerce-Button.button'


class MyAccountPage{

    fillUsernameFieldWithEmail(email){
        cy.get(usernameEmailField).type(email)
    }

    fillPasswordField(password){
        cy.get(passwordField).type(password)
    }

    clickLoginButton(){
        cy.get(loginButton).click()
    }

    checkVisibilityOfMyAccountNavigation(){
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkIncorrectLoginErrorVisibility(){
        cy.get(incorrectLoginError).should('be.visible')
    }

    visitPage(){
        const urls = new Urls
        urls.visitMyAccountPage()
    }

    fillRegistrationEmail(email){
        cy.get(registrationEmailField).type(email)
    }

    clickRegisterButton(){
        cy.get(registerButton).click()
    }

    clickForgotPassword(){
        cy.get(forgotPassword).click()
    }

    fillUserLoginField(email){
        cy.get(userLogin, {timeout: 10000}).type(email)
    }

    clickResetPasswordButton(){
        cy.get(resetPasswordButton).click()
    }

    checkResetPasswordUrl(){
        cy.url().should('eq', 'https://tapsshop.pl/?page_id=9&lost-password&reset-link-sent=true')
    }

}

export default MyAccountPage;
