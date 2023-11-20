import HomePage from "../page_objects/homePage";
import CartPage from "../page_objects/cartPage";
import OrderPage from "../page_objects/orderPage";
import MyAccountPage from "../page_objects/myAccountPage";
import { faker } from '@faker-js/faker';
import Urls from "../page_objects/urls";
import ShopPage from "../page_objects/shopPage";

describe ('go through the purchase process', () => {

    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();
    const myAccountPage = new MyAccountPage();
    const urls = new Urls();
    const shopPage = new ShopPage();
    const userData = {
        "email": "cotaga1249@maillei.net",
        "password": "VRrMhK8MqFyd"
        }

    beforeEach(function (){
        cy.fixture('products').as('productData')
    })

    it('should order a product from the shop & then create new account', function(){
        homePage.visitPage()
        homePage.addProductToCart(this.productData.Polo)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkIfAddedProductIsInCart(this.productData.Polo)
        cartPage.clickGoToPayments()
        orderPage.fillAllRequiredData()
        orderPage.clickPlaceOrderButton()
        orderPage.checkIfOrderWasPlacedSuccesfully()

    })

    it('should order a product as a logged in user', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillUsernameFieldWithEmail(userData.email)
        myAccountPage.fillPasswordField(userData.password)
        myAccountPage.clickLoginButton()
        urls.visitShopPage()
        shopPage.clickProductThumbnail(this.productData.Polo.Name)
        shopPage.addProductToCartFromPDP(this.productData.Polo.Name)
        cartPage.checkIfAddedProductIsInCart(this.productData.Polo)
        cartPage.clickGoToPayments()
        orderPage.clickPlaceOrderButton()
        orderPage.checkIfOrderWasPlacedSuccesfully()
        
    })
})    
