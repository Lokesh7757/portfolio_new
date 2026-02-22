const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
    { name: 'nealife', url: 'https://nealife.in/', file: 'carrent.png' },
    { name: 'paintlib', url: 'https://paintlib.in/', file: 'tripguide.png' },
    { name: 'btb', url: 'https://btb-eight.vercel.app/', file: 'ishka.png' },
    { name: 'networking', url: 'https://networking-site.netlify.app/', file: 'jobit.png' },
    { name: 'avtech', url: 'https://www.avtechsolutions.co.in/', file: 'diya.png' },
    { name: 'serene', url: 'https://serenebuildcon.com/', file: 'tripguide2.png' },
    { name: 'pal', url: 'https://www.palrealtyventures.com/home', file: 'pal.png' },
    { name: 'vrukshathon', url: 'https://www.vrukshathon.com/', file: 'vrukshthon.png' },
];

const assetsDir = path.join(__dirname, '..', 'src', 'assets');

async function captureScreenshots() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
    });

    for (const project of projects) {
        const outputPath = path.join(assetsDir, project.file);
        console.log(`\nCapturing: ${project.name} -> ${project.url}`);

        try {
            const page = await browser.newPage();
            await page.setViewport({ width: 1280, height: 800 });

            // Set a timeout for navigation
            await page.goto(project.url, {
                waitUntil: 'networkidle2',
                timeout: 30000,
            });

            // Wait a bit for any animations
            await new Promise(resolve => setTimeout(resolve, 2000));

            await page.screenshot({
                path: outputPath,
                type: 'png',
                clip: { x: 0, y: 0, width: 1280, height: 800 },
            });

            console.log(`  ✅ Saved to: ${outputPath}`);
            await page.close();
        } catch (err) {
            console.error(`  ❌ Failed for ${project.name}: ${err.message}`);
        }
    }

    await browser.close();
    console.log('\n✅ Screenshot capture complete!');
}

captureScreenshots().catch(console.error);
