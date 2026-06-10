# SEO İyileştirme Planı — centryai.app
Kaynak: HubSpot SEO Audit — 2026-06-09 (42 öneri) + 2026-06-10 (39 öneri)

---

## 🔴 Öncelik 1 — YÜKSEK ETKİ (Performans)

### ✅ 1. Görselleri WebP'ye dönüştür ve sıkıştır
**Etki:** LCP 16,506ms → hedef <2,500ms
**Zorluk:** Orta

Optimize edilecek dosyalar (`uploads/`):
| Dosya | Mevcut | Tasarruf |
|-------|--------|---------|
| phone-light-netflix.png | 976KB | ~898KB |
| phone-dark-dashboard.png | 937KB | ~839KB |
| phone-dark-netflix.png | ~940KB | ~860KB |
| phone-dark-aicancelfinder.png | 612KB | ~550KB |
| phone-dark-googlesearch.png | 608KB | ~545KB |
| phone-dark-list.png | 537KB | ~480KB |
| phone-dark-calendar.png | 531KB | ~478KB |
| phone-dark-aiscanner.png | 416KB | ~374KB |

**Yapılacak:**
- `cwebp` veya `squoosh-cli` ile tüm PNG'leri WebP'ye çevir
- HTML'deki `<img src="...png">` → `<picture>` + WebP + PNG fallback
- Ya da direkt `.webp` kullan (tüm modern browserlar destekliyor)

**Komut (toplu dönüşüm):**
```bash
cd website/uploads
for f in *.png; do cwebp -q 80 "$f" -o "${f%.png}.webp"; done
```

---

### ✅ 2. main.mp4 sıkıştır
**Etki:** Ana sayfa ağ yükü azaldı
**Tamamlandı:** 2026-06-09

`assets/main-original.mp4` (11MB) → `assets/main.mp4` (1.0MB, ffmpeg libx265 ile). `preload="none"` zaten vardı.

---

### ✅ 3a. React production builds — index.html, support.html, feedback.html
**Etki:** ~1.35MB blocking JS → ~180KB (~7x küçülme); LCP için ana bottleneck giderildi
**Tamamlandı:** 2026-06-10

`react.development.js` + `react-dom.development.js` → `react.production.min.js` + `react-dom.production.min.js` (3 sayfada).

### ✅ 3b. LCP preload + fetchPriority
**Etki:** Browser LCP görselini JS'den önce fetch ediyor
**Tamamlandı:** 2026-06-10

- `<link rel="preload" as="image" href="uploads/phone-dark-netflix.webp" fetchpriority="high"/>` `<head>`'e eklendi
- LCP img'e `fetchPriority="high"` eklendi
- Hero yan görsel + service icon'lara `loading="lazy"` eklendi

### ✅ 3c. babel.min.js CDN'den kaldır (support + feedback)
**Etki:** support.html + feedback.html'den Babel CDN kaldırıldı
**Tamamlandı:** 2026-06-10

`support.html`, `feedback.html` → JSX, `@babel/core` + `@babel/preset-react` ile önceden derlendi; Babel CDN kaldırıldı.

**index.html — geri alındı:** `index.html` birden fazla `<script type="text/babel">` bloğu içerdiğinden derleme bozuk çıktı (2053 → 4432 satır). Reverted, Babel CDN korunuyor. Kalıcı çözüm için Vite/esbuild build pipeline gerekiyor.

---

## 🟡 Öncelik 2 — ORTA ETKİ (Crawling & SEO)

### ✅ 4. Ghost URL'leri 404'e düşür (8 boş sayfa)
**Etki:** Google crawl bütçesi korunur, index kirliliği önlenir
**Zorluk:** Düşük

Google'ın içeriksiz saydığı URL'ler:
```
/support/feedback
/terms/privacy
/privacy/support
/privacy/terms
/support/terms
/privacy/privacy
/support/privacy
/terms/terms
```
Bu URL'ler SPA router'ın ürettiği anlamsız kombinasyonlar.

**Çözüm — `netlify.toml`'a redirect ekle:**
```toml
[[redirects]]
  from = "/support/feedback"
  to = "/404"
  status = 404

[[redirects]]
  from = "/terms/privacy"
  to = "/404"
  status = 404

[[redirects]]
  from = "/privacy/support"
  to = "/404"
  status = 404

[[redirects]]
  from = "/privacy/terms"
  to = "/404"
  status = 404

[[redirects]]
  from = "/support/terms"
  to = "/404"
  status = 404

[[redirects]]
  from = "/privacy/privacy"
  to = "/404"
  status = 404

[[redirects]]
  from = "/support/privacy"
  to = "/404"
  status = 404

[[redirects]]
  from = "/terms/terms"
  to = "/404"
  status = 404
```

---

### ✅ 5. Eksik alt text ekle
**Etki:** On-page SEO + erişilebilirlik
**Zorluk:** Düşük

`index.html` → `phone-light-netflix.png` img tag'inde `alt=""` boş.

**Düzeltme:** `alt="CentryAI app — Netflix subscription light mode"` ekle

---

### ✅/❌ 6. /terms ve /privacy meta description ekle
**Etki:** Arama sonuçlarında snippet görünümü
**Zorluk:** Düşük

`terms.html` ve `privacy.html` head bölümüne ekle:

```html
<!-- terms.html -->
<meta name="description" content="CentryAI Terms of Use — read our terms of service for the CentryAI subscription tracker app.">

<!-- privacy.html -->
<meta name="description" content="CentryAI Privacy Policy — how we handle your data in the CentryAI subscription tracking app.">
```

---

## 🟢 Öncelik 3 — DÜŞÜK ETKİ (Metin düzeltmeleri)

### ✅ 7. Meta description uzunluklarını kısalt (max 155 karakter)
**Tamamlandı:** 2026-06-10 — HubSpot 2026-06-10 audit (39 öneri)

| Sayfa | Mevcut uzunluk | Hedef |
|-------|---------------|-------|
| /rocket-money-alternative | 189 karakter | ≤155 |
| /zombie-subscriptions | 183 karakter | ≤155 |
| /tr/en-iyi-abonelik-takip-uygulamasi | 167 karakter | ≤155 |
| /how-to-cancel-subscriptions | uzun | ≤155 |
| /best-subscription-tracker | uzun | ≤155 |

---

### ✅ 8. Title uzunluklarını kısalt (max 70 karakter)
**Tamamlandı:** 2026-06-10

| Sayfa | Eski | Yeni |
|-------|------|------|
| /bobby-alternative | 72 chr → "Best Bobby App Alternatives in 2026 — With Automatic Detection & Android" | "Best Bobby App Alternatives in 2026 — Auto-Detect & Android" (60 chr) |
| /how-to-find-subscriptions-without-bank-linking | 72 chr | "How to Find All Your Subscriptions Without Linking Your Bank (2026)" (67 chr) |

---

### ✅ 9. Mobil tap target büyüt
**Sayfa:** `/support`
**Tamamlandı:** 2026-06-10

`mailto:support@centryai.app` + `feedback` linkleri → `display: inline-block; padding: 12px 0; min-height: 44px`

---

## Özet Tablo

| # | Görev | Öncelik | Zorluk | Durum |
|---|-------|---------|--------|-------|
| 1 | Görselleri WebP'ye dönüştür | 🔴 Yüksek | Orta | ✅ 2026-06-09 |
| 2 | main.mp4 sıkıştır/lazy-load | 🔴 Yüksek | Orta | ✅ 11MB→1MB 2026-06-09 |
| 3a | React production builds | 🔴 Yüksek | Düşük | ✅ 2026-06-10 |
| 3b | LCP preload + fetchPriority | 🔴 Yüksek | Düşük | ✅ 2026-06-10 |
| 3c | babel.min.js CDN'den kaldır | 🔴 Yüksek | Yüksek | ✅ support+feedback / ⚠️ index.html (Vite gerekiyor) |
| 4 | Ghost URL'leri 404'e düşür | 🟡 Orta | Düşük | ✅ netlify.toml |
| 5 | Eksik alt text ekle | 🟡 Orta | Düşük | ✅ index.html |
| 6 | /terms + /privacy meta desc | 🟡 Orta | Düşük | ✅ terms.html + privacy.html |
| 7 | Meta desc kısalt (10 sayfa) | 🟢 Düşük | Düşük | ✅ 2026-06-10 |
| 8 | Title kısalt (2 sayfa) | 🟢 Düşük | Düşük | ✅ 2026-06-10 |
| 9 | Mobil tap target büyüt | 🟢 Düşük | Düşük | ✅ 2026-06-10 |
