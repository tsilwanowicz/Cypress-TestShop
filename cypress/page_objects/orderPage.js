import { faker } from "@faker-js/faker";

const firstName = '#billing_first_name'
const lastName = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressField = '#billing_address_1'
const postalCodeField = '#billing_postcode'
const cityField = '#billing_city'
const phoneField = '#billing_phone'
const emailField = '#billing_email'
const placeOrder = '#place_order'
const countryDropdownPL = 'Polska'
const orderSection = '.woocommerce-order-overview'
const orderID = '.order'
const orderDate = '.date'
const orderTotal = '.total'
const orderPaymentMethod = '.method'

class OrderPage{

    fillAllRequiredData(data){
        cy.get(firstName).type(faker.person.firstName())
        cy.get(lastName).type(faker.person.lastName())
        cy.get(countryDropdown).select(countryDropdownPL, {force: true})
        cy.get(addressField).type(faker.address.streetAddress())
        cy.get(postalCodeField).type(faker.address.zipCode('##-###'))
        cy.get(cityField).type(faker.address.city())
        cy.get(phoneField).type(faker.phone.number('+## ### ### ###'))
        cy.get(emailField).type(faker.internet.email())
    }

    clickPlaceOrderButton(){
        cy.get(placeOrder).click()
        }

    checkIfOrderWasPlacedSuccesfully(){
        cy.get(orderSection, {timeout:10000}).within(()=> {
            cy.get(orderID).should('be.visible')
            cy.get(orderDate).should('be.visible')
            cy.get(orderTotal).should('be.visible')
            cy.get(orderPaymentMethod).should('be.visible')
        })
    }

}

export default OrderPage;
