import HomePage from "../page_objects/homePage";
import MyAccountPage from "../page_objects/myAccountPage";
import CartPage from "../page_objects/cartPage";
import { faker } from '@faker-js/faker';

describe('homepage, login, registration & search tab tests', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();
    const cartPage = new CartPage();
    const userData = {
    "email": "cotaga1249@maillei.net",
    "password": "VRrMhK8MqFyd"
    }


    beforeEach(function (){
        cy.fixture('users').as('userData') 
    })

    it('should check homepage url & all the other elements', function(){
        homePage.visitPage()
        homePage.checkHomePageUrl()
        homePage.checkMainPageBanner()
        homePage.checkCategoryHeader('Kupuj wg kategorii')
        homePage.checkCategoryHeader('Nowe')
        homePage.checkCategoryHeader('Ulubione')
        homePage.checkCategoryHeader('W promocji')
        homePage.checkCategoryHeader('Bestsellery')
    })

    it('should test search bar with multiple results', function(){
        homePage.visitPage()
        homePage.checkSearchBarWithMultipleResults('Hoodie')
    })

    it('should test search bar with only one result', function(){
        homePage.visitPage()
        homePage.checkSearchBarWithSingleResult('Beanie')
    })

    it('should login to the application', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillUsernameFieldWithEmail(userData.email)
        myAccountPage.fillPasswordField(userData.password)
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

    it('should register a new account', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillRegistrationEmail(faker.internet.email())
        myAccountPage.clickRegisterButton()
        myAccountPage.checkVisibilityOfMyAccountNavigation()
    })

    it('invalid registration', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillRegistrationEmail('test@123')
        myAccountPage.clickRegisterButton()
        myAccountPage.checkIncorrectLoginErrorVisibility()
    })

    it('successful password reset', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.clickForgotPassword()
        myAccountPage.fillUserLoginField(faker.internet.email())
        myAccountPage.clickResetPasswordButton()
        myAccountPage.checkResetPasswordUrl()
    })

})
