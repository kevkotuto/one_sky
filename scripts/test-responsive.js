#!/usr/bin/env node

/**
 * Script de test de responsivité - ONE SKY
 *
 * Teste automatiquement les breakpoints et génère un rapport
 * Usage: node scripts/test-responsive.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configurations d'appareils à tester
const DEVICES = [
  {
    name: 'iPhone SE',
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
    isMobile: true,
    category: 'mobile',
  },
  {
    name: 'iPhone 14 Pro',
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    category: 'mobile',
  },
  {
    name: 'iPhone 15 Pro Max',
    width: 430,
    height: 932,
    deviceScaleFactor: 3,
    isMobile: true,
    category: 'mobile',
  },
  {
    name: 'Samsung Galaxy S24',
    width: 540,
    height: 960,
    deviceScaleFactor: 2.5,
    isMobile: true,
    category: 'mobile',
  },
  {
    name: 'iPad',
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    isMobile: true,
    category: 'tablet',
  },
  {
    name: 'iPad Pro 11"',
    width: 834,
    height: 1194,
    deviceScaleFactor: 2,
    isMobile: true,
    category: 'tablet',
  },
  {
    name: 'Galaxy Z Fold 6 (Fermé)',
    width: 534,
    height: 2208,
    deviceScaleFactor: 2.5,
    isMobile: true,
    category: 'foldable-closed',
  },
  {
    name: 'Galaxy Z Fold 6 (Ouvert)',
    width: 1768,
    height: 2208,
    deviceScaleFactor: 2.5,
    isMobile: false,
    category: 'foldable-open',
  },
  {
    name: 'Galaxy Z Flip 6 (Fermé)',
    width: 410,
    height: 1440,
    deviceScaleFactor: 2.5,
    isMobile: true,
    category: 'foldable-closed',
  },
  {
    name: 'Galaxy Z Flip 6 (Ouvert)',
    width: 1080,
    height: 2640,
    deviceScaleFactor: 2.5,
    isMobile: false,
    category: 'foldable-open',
  },
  {
    name: 'Laptop 13"',
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    isMobile: false,
    category: 'desktop',
  },
  {
    name: 'Desktop 1080p',
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    isMobile: false,
    category: 'desktop',
  },
  {
    name: 'Desktop 1440p',
    width: 2560,
    height: 1440,
    deviceScaleFactor: 1,
    isMobile: false,
    category: 'desktop',
  },
];

// Pages à tester
const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/datasat', name: 'DataSAT' },
  { path: '/solutions', name: 'Solutions' },
  { path: '/technologie', name: 'Technologie' },
  { path: '/contact', name: 'Contact' },
];

// Tests à effectuer
const TESTS = {
  noHorizontalScroll: {
    name: 'Pas de défilement horizontal',
    check: async (page) => {
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      return scrollWidth <= clientWidth;
    },
  },
  navigationVisible: {
    name: 'Navigation visible',
    check: async (page) => {
      const nav = await page.$('nav, header');
      return nav !== null;
    },
  },
  noOverflowingElements: {
    name: 'Pas d\'éléments dépassant',
    check: async (page) => {
      const overflowing = await page.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const viewportWidth = window.innerWidth;
        let hasOverflow = false;

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.right > viewportWidth + 5) {
            // +5px de marge d'erreur
            hasOverflow = true;
          }
        });

        return !hasOverflow;
      });
      return overflowing;
    },
  },
  imagesLoaded: {
    name: 'Images chargées',
    check: async (page) => {
      const allImagesLoaded = await page.evaluate(() => {
        const images = Array.from(document.images);
        return images.every((img) => img.complete && img.naturalHeight !== 0);
      });
      return allImagesLoaded;
    },
  },
  foldableDetection: {
    name: 'Détection foldable (si applicable)',
    check: async (page, device) => {
      if (!device.category.includes('foldable')) return true;

      const hasFoldableAttr = await page.evaluate(() => {
        const containers = document.querySelectorAll('[data-foldable]');
        return containers.length > 0;
      });

      return hasFoldableAttr;
    },
  },
};

// Couleurs console
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

// Fonction principale
async function runTests() {
  console.log(`${colors.blue}╔════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.blue}║   Test de Responsivité - ONE SKY          ║${colors.reset}`);
  console.log(`${colors.blue}╚════════════════════════════════════════════╝${colors.reset}\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const results = [];
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

  console.log(`${colors.yellow}Base URL: ${baseUrl}${colors.reset}\n`);

  let totalTests = 0;
  let passedTests = 0;

  for (const page of PAGES) {
    console.log(`${colors.magenta}━━━ Page: ${page.name} (${page.path}) ━━━${colors.reset}\n`);

    for (const device of DEVICES) {
      const deviceResults = {
        page: page.name,
        device: device.name,
        category: device.category,
        tests: {},
      };

      const browserPage = await browser.newPage();

      // Configurer le viewport
      await browserPage.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: device.deviceScaleFactor,
        isMobile: device.isMobile,
      });

      // Naviguer vers la page
      try {
        await browserPage.goto(`${baseUrl}${page.path}`, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Attendre un peu pour les animations
        await browserPage.waitForTimeout(1000);

        // Exécuter les tests
        for (const [testKey, test] of Object.entries(TESTS)) {
          totalTests++;
          const passed = await test.check(browserPage, device);
          deviceResults.tests[testKey] = {
            name: test.name,
            passed,
          };

          if (passed) passedTests++;
        }

        // Prendre un screenshot si test échoue
        const hasFailures = Object.values(deviceResults.tests).some((t) => !t.passed);
        if (hasFailures) {
          const screenshotDir = path.join(__dirname, '../screenshots');
          if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
          }

          const screenshotPath = path.join(
            screenshotDir,
            `${page.name}-${device.name.replace(/\s+/g, '-')}.png`
          );
          await browserPage.screenshot({ path: screenshotPath, fullPage: true });
        }
      } catch (error) {
        console.error(`${colors.red}Erreur sur ${device.name}: ${error.message}${colors.reset}`);
        deviceResults.error = error.message;
      }

      await browserPage.close();

      // Afficher les résultats du device
      const allPassed = Object.values(deviceResults.tests).every((t) => t.passed);
      const icon = allPassed ? '✓' : '✗';
      const color = allPassed ? colors.green : colors.red;

      console.log(
        `${color}${icon} ${device.name} (${device.width}x${device.height})${colors.reset}`
      );

      // Afficher les tests échoués
      const failedTests = Object.values(deviceResults.tests).filter((t) => !t.passed);
      if (failedTests.length > 0) {
        failedTests.forEach((test) => {
          console.log(`  ${colors.red}✗ ${test.name}${colors.reset}`);
        });
      }

      results.push(deviceResults);
    }

    console.log('');
  }

  await browser.close();

  // Générer le rapport
  generateReport(results, totalTests, passedTests);
}

function generateReport(results, totalTests, passedTests) {
  const reportDir = path.join(__dirname, '../test-reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.join(reportDir, `responsive-test-${timestamp}.json`);

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: totalTests - passedTests,
      successRate: ((passedTests / totalTests) * 100).toFixed(2) + '%',
    },
    results,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Afficher le résumé
  console.log(`${colors.blue}╔════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.blue}║              RÉSUMÉ DES TESTS              ║${colors.reset}`);
  console.log(`${colors.blue}╚════════════════════════════════════════════╝${colors.reset}\n`);

  const successColor = passedTests === totalTests ? colors.green : colors.yellow;
  console.log(`Total tests: ${totalTests}`);
  console.log(`${colors.green}Réussis: ${passedTests}${colors.reset}`);
  console.log(`${colors.red}Échoués: ${totalTests - passedTests}${colors.reset}`);
  console.log(`${successColor}Taux de réussite: ${report.summary.successRate}${colors.reset}\n`);

  console.log(`Rapport sauvegardé: ${reportPath}\n`);

  // Grouper par catégorie
  const byCategory = results.reduce((acc, result) => {
    if (!acc[result.category]) acc[result.category] = [];
    acc[result.category].push(result);
    return acc;
  }, {});

  console.log(`${colors.magenta}Par catégorie d'appareil:${colors.reset}\n`);

  for (const [category, items] of Object.entries(byCategory)) {
    const categoryPassed = items.filter((item) =>
      Object.values(item.tests).every((t) => t.passed)
    ).length;
    const categoryTotal = items.length;
    const categoryIcon = categoryPassed === categoryTotal ? '✓' : '⚠';
    const categoryColor = categoryPassed === categoryTotal ? colors.green : colors.yellow;

    console.log(
      `${categoryColor}${categoryIcon} ${category}: ${categoryPassed}/${categoryTotal} OK${colors.reset}`
    );
  }

  console.log('');
}

// Exécuter les tests
runTests().catch((error) => {
  console.error(`${colors.red}Erreur fatale: ${error.message}${colors.reset}`);
  process.exit(1);
});
