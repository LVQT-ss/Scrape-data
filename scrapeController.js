const scrapers = require('./scraper')
// điều hướng 
const scrapeController = async (browerInstance) => {
    const url = 'https://tinhocngoisao.com/collections/vga-nvidia-cu'
    try {
        let browser = await browerInstance
        //gọi hàm cạo ở file s scrape 
        let categories = scrapers.scrapeCategory(browser, url)
    } catch (e) {
        console.log("lỗi ở scrape controller" + e)
    }

}

module.exports = scrapeController