import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

// Only retry the ones that failed
const projects = [
    { name: 'nealife', url: 'https://nealife.in/', filename: 'nealife.png' },
    { name: 'pal_property', url: 'https://www.palrealtyventures.com/home', filename: 'pal_property.png' },
    { name: 'edict', url: 'https://edictapp.com/', filename: 'edict_app.png' },
    { name: 'paintlib', url: 'https://paintlib.in/', filename: 'paintlib.png' },
    { name: 'vrukshathon', url: 'https://www.vrukshathon.com/', filename: 'vrukshathon.png' },
    { name: 'btb', url: 'https://btb-eight.vercel.app/', filename: 'btb.png' },
];

async function captureScreenshots() {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--dns-prefetch-disable',
        ],
    });

    for (const project of projects) {
        try {
            console.log(`📸 Capturing: ${project.name} (${project.url})`);
            const page = await browser.newPage();
            await page.setViewport({ width: 1280, height: 720 });

            // Use domcontentloaded which is less strict than networkidle2
            await page.goto(project.url, {
                waitUntil: 'domcontentloaded',
                timeout: 45000
            });

            // Wait for page rendering
            await new Promise(r => setTimeout(r, 5000));

            const filepath = path.join(assetsDir, project.filename);
            await page.screenshot({
                path: filepath,
                type: 'png',
                clip: { x: 0, y: 0, width: 1280, height: 720 }
            });

            console.log(`  ✅ Saved: ${filepath}`);
            await page.close();
        } catch (err) {
            console.error(`  ❌ Failed for ${project.name}: ${err.message}`);
        }
    }

    await browser.close();
    console.log('\n🎉 Done!');
}

captureScreenshots();
