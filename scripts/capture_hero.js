const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function capture() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const port = process.env.PORT || 3001;
  const url = `http://localhost:${port}`;
  console.log(`Launching browser on ${url}...`);
  const browser = await chromium.launch({
    headless: true,
  });

  // Desktop 1440px viewport & full-page
  console.log('Capturing Desktop 1440px...');
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await desktopPage.goto(url, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000); // Allow motion animations to settle
  await desktopPage.screenshot({
    path: path.join(screenshotsDir, 'hero-1440px-viewport.png'),
    fullPage: false,
  });
  await desktopPage.screenshot({
    path: path.join(screenshotsDir, 'hero-1440px-full.png'),
    fullPage: true,
  });
  await desktopPage.close();

  // Mobile 375px viewport & full-page
  console.log('Capturing Mobile 375px...');
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });
  await mobilePage.goto(url, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'hero-375px-viewport.png'),
    fullPage: false,
  });
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'hero-375px-full.png'),
    fullPage: true,
  });
  await mobilePage.close();

  await browser.close();
  console.log('Screenshots saved to /screenshots directory.');
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
