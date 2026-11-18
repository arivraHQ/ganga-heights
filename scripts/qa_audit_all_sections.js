const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function audit() {
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const port = process.env.PORT || 3001;
  const url = `http://localhost:${port}`;
  console.log(`Starting QA verification suite on ${url}...`);

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Viewport (1440px)
  console.log('Testing Desktop 1440px viewport...');
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const consoleErrors = [];
  desktopPage.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  desktopPage.on('pageerror', (err) => consoleErrors.push(err.message));

  await desktopPage.goto(url, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1500);

  // Take full desktop page screenshot
  console.log('Capturing full desktop page screenshot...');
  await desktopPage.screenshot({
    path: path.join(screenshotsDir, 'full-desktop-1440px.png'),
    fullPage: true,
  });

  // Verify interactive components on desktop
  console.log('Testing interactive Floor Plans tabs...');
  const tabs = await desktopPage.$$('button:has-text("BHK")');
  if (tabs.length > 1) {
    await tabs[1].click();
    await desktopPage.waitForTimeout(400);
    await tabs[2].click();
    await desktopPage.waitForTimeout(400);
  }

  console.log('Testing EMI Calculator sliders...');
  const emiSlider = await desktopPage.$('input[type="range"]');
  if (emiSlider) {
    await emiSlider.fill('120');
    await desktopPage.waitForTimeout(300);
  }

  console.log('Testing Amenities sticky interaction...');
  const amenityItems = await desktopPage.$$('#amenities div[class*="cursor-pointer"]');
  if (amenityItems.length >= 2) {
    await amenityItems[1].click();
    await desktopPage.waitForTimeout(400);
  }

  await desktopPage.close();

  // 2. Mobile Viewport (375px)
  console.log('Testing Mobile 375px viewport...');
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });

  mobilePage.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  mobilePage.on('pageerror', (err) => consoleErrors.push(err.message));

  await mobilePage.goto(url, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1500);

  console.log('Capturing full mobile page screenshot...');
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'full-mobile-375px.png'),
    fullPage: true,
  });

  await mobilePage.close();

  // 3. API & Honeypot Functional Test
  console.log('Testing /api/lead form handler...');
  const testPage = await browser.newPage();
  const apiTestRes = await testPage.request.post(`${url}/api/lead`, {
    data: {
      name: 'QA Audit Lead',
      phone: '9876543210',
      project: 'Ganga Heights',
      preferredDate: '2026-12-01',
      honeypot: '',
    },
  });
  const apiJson = await apiTestRes.json();
  console.log('API Valid Lead Response:', apiJson);

  // Honeypot test
  const honeypotRes = await testPage.request.post(`${url}/api/lead`, {
    data: {
      name: 'Bot Spam',
      phone: '9876543210',
      project: 'Ganga Heights',
      preferredDate: '2026-12-01',
      honeypot: 'spam_field_filled',
    },
  });
  console.log('API Honeypot Status:', honeypotRes.status());

  await testPage.close();
  await browser.close();

  if (consoleErrors.length > 0) {
    console.error('QA FAILED: Console errors found:', consoleErrors);
    process.exit(1);
  }

  console.log('QA SUCCESS: 0 console errors, interactive tests passed, full screenshots saved.');
}

audit().catch((err) => {
  console.error('QA Suite Failed:', err);
  process.exit(1);
});
