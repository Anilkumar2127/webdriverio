class landingPage
{
    get accountbtn()
    {
        return $("//span[text()='Account']")
    }
    get loginbtn()
    {
        return $("//span[text()='Login/ Sign Up']")
    }

    async clickAccount()
    {
        await this.accountbtn.click();
        console.log("clicking on account button")
    }
    async clickSignup()
     {
        await this.loginbtn.click();
        console.log("clicked on signup or login")
     }
}   
module.exports= new landingPage()