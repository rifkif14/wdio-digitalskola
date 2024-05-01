describe('Sample Test', () => {
    it('Test Case 1 - User Success Login and add item to chart', async () => {
        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        await username.setValue('standard_user')
        
        const password = await browser.$('#password')
        await password.setValue('secret_sauce')

        const loginButton = await browser.$('#login-button')
        await loginButton.click()

        await browser.pause(10000)

        const elem = await $('#add-to-cart-sauce-labs-fleece-jacket')
        await elem.waitForDisplayed({timeout: 100000})

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})