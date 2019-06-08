package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class TestEnvironmentPage extends ConfigFileReader {
	
	//1. Extend the base classs 
	//2. create a constructor for this class 
	
	public TestEnvironmentPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.XPATH , using ="//span[text() = 'My Account']")
    private WebElement myAccount;
	
	@FindBy (how = How.XPATH , using ="//a[text() = 'Register']")
    private WebElement register;
	
	@FindBy (how = How.XPATH , using ="//a[text() = 'Login']")
    private WebElement login;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'email']")

	private WebElement emailField;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'password']")

	private WebElement passwordField ;
	
	@FindBy(how = How.XPATH, using = "//input[@type= 'submit']")

	private WebElement loginButon ;
	
	
	public void clickonmyAccount() {
		myAccount.click();
	}
	
	public void clickonregister() {
		register.click();
	}
	
	public void clickonlogin() {
		login.click();
	}
	
	public String getPageURl() {
		String actualURl = driver.getCurrentUrl(); 
		return actualURl; 
		
		// we use Junit assertions to pass or fail the verification 
		
	}
	
	public String getPageTitle() {
		String actualPageTitle = driver.getTitle(); 
		return actualPageTitle; 
	}
	
	public void enterEmail(String emailAddress) {
		emailField.sendKeys(emailAddress);
	}
	
	
	/**
	 * This method sends password to password field
	 */
	
	public void enterPassword(String passwordData) {
		passwordField.sendKeys(passwordData);
	}
	
	public void clickOnLoginButton() {
		loginButon.click();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
