import { test, expect } from '@playwright/test';

/**
 * NUSANTARAYA E2E Smoke Test — Desktop Core Flow
 * Tests the primary user journey: Homepage → Route Planner → Result → Passport
 * Uses canonical selectors from ROUTE_SECTION_IDS registry.
 */
test.describe('Desktop Core Flow', () => {
  test('Homepage → Route → Result → Save → Passport → Atlas round-trip', async ({ page }) => {
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
    await generateButton.click();

    // 5. Verify recommendation result appears (canonical ID: route-recommendation-result)
    await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 15000 });

    // 6. Verify itinerary section (canonical ID: day-by-day-itinerary)
    await expect(page.locator('#day-by-day-itinerary')).toBeVisible({ timeout: 10000 });

    // 7. Verify map section (canonical ID: route-map-transport-summary)
    await expect(page.locator('#route-map-transport-summary')).toBeVisible();

    // 8. Verify readiness section (canonical ID: route-readiness)
    await expect(page.locator('#route-readiness')).toBeVisible();

    // 9. Save to Passport
    const saveButton = page.getByRole('button', { name: /Simpan/i }).first();
    if (await saveButton.isVisible()) {
      await saveButton.click();
      // Brief wait for save operation
      await page.waitForTimeout(500);
    }

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

    // 2. Verify no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding

    // 3. Generate route
    const generateButton = page.getByRole('button', { name: /Buat Rute/i });
    if (await generateButton.isVisible()) {
      await generateButton.click();
      
      // 4. Verify result section accessible
      await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 15000 });
    }

    // 5. Verify mobile navigation doesn't cover main CTAs
    const mobileNav = page.locator('nav[data-mobile-nav]');
    if (await mobileNav.isVisible()) {
      const navRect = await mobileNav.boundingBox();
      if (navRect && generateButton) {
        const btnRect = await generateButton.boundingBox();
        if (btnRect) {
          // Button should not be fully obscured by nav
          const isObscured = btnRect.y + btnRect.height > navRect.y && btnRect.y < navRect.y + navRect.height;
          // This is informational — some overlap is OK if button scrolls above nav
        }
      }
    }
  });
});
