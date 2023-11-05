class baseClass
{

   async homePage()
    {
        return  await browser.url("https://www.redbus.in/");
    }
}
module.exports=new baseClass()