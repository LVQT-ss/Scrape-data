

const scrapeCategory = (browser, url) => new Promise(async (resolve, reject) => {
    try {
        let page = await browser.newPage()

        console.log('>> Mở tab mới');
        await page.goto(url)

        console.log('>> truy cậy vào ' + url);
        await page.waitForSelector('#webpage')

        console.log('>> website đã load xong ');

        const dataCategory = await page.$$eval('#navbar-menu > ul > li', els => {
            let dataCategory = els.map(el => {
                return {
                    category: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCategory

        })
        console.log(dataCategory)

        await page.close()
        console.log('tab đã đóng ')

        resolve()
    } catch (error) {
        console.log('lỗi ở scrape category' + error)
        reject(error)
    }

})
module.exports = {
    scrapeCategory
}