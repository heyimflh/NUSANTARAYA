import { test, expect } from '@playwright/test';

test('NUSANTARAYA Smoke Test: Core E2E Flow', async ({ page }) => {
  // 1. Kunjungi Homepage
  await page.goto('/');
  await expect(page).toHaveTitle(/NUSANTARAYA/i);

  // 2. Navigasi ke Nusa Route Planner dengan context (prefill)
  await page.goto('/routes?region=jawa&duration=5&interests=budaya');
  await expect(page.getByRole('heading', { name: /Rencanakan Petualanganmu/i, level: 1 })).toBeVisible();

  // 3. Langsung klik Buat Rencana (form valid otomatis dari prefill)
  await page.getByRole('button', { name: /Buat Rencana/i }).click();

  // 4. Verifikasi Hasil Muncul (Itinerary Section)
  await expect(page.locator('#itinerary')).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: /Hari ke-/i }).first()).toBeVisible();

  // 5. Verifikasi Route Map & Transport
  await expect(page.locator('#route-map')).toBeVisible();
  
  // 6. Verifikasi Readiness & Save to Passport
  await expect(page.locator('#readiness')).toBeVisible();
  const saveButton = page.getByRole('button', { name: /Simpan Rute|Save to Passport/i }).first();
  await expect(saveButton).toBeVisible();
  
  await saveButton.click();
  
  // 7. Navigasi ke Passport dan verifikasi
  await page.goto('/passport');
  await expect(page.getByRole('heading', { name: /Passport/i, level: 1 })).toBeVisible();
  // Verifikasi rute tersimpan (bisa pakai selector card atau generic text)
  await expect(page.getByText(/Hari/i).first()).toBeVisible();
});
