import Urls from "./urls";

const myAccountHeaderButton = '#menu-item-100'
const dataBlockNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'
const mainPageBanner = '.wp-block-cover__background'
const categoryHeader = '.wp-block-heading'
const searchBar = '#woocommerce-product-search-field-0'
const searchResults = '.woocommerce-products-header'
const searchResultsColumn = '.products.columns-4'
const productName = '.product_title.entry-title'
const addToCartButtonSingle = 'button[name="add-to-cart"]'

class HomePage{

    clickMyAccountHeaderButton(){
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(Polo){
        cy.get(dataBlockNew).within(()=>{
            cy.get(Polo.Locator).click()
        })
    }

    clickGoToCartFromProductButton(){
        cy.get(dataBlockNew).within(()=>{
            cy.get(checkCartFromProductLevel).click()
        })
    }

    checkMainPageBanner(){
        cy.get(mainPageBanner).should('be.visible')
    }

    checkCategoryHeader(categoryHeaderName){
        cy.get(categoryHeader).contains(categoryHeaderName).should('be.visible')
    }

    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }

    checkHomePageUrl(){
        cy.url().should('eq', 'https://tapsshop.pl/')
    }

    checkSearchBarWithMultipleResults(searchTerm){
        cy.get(searchBar).should('be.visible').type(searchTerm).type("{enter}")
        cy.get(searchResults).should('be.visible').contains(searchTerm)
        cy.get(searchResultsColumn).should('be.visible').within(() => {
            cy.get('.woocommerce-loop-product__title').contains(searchTerm)
        })
    }

    checkSearchBarWithSingleResult(searchTerm){
        cy.get(searchBar).should('be.visible').type(searchTerm).type("{enter}")
        cy.get(productName).should('be.visible').contains(searchTerm)
        cy.get(addToCartButtonSingle).should('be.visible')

    }
}

export default HomePage;
