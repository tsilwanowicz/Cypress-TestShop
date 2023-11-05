import HomePage from "../page_objects/homePage";
import CartPage from "../page_objects/cartPage";
import OrderPage from "../page_objects/orderPage";

describe ('my 2nd scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function (){
        cy.fixture('products').as('productData')
    })

    it('should order a product from the shop', function(){
        homePage.visitPage()
        homePage.addProductToCart(this.productData.Polo)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkIfAddedProductIsInCart(this.productData.Polo)
        cartPage.clickGoToPayments()
        orderPage.fillAllRequiredData()
        orderPage.clickPlaceOrderButton()
        orderPage.checkIfOrderWasPlacedSuccesfully()

    })
})    
