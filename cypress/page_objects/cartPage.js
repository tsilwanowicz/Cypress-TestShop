import {Product} from "./homePage";

const productName = '.product-name'
const removeFromCart = '.remove'
const emptyCartNotification = '.cart-empty.woocommerce-info'
const goToPayments = '.wc-proceed-to-checkout'

class CartPage{

    checkIfAddedProductIsInCart(Polo){
        cy.get(productName).contains(Polo.Name).should('exist')
    }

    removeProductFromCart(){
        cy.get(removeFromCart).click()
    }

    checkIfCartIsEmpty(){
        cy.get(emptyCartNotification).should('be.visible')
    }

    clickGoToPayments(){
        cy.get(goToPayments).click()
    }

}

export default CartPage;