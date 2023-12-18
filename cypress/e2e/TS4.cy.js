import MyAccountPage from "../page_objects/myAccountPage";
import HomePage from "../page_objects/homePage";
import Urls from "../page_objects/urls";



describe('verify my account tabs', () => {
    const myAccountPage = new MyAccountPage();
    const homePage = new HomePage();
    const urls = new Urls();
    const userData = {
        "email": "cotaga1249@maillei.net",
        "password": "VRrMhK8MqFyd"
        }
    
    beforeEach(function (){
        cy.fixture('users').as('userData') 
    })

    it('should login and check content of my account tabs', function(){
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        myAccountPage.fillUsernameFieldWithEmail(userData.email)
        myAccountPage.fillPasswordField(userData.password)
        myAccountPage.clickLoginButton()
        myAccountPage.checkVisibilityOfMyAccountNavigation()
        myAccountPage.checkOrdersTab()
        myAccountPage.checkDownloadsTab()
        myAccountPage.checkAddressTab()
        myAccountPage.checkAccountDetailsTab()
        myAccountPage.checkLogoutTab()
    })

})


