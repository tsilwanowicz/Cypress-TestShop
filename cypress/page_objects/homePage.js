import Urls from "./urls";

const MyAccountHeaderButton = '#menu-item-100'
const dataBlockNew = 'div[data-block-name="woocommerce/product-new"]'
const CheckCartFromProductLevel = '.added_to_cart.wc-forward'

class HomePage{

    clickMyAccountHeaderButton(){
        cy.get(MyAccountHeaderButton).click()
    }

    addProductToCart(Polo){
        cy.get(dataBlockNew).within(()=>{
            cy.get(Polo.Locator).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.get(dataBlockNew).within(()=>{
            cy.get(CheckCartFromProductLevel).click()
        })
    }

    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }
}

export default HomePage;