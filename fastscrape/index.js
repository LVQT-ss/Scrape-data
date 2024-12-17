import puppeteer from "puppeteer";

const url = "https://tinhocngoisao.com/collections/vga-nvidia-cu";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const products = await page.evaluate(() => {
        const productElements = document.querySelectorAll('.itemLoop');

        return Array.from(productElements).map((product) => {
            // Extract image
            const imgElement = product.querySelector('picture img');
            const imgSrc = imgElement ? imgElement.src : null;

            // Extract title
            const titleElement = product.querySelector('.pdLoopName a');
            const title = titleElement ? titleElement.textContent.trim() : null;

            // Extract price
            const priceElement = product.querySelector('.pdPrice span');
            const price = priceElement ? priceElement.textContent.trim() : null;

            return {
                imgSrc,
                title,
                price
            };
        });
    });

    console.log(products);

    await browser.close();
    console.log(`Total Products Scraped: ${products.length}`);

};

main().catch(console.error);