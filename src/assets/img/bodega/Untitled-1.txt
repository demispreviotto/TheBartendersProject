
const puppeteer = require('puppeteer');
const fs = require('fs');

async function downloadImages() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://tienda.mercadona.es/categories/181');

    const imageUrls = await page.evaluate(() => {
        const imageWrappers = document.querySelectorAll('.product-cell__image-wrapper');
        const urls = [];
        for (const wrapper of imageWrappers) {
            const img = wrapper.querySelector('img');
            urls.push(img.src);
        }
        return urls;
    });

    for (const [i, url] of imageUrls.entries()) {
        const response = await page.goto(url);
        const buffer = await response.buffer();
        fs.writeFileSync(`image-${i}.jpg`, buffer);
    }

    await browser.close();
}

downloadImages();



