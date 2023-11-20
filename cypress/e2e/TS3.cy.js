import HomePage from "../page_objects/homePage";
import MyAccountPage from "../page_objects/myAccountPage";
import CartPage from "../page_objects/cartPage";
import ShopPage from "../page_objects/shopPage";
import { faker } from '@faker-js/faker';

describe('my first scenario', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();
    const cartPage = new CartPage();
    const shopPage = new ShopPage();

    beforeEach(function (){
        cy.fixture('products').as('productData')
    })

    it('should add product to cart & then remove it from cart', function(){
        homePage.visitPage()
        homePage.addProductToCart(this.productData.Polo)
        homePage.clickGoToCartFromProductButton()
        cartPage.checkIfAddedProductIsInCart(this.productData.Polo)
        cartPage.removeProductFromCart(this.productData.Polo)
        cartPage.checkIfCartIsEmpty()
    })
    
    it('should change sorting of products', function(){
        shopPage.visitPage()
        shopPage.changeSortingBy()
    })

    it('should click product thumbnail & check product tabs', function(){
        shopPage.visitPage()
        shopPage.clickProductThumbnail('Hoodie')
        shopPage.checkProductPageUrl('Hoodie')
        shopPage.checkProductDetailsPage()
    })

    it('should write a product review', function(){
        shopPage.visitPage()
        shopPage.clickProductThumbnail('Beanie')
        shopPage.writeValidProductReview()
    })

})
