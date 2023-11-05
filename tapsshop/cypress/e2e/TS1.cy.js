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


    it('should login to the application', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillUsernameFieldWithEmail(this.userData.email)
        myAccountPage.fillPasswordField(this.userData.password)
        myAccountPage.clickLoginButton()
        myAccountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('should not login to the application', function(){
        myAccountPage.visitPage()
        myAccountPage.fillUsernameFieldWithEmail(faker.internet.email())
        myAccountPage.fillPasswordField(faker.internet.password())
        myAccountPage.clickLoginButton()
        myAccountPage.checkIncorrectLoginErrorVisibility()

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