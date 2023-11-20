import { faker } from "@faker-js/faker";
import Urls from "./urls";

const sortBy = '.orderby'
const pageNumber = '.page-numbers'
const productThumbnail = '.woocommerce-loop-product__title'
const productDescriptionTab = '#tab-title-description'
const productDescription = '#tab-description'
const productAdditionalInfoTab = '#tab-title-additional_information'
const productAdditionalInfo = '#tab-additional_information'
const productReviewsTab = '#tab-title-reviews'
const productReviews = '#tab-reviews'
const reviewFiveStars = '.star-5'
const fiveStarsActive = '.star-5.active'
const reviewForm = '#comment'
const reviewAuthor = '#author'
const reviewMail = '#email'
const submitReview = '#submit'
const reviewList = '#comments'
const addToCartButton = 'button[name="add-to-cart"]'
const goToCart = '.button.wc-forward'

class ShopPage{

    changeSortingBy(){
        cy.get(sortBy).first().select('Sortuj po cenie od najniższej')
        //jakas walidacja by sie przydala czy rzeczywiscie posortowalo

    }

    visitPage(){
        const urls = new Urls
        urls.visitShopPage()
    }

    clickProductThumbnail(productName){
        cy.get(productThumbnail).contains(productName).click()
    }

    checkProductPageUrl(productName){
        cy.url().should('contain', productName.toLowerCase())
    }

    checkProductDetailsPage(){
        cy.get(productDescriptionTab).click()
        cy.get(productDescription).should('be.visible')
        cy.get(productAdditionalInfoTab).click()
        cy.get(productAdditionalInfo).should('be.visible')
        cy.get(productReviewsTab).click()
        cy.get(productReviews).should('be.visible')
    }

    writeValidProductReview(){
        cy.get(productReviewsTab).click()
        cy.get(reviewFiveStars).should('be.visible').click()
        cy.get(fiveStarsActive).should('be.visible')
        cy.get(reviewForm).type(faker.word.words(10))
        cy.get(reviewAuthor).type(faker.name.firstName())
        cy.get(reviewMail).type(faker.internet.email())
        cy.get(submitReview).click().then((review) => {
            cy.get(reviewList).should('not.be.empty')
        })
    }

    addProductToCartFromPDP(){
        cy.get(addToCartButton).click()
        cy.get(goToCart).should('be.visible').click()
    }

}

export default ShopPage;
