import Urls from "./urls";
import { Faker, faker } from "@faker-js/faker";

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
const ordersTab = '.woocommerce-MyAccount-navigation-link--orders'
const downloadsTab = '.woocommerce-MyAccount-navigation-link--downloads'
const addressTab = '.woocommerce-MyAccount-navigation-link--edit-address'
const detailsTab = '.woocommerce-MyAccount-navigation-link--edit-account'
const logoutTab = '.woocommerce-MyAccount-navigation-link--customer-logout'
const ordersList = '.account-orders-table'
const infoMessage = '.woocommerce-info'
const mainHeader = '.entry-title'
const editAddressButton = '.edit'
const billingPhoneField = '#billing_phone'
const saveAddressButton = 'button[name="save_address"]'
const addressChangedMsg = '[role="alert"]'



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
        cy.url().should('eq', 'https://tapsshop.pl/moje-konto/lost-password/?reset-link-sent=true')
    }

    checkOrdersTab(){
        cy.get(ordersTab).click()
        cy.get(ordersList).should('be.visible')
    }

    checkDownloadsTab(){
        cy.get(downloadsTab).click()
        cy.get(infoMessage).contains('Pliki do pobrania nie są jeszcze dostępne')
    }

    checkAddressTab(){
        cy.get(addressTab).click()
        cy.get(mainHeader).contains('Adresy')
        cy.get(editAddressButton).first().click()
        cy.get(billingPhoneField).clear().type(faker.phone.number('+## ### ### ###'))
        cy.get(saveAddressButton).click()
        cy.get(addressChangedMsg).should('have.text', '\n\t\tAdres został zmieniony.\t')

    }

    checkAccountDetailsTab(){
        cy.get(detailsTab).click()
        cy.get(mainHeader).contains('Szczegóły konta')
    }

    checkLogoutTab(){
        cy.get(logoutTab).click()
        cy.get(this.checkVisibilityOfMyAccountNavigation).should('not.be.visible')
    }


}

export default MyAccountPage;
