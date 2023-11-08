import HomePage from "../page_objects/homePage";
import MyAccountPage from "../page_objects/myAccountPage";
import CartPage from "../page_objects/cartPage";
import { faker } from '@faker-js/faker';

describe('my first scenario', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();
    const cartPage = new CartPage();

    before(function (){
        cy.fixture('users').as('userData')
    })

    it('should add product to cart & then remove it from cart', function() {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkIfAddedProductIsInCart()
        cartPage.removeProductFromCart()
        cartPage.checkIfCartIsEmpty()

    })

})