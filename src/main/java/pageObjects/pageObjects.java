package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class pageObjects {

	public void TestEnvironmentObjects(WebDriver driver) {

		PageFactory.initElements(driver, this);
	
	}
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'My Account']")

	private WebElement myAccount;
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'Login']")

	private WebElement login;
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'Register']")

	private WebElement register ;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'email']")

	private WebElement emailField ;
	
	@FindBy(how = How.XPATH, using = "//input[@name = 'password']")

	private WebElement passwordField ;
	
	@FindBy(how = How.XPATH, using = "//input[@type= 'submit']")

	private WebElement logingButon ;
	
	
	public void clickOnMyAccount() {
		myAccount.click();
	}
	public void clickOnLogin() {
		login.click();
	}
	public void clickOnRegister() {
		register.click();
	}
	public void clickOnEmailField() {
		emailField.click();
	}
	public void clickOnPasswordField() {
		passwordField.click();
	}
	public void clickOnLogingButon() {
		logingButon.click();
	}
}
