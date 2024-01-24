const puppeteer = require('puppeteer')

const startBrowser = async () => {
    let browser
    try {
        browser = await puppeteer.launch({
            // có hiện ui của website đào không , false là có true là không mở 
            headless: true,
            // chorme sử dụng multiple layers của sandbox để tránh nội dung của trang web không đánh tin cậy,
            // tin tưởng nội dung thì set như này 
            args: ["--disable-setuid-sandbox"],
            //truy cập website bỏ qua lỗi liên quan http secure
            'ignoreHTTPSErrors': true
        })

        return browser
    } catch (error) {
        console.log('không tạo được browser' + error)
    }
}
module.exports = startBrowser