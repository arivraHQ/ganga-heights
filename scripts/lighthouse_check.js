const { execSync } = require('child_process');
const fs = require('fs');

console.log('Running Lighthouse CLI audit...');
try {
  // Run lighthouse and generate json
  execSync(
    'npx lighthouse http://localhost:3001 --output=json --output-path=report-final.json --chrome-flags="--headless" --preset=desktop',
    { stdio: 'inherit' }
  );

  const report = JSON.parse(fs.readFileSync('report-final.json', 'utf8'));
  console.log('\n=======================================');
  console.log('LIGHTHOUSE AUDIT SCORES (DESKTOP):');
  console.log('=======================================');
  for (const [key, category] of Object.entries(report.categories)) {
    const score = Math.round(category.score * 100);
    console.log(`${category.title}: ${score}/100`);
  }
  console.log('=======================================\n');
} catch (err) {
  console.error('Lighthouse audit execution error:', err.message);
  process.exit(1);
}
