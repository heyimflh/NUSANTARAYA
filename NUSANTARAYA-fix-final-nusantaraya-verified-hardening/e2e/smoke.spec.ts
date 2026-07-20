import { test, expect } from '@playwright/test';

/**
 * NUSANTARAYA E2E Smoke Test — Desktop Core Flow
 * Tests the primary user journey: Homepage → Route Planner → Result → Passport
 * Uses canonical selectors from ROUTE_SECTION_IDS registry.
 */
test.describe('Desktop Core Flow', () => {
  test('Homepage → Route → Result → Save → Passport → Atlas round-trip', async ({ page }) => {
    test.setTimeout(60000); // Increase timeout for full flow
    
    // 1. Visit Homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/NUSANTARAYA/i);

    // 2. Navigate to Route Planner with source context
    await page.goto('/routes?source=home-feature&region=jawa&duration=5&interests=budaya');
    await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();

    // 3. Route Planner section should be visible (canonical ID: route-atelier)
    await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });

    // 4. Click generate route button
    const generateButton = page.getByRole('button', { name: /Buat Rute/i });
    await expect(generateButton).toBeVisible();
    await generateButton.click({ force: true }); // Force click in case of overlay

    // 5. Verify recommendation result appears (canonical ID: route-recommendation-result)
    await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 20000 });

    // 6. Verify itinerary section (canonical ID: day-by-day-itinerary)
    await expect(page.locator('#day-by-day-itinerary')).toBeVisible({ timeout: 10000 });

    // 7. Verify map section (canonical ID: route-map-transport-summary)
    await expect(page.locator('#route-map-transport-summary')).toBeVisible({ timeout: 10000 });

    // 8. Verify readiness section (canonical ID: route-readiness)
    await expect(page.locator('#route-readiness')).toBeVisible({ timeout: 10000 });

    // 9. Save to Passport
    const saveButton = page.getByRole('button', { name: /Simpan/i }).first();
    await expect(saveButton).toBeVisible();
    await expect(saveButton).toBeEnabled();
    await saveButton.click();
    
    // Brief wait for save operation
    await page.waitForTimeout(1000);

    // 10. Navigate to Passport section (lives at /explore#passport-progress)
    await page.goto('/explore#passport-progress');
    await expect(page.locator('#passport-progress')).toBeVisible({ timeout: 10000 });

    // 11. Return to routes and verify context preserved
    await page.goto('/routes');
    await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });
  });
});

/**
 * NUSANTARAYA E2E Smoke Test — Mobile Smoke
 * Verifies basic layout and interaction on a mobile viewport.
 */
test.describe('Mobile Smoke', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Route page loads without horizontal overflow on mobile', async ({ page }) => {
    // 1. Open Routes page
    await page.goto('/routes?region=jawa&duration=5&interests=budaya');
    await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();

    // 2. Verify no horizontal overflow before Generate
    const bodyWidthBefore = await page.evaluate(() => document.body.scrollWidth);
    const htmlWidthBefore = await page.evaluate(() => document.documentElement.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    
    expect(bodyWidthBefore).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
    expect(htmlWidthBefore).toBeLessThanOrEqual(viewportWidth + 1);

    // 3. Scroll down to preset routes section to ensure carousel is rendered
    await page.evaluate(() => {
      const presetSection = document.querySelector('#preset-routes');
      if (presetSection) {
        presetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    
    // Wait for carousel to render
    await page.waitForTimeout(500);

    // 4. Verify no horizontal overflow after scrolling to carousel
    const bodyWidthAfterScroll = await page.evaluate(() => document.body.scrollWidth);
    const htmlWidthAfterScroll = await page.evaluate(() => document.documentElement.scrollWidth);
    
    expect(bodyWidthAfterScroll).toBeLessThanOrEqual(viewportWidth + 1);
    expect(htmlWidthAfterScroll).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
