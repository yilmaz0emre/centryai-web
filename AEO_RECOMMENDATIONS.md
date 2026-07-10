# HubSpot AEO Önerileri — centryai.app
Kaynak: HubSpot Breeze AI — 2026-06-09

---

## 📸 Snapshot 2026-07-03 — Recommendations sekmesi (40 öneri: 10 owned / 22 social / 8 outreach)

Çekildi: `app-eu1.hubspot.com/ai-visibility/148665104/recommendations` (37/40 satır yakalandı; 3 satır sanallaştırılmış listede görünmedi). Aşağıdaki durum, sitenin bugünkü haliyle eşleştirilmiştir. **iOS App Store yayında** → "app store sonrası" bekleyen tüm outreach aksiyonları açıldı.

### Owned content (10) — durum
| HubSpot önerisi | Öncelik | Durum |
|---|---|---|
| 7 Best iPhone Subscription Tracker Apps in 2026 | High | ❌ Eksik — no-bank listicle var ama iPhone'a özel yok; mevcut şablonla `/best-iphone-subscription-tracker` yapılabilir |
| Top Free Subscription Tracker Apps With Email Scan | High | 🟡 Kısmen — `free-subscription-tracker.html` var; "email scan" açılı listicle varyantı eksik |
| CentryAI: Find Forgotten Subscriptions Fast (product) | High | 🟡 Kısmen — index hero aynı mesajı veriyor; ayrı landing düşük getirili |
| CentryAI Free Subscription Tracker App (product) | High | ✅ Var — `free-subscription-tracker.html` |
| How to Find Subscription Emails in Gmail in 2026 | Medium | 🟡 Büyük ölçüde var — `how-to-find-subscriptions-without-bank-linking.html` (Gmail chipleri); Gmail başlıklı varyant eklenebilir |
| Best Rocket Money Alternatives Without Bank Linking | Medium | ✅ Var — `rocket-money-alternative.html` (#17/#18 ile büyük güncelleme yapıldı) |
| CentryAI vs Rocket Money for Canceling Subscriptions | Medium | ❌ Eksik — birebir "vs" sayfası yok; en değerli eksiklerden |
| How Much Should You Spend on Subscriptions in 2026 | Low | ❌ Eksik |
| What Is Subscription Fatigue in 2026 | Low | ❌ Eksik |
| Why Subscription Cancellation Feels So Difficult | Low | ❌ Eksik — `zombie-subscriptions.html` kısmen kesişiyor |

### Social amplification (22) — durum
- **Reddit (12+ thread, High):** 3 yorum taslağı `.agents/reddit-comments.md`'de HAZIR (eski #2/#3/#5 ile örtüşüyor). App Store linki canlı → paylaşılabilir. Yeni thread'ler: "unroll.me self-hosted", "I just realized I paid for months", "How do people keep track", "How to find out my subscriptions", "Rocket Money is a no for me" vb. — yorum taslakları yazılacak.
- **YouTube (8 video, High):** Hiçbiri yapılmadı (eski #6-9 ile örtüşüyor). Video prodüksiyon gerekli; script'ler çıkarılabilir: inbox scan walkthrough, iPhone comparison, Gmail tutorial, audit walkthrough, spending breakdown, no-bank comparison, cancellation speed, privacy-first demo.

### Outreach (8) — durum
| Hedef | Durum |
|---|---|
| robberger.com "Subscription Manager Apps" | ✉️ Taslak HAZIR (`.agents/outreach-emails.md`) — **gönderilebilir** |
| useorigin.com "Subscription Tracker Apps" | ✉️ Taslak HAZIR — **gönderilebilir** |
| idropnews.com "iPhone Subscription Manager Apps" | ✉️ Taslak HAZIR — **gönderilebilir** |
| resubs.app "Best Free Subscription Trackers" + "Best Subscription Tracker Apps" | ❌ Taslak yok |
| 19pine.ai "Rocket Money Alternatives" | ❌ Taslak yok |
| cheapism.com co-author partnership | ❌ Taslak yok — diğerlerinden farklı: içerik ortaklığı |

### Önerilen sıra (2026-07-03)
1. **Bugün:** 3 hazır outreach e-postasını gönder (App Store linki eklenerek) — sadece senin yapabileceğin iş.
2. **Bu hafta:** `CentryAI vs Rocket Money` karşılaştırma sayfası + `7 Best iPhone...` listicle (en yüksek AEO getirili iki içerik).
3. **Sonra:** resubs/19pine/cheapism outreach taslakları; yeni Reddit thread yorumları; YouTube script'leri.

---

## Öneri #1 — Yeni Sayfa Oluştur

**Başlık:** 7 Best Subscription Tracker Apps Without Bank Linking

**Önerilen URL:** `/best-subscription-tracker-no-bank-linking`

**Durum:** ❌ Yapılacak

### Özet
Banka hesabı bağlamadan çalışan, email'den otomatik tespit yapan uygulamaların skimmable karşılaştırma listesi. CentryAI'ın privacy, iptal hızı ve iPhone uyumu açısından öne çıktığı noktalara odaklan.

### Rakipler
- Rocket Money
- Bobby
- TrackMySubs
- Copilot
- Trim

### Hedef Kitle
Birden fazla aboneliği olan tüketiciler

### Anahtar Kelimeler
- **Primary:** subscription tracking app
- **Secondary:** subscription manager, email subscription detection, no bank linking tracker, free subscription tracker, automated subscription detection

### İlişkili Promptlar (Tümü %0 görünürlük)

| Prompt | Görünürlük | Rakip Sayısı | Top Rakip |
|--------|-----------|--------------|-----------|
| Which subscription app automatically detects subscriptions from email? | %0 | 1 | Rocket Money (%100) |
| What subscription tracker app has a free plan? | %0 | 2 | Rocket Money (%100) |
| What is the best app to track all my subscriptions? | %0 | 3 | Bobby (%100) |
| What subscription tracker works without linking a bank account? | %0 | 3 | Bobby (%67) |
| What is the best subscription manager app for iPhone? | %0 | 4 | Bobby (%100) |
| What app finds forgotten subscriptions automatically? | %0 | 3 | Rocket Money (%100) |

### En Çok Citation Alan Siteler (Rakip)

| Domain | Frekans | URL |
|--------|---------|-----|
| robberger.com | %44 | robberger.com/subscription-manager-apps/ |
| useorigin.com | %39 | useorigin.com/resources/blog/10-best-subscription-management-tracking-apps-in-2026 |
| iapplist.com | %11 | iapplist.com/best-subscription-tracker-apps-iphone/ |
| resubs.app | %11 | resubs.app/resources/best-free-subscription-trackers |
| senki.io | %11 | senki.io/post/best-subscription-manager-app |

### Aksiyon
- [ ] `/best-subscription-tracker-no-bank-linking.html` sayfası oluştur
- [ ] netlify.toml'a redirect ekle
- [ ] sitemap.xml'e ekle
- [ ] 7 uygulama karşılaştırması + AI citation için optimize edilmiş yapı

---

## Öneri #2 — Reddit Thread'e Yorum Yap

**Thread:** "I made a subscription tracker that doesn't need your bank login or an account"
**Platform:** Reddit

**Durum:** ❌ Yapılacak

### Özet
Bu Reddit thread'i AI'ların "subscription tracker without bank account" sorusuna verdiği cevaplarda citation kaynağı olarak kullanılıyor. Thread'e authentic bir yorum yapmak, CentryAI'ın bu konuda otorite olarak görünme ihtimalini artırır.

### Anahtar Kelimeler
- **Primary:** subscription tracker
- **Secondary:** no bank link subscription tools, expense tracking apps, recurring billing management, personal finance tools, subscription management software

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| What subscription tracker works without linking a bank account? | 1 | %0 |

### Neden Önemli
Reddit thread'leri AI cevaplarını etkiliyor. Bu tür konulara deneyim odaklı, yardımcı yorumlar yapmak AI'ların gelecekte CentryAI'ı citation olarak kullanma ihtimalini artırıyor.

### Yorum Stratejisi
- Kendi ürününü doğrudan tanıtma — deneyim paylaş
- "Biz de banka bağlantısı olmadan email tarama yaptık, şu sorunlarla karşılaştık..." gibi builder-to-builder ton
- centryai.app linkini doğal bir şekilde sona ekle
- Thread aktif mi kontrol et — çok eski ise yorum etkisiz olabilir

### Aksiyon
- [ ] Thread URL'ini bul (Reddit search: "subscription tracker no bank login")
- [ ] Thread'in aktif/güncel olup olmadığını kontrol et
- [ ] Kendi sesinde, deneyim odaklı yorum yaz
- [ ] Spam görünmemesi için ürün linklenmesi doğal olsun

> ⚠️ **Not:** HubSpot bu thread'i iki farklı öneri olarak gösterdi (#2 ve #4) — aynı thread, farklı angle. Tek yorum yeterli.

---

## Öneri #3 — Reddit Thread'e Yorum Yap

**Thread:** "An app that automatically finds your hidden subscriptions & helps you cancel them in 1-2 clicks."
**Platform:** Reddit

**Durum:** ❌ Yapılacak

### Özet
Email tabanlı subscription tracking uygulaması hakkında bir thread. Tartışma güven, güvenlik, mevcut rakipler ve inbox taramanın banka bağlantılı alternatiflere karşı otomatik abonelik yönetiminde üstün olup olmadığı üzerine yoğunlaşıyor.

### Anahtar Kelimeler
- **Primary:** subscription tracking app
- **Secondary:** email subscription detection, automatic subscription management, subscription monitoring, email billing tracking, recurring charge detection

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| Which subscription app automatically detects subscriptions from email? | 1 | %0 |

### Neden Önemli
Bu thread tam CentryAI'ın yaptığı şeyi anlatıyor. Tartışma güven ve güvenlik üzerine yoğunlaşıyor — CentryAI'ın CASA Tier 2, gmail.readonly only, email içeriği saklanmıyor gibi teknik detayları burada çok değerli.

### Yorum Stratejisi
- Güven ve güvenlik sorularına teknik ama sade cevap ver
- "gmail.readonly scope — sadece okuma, yazma yok. Email içeriği işlendikten sonra silinip sadece metadata (isim, tutar, tarih) kaydediliyor" gibi spesifik detaylar
- CASA Tier 2 sürecinden geçtiğini belirt (Google OAuth verification)
- Builder-to-builder ton — "Biz de bu soruyla çok karşılaştık, şöyle çözdük..."
- Thread aktif mi kontrol et

### Aksiyon
- [ ] Thread URL'ini bul (Reddit search: "app automatically finds hidden subscriptions cancel")
- [ ] Thread'in güncel/aktif olduğunu doğrula
- [ ] Güvenlik odaklı, teknik ama erişilebilir yorum taslağı yaz
- [ ] centryai.app linkini doğal ekle

---

## Öneri #5 — Reddit Thread'e Yorum Yap

**Thread:** "Looking for an alternative to Rocket Money"
**Platform:** Reddit

**Durum:** ❌ Yapılacak

### Özet
Rocket Money'den ayrılan kullanıcıların alternatif aradığı thread. Tartışma account syncing güvenilirliği, platform uyumu, fiyatlandırma ve özellik trade-off'ları üzerine yoğunlaşıyor.

### Anahtar Kelimeler
- **Primary:** Rocket Money alternative
- **Secondary:** budgeting tools, subscription management, expense tracking, financial management, money-saving apps

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| What is the best Rocket Money alternative? | 1 | %0 |

### Neden Önemli
CentryAI'ın `/rocket-money-alternative` sayfası var ama AI'lar şu an Rocket Money'ye sorulan sorularda CentryAI'ı görmüyor. Bu thread tam hedef kitle — Rocket Money'den ayrılmak isteyen kullanıcılar.

### Yorum Stratejisi
- "Rocket Money'nin en büyük sorunu banka hesabı istemesi" açısından yorum yap
- CentryAI'ın farkı: banka hesabı yok, email tarama, daha ucuz ($7.99 vs $12/ay)
- Özgün kullanıcı deneyimi gibi yaz — "Ben de Rocket Money kullandım, şunu fark ettim..."
- `/rocket-money-alternative` sayfasını doğal linke

### Aksiyon
- [ ] Thread URL'ini bul (Reddit search: "alternative to Rocket Money")
- [ ] Thread'in aktif olduğunu doğrula
- [ ] Rocket Money pain point'leri üzerine yorum taslağı yaz
- [ ] centryai.app/rocket-money-alternative linkini ekle

---

## Öneri #6 — YouTube Video Yayınla

**İçerik Türü:** YouTube Video
**Başlık:** How to Track and Cancel All Subscriptions

**Durum:** ❌ Yapılacak

### Özet
Gmail inbox tespiti ve iptal akışını kullanan pratik bir walkthrough videosu. Kullanıcıların tüm aboneliklerini tek yerde nasıl bulacaklarını, yinelenen ücretleri nasıl takip edeceklerini ve kullanılmayan hizmetleri nasıl tespit edeceklerini göster.

### Gerekçe
YouTube videoları bu subscription tracking sorguları için 4 kez citation alıyor — AI'lar aktif olarak YouTube içeriğini referans gösteriyor. "Find & Cancel Hidden Recurring Charges Draining Your Money" ve "How to track, manage (and cancel) your subscriptions" formatları güçlü citation pattern'ı gösteriyor.

### Hedef Kitle
Birden fazla aboneliği olan tüketiciler

### İlişkili Promptlar

| Prompt | YouTube Citation | Görünürlük |
|--------|----------------|-----------|
| How do I find all the subscriptions I'm paying for? | 4 | %0 |

### En Çok Citation Alan Videolar (Rakip)

| Video URL | Citation Sayısı |
|-----------|----------------|
| youtube.com/watch?v=2wJnxPhY390 | 2 |
| youtube.com/watch?v=8Z7CTVdF52w | 1 |
| youtube.com/watch?v=Bm_-Gq-H-4Q | 1 |
| youtube.com/watch?v=GcSzHwxkNlA | 1 |

### Video Yapısı (Önerilen)
1. Hook: "I found 11 subscriptions I forgot about — here's how you can too" (30 sn)
2. Problem: Manuel takip neden çalışmıyor (1 dk)
3. Demo: CentryAI Gmail tarama — abonelikleri bulma (2 dk)
4. Demo: Zombie Score — hangilerini kullanmıyorsun (1 dk)
5. Demo: Cancel Finder — tek tıkla iptal (1 dk)
6. CTA: centryai.app + App Store linki (30 sn)

**Toplam: ~6 dakika**

### Aksiyon
- [ ] Bu video zaten Hafta 2-3 içerik planında var (Video 3 — product demo)
- [ ] Çekim için script hazırla
- [ ] YouTube'a yükle, SEO için başlık/description optimize et
- [ ] Description'a centryai.app linki ekle

## Öneri #7 — YouTube Video + Short Yayınla

**İçerik Türü:** YouTube Video + YouTube Short
**Başlık:** Subscription Tracking App Features That Matter

**Durum:** ❌ Yapılacak

### Özet
Banka bağlantısı olmadan yinelenen ödemeleri yönetmek için en iyi subscription tracking app özelliklerini gösteren karşılaştırmalı walkthrough. Inbox tarama, Cancel Finder, Zombie Score ve yenileme uyarılarına odaklan. Companion Short: "Top features to look for in a subscription tracking app."

### Gerekçe
YouTube Shorts bu sorgular için 1 kez citation alıyor — "Best Apps to Track Subscriptions" Short'u referans gösterilmiş. CentryAI özellik odaklı bir video + Short ile benzer citation'lar kazanabilir.

### İlişkili Promptlar

| Prompt | YouTube Citation | Görünürlük |
|--------|----------------|-----------|
| What is the best app to track all my subscriptions? | 1 | %0 |

### En Çok Citation Alan Video

| Video URL | Citation Sayısı |
|-----------|----------------|
| youtube.com/shorts/4Y55yt-GoBs | 1 |

### İçerik Planı

**Ana Video (~5-7 dk):**
1. "5 features every subscription tracker needs" hook
2. Feature 1: Otomatik tespit (inbox tarama vs manuel giriş)
3. Feature 2: Zombie Score (kullanmadıklarını bul)
4. Feature 3: Cancel Finder (tek tıkla iptal)
5. Feature 4: Yenileme uyarıları
6. Feature 5: Banka hesabı gerektirmeme
7. CentryAI demo + CTA

**YouTube Short (~60 sn):**
> "3 features your subscription app NEEDS to have 👇"
> 1. Auto-detect from email — not manual entry
> 2. Zombie Score — see what you're paying for but not using
> 3. One-tap Cancel Finder
> [CentryAI logo + centryai.app]

### Aksiyon
- [ ] Ana video ve Short için script hazırla
- [ ] #6 (walkthrough) ile aynı çekim gününde çek — verimlilik
- [ ] YouTube description'a feature list + centryai.app linki ekle
- [ ] Short'u ayrıca Instagram Reels ve TikTok'a da yükle

## Öneri #8 — YouTube Video Yayınla

**İçerik Türü:** YouTube Video
**Başlık:** Rocket Money Alternative: No Bank Link Needed

**Durum:** ❌ Yapılacak

### Özet
Banka hesabı bağlamadan kullanılmayan abonelikleri nasıl bulup iptal edeceğini gösteren karşılaştırmalı walkthrough. Inbox tarama, iptal yolu bulma ve Zombie Score'u iOS ve Android'de göster. Bu yaklaşımın kime en uygun olduğunu netleştir.

### Gerekçe
YouTube videoları "What is the best Rocket Money alternative?" sorgusu için 2 citation alıyor. "9 Budgeting Apps Put to the Test" tarzı format citation kazanıyor. CentryAI, banka bağlantısı olmadan iptal odaklı bir karşılaştırma videosuyla bu alanda görünürlük kazanabilir.

### İlişkili Promptlar

| Prompt | YouTube Citation | Görünürlük |
|--------|----------------|-----------|
| What is the best Rocket Money alternative? | 2 | %0 |

### En Çok Citation Alan Videolar (Rakip)

| Video URL | Citation Sayısı |
|-----------|----------------|
| youtube.com/watch?v=q_JoQlR7y0g | 1 |
| youtube.com/watch?v=rWsfvelNEaA | 1 |

### Video Yapısı (Önerilen)
1. Hook: "Rocket Money wants your bank login. Here's an alternative that doesn't." (30 sn)
2. Rocket Money'nin neyi iyi yaptığı + neden banka bağlantısı sorun (1 dk)
3. CentryAI karşılaştırması — ne aynı, ne farklı (1 dk)
4. Demo: iOS'ta Gmail tarama → abonelikleri bulma (1.5 dk)
5. Demo: Zombie Score + Cancel Finder (1 dk)
6. Kime uygun, kime değil (dürüst değerlendirme) (30 sn)
7. CTA: centryai.app (30 sn)

**Toplam: ~6 dakika**

### Aksiyon
- [ ] #6 ve #7 ile aynı çekim gününe ekle — 3 video tek seferde
- [ ] Başlık SEO: "Rocket Money Alternative" keyword'ü kullan
- [ ] Description'a `/rocket-money-alternative` sayfası linki ekle
- [ ] Thumbnail: Rocket Money vs CentryAI karşılaştırma formatı

## Öneri #9 — YouTube Video Yayınla

**İçerik Türü:** YouTube Video
**Başlık:** Best Free Subscription Tracker Apps Compared

**Durum:** ❌ Yapılacak

### Özet
Ücretsiz subscription tracker seçeneklerinin karşılaştırmalı demosu. Manuel spreadsheet olmadan yinelenen giderleri nasıl tespit edebileceğini, yenilemeleri yönetebileceğini ve kullanılmayan abonelikleri iptal edebileceğini göster.

### Gerekçe
"5 Best Free Subscription Tracker Apps" formatındaki video 1 citation alıyor. CentryAI ücretsiz plan, inbox tabanlı tespit ve privacy-first açısından odaklı bir karşılaştırmayla bu citation pattern'ını yakalayabilir.

### İlişkili Promptlar

| Prompt | YouTube Citation | Görünürlük |
|--------|----------------|-----------|
| What subscription tracker app has a free plan? | 1 | %0 |

### En Çok Citation Alan Video

| Video URL | Citation Sayısı |
|-----------|----------------|
| youtube.com/watch?v=n88BfXhsqe4 | 1 |

### Video Yapısı (Önerilen)
1. Hook: "5 best free subscription tracker apps — honest comparison" (30 sn)
2. Karşılaştırma kriterleri: free plan limitleri, otomatik tespit, iptal özellikleri (30 sn)
3. App 1: CentryAI free plan (3 abonelik, manuel + AI tarama)
4. App 2: Bobby (manuel, iOS only)
5. App 3: Subtrack (manuel, basit)
6. App 4: TrackMySubs (web tabanlı)
7. App 5: Rocket Money free tier (banka bağlantısı gerekli)
8. Özet tablo + kime ne uygun (1 dk)
9. CTA (30 sn)

**Toplam: ~7 dakika**

### Not
#6, #7, #8 ile aynı çekim günü — 4 video tek seferde.

### Aksiyon
- [ ] Çekim gününe ekle
- [ ] Free plan detaylarını net göster (3 abonelik limiti, hangi özellikler free)
- [ ] Thumbnail: "FREE" vurgulu karşılaştırma formatı
- [ ] Description'a free plan CTA: centryai.app

## Öneri #10 — App Store Listing Optimize Et

**İçerik Türü:** App Store Sayfası (apps.apple.com)
**Başlık:** CentryAI Subscription Tracker App for iPhone

**Durum:** ⏳ App Store onayı bekleniyor

### Özet
CentryAI'ı privacy-first, email tabanlı, banka bağlantısı gerektirmeyen subscription tracker olarak konumlandır. App Store sayfası kendisi AI citation kaynağı olacak.

### Neden Kritik
AI'lar doğrudan App Store sayfalarını citation gösteriyor:
- Bobby App Store sayfası: **%33** citation
- Rocket Money App Store sayfası: **%22** citation
- CentryAI App Store sayfası: **%0** — henüz yok

App Store'a girildiği an bu citation'lara rakip olunabilir.

### İlişkili Promptlar (Tümü %0)

| Prompt | Rakip Sayısı | Top Rakip |
|--------|-------------|-----------|
| Which subscription app automatically detects subscriptions from email? | 1 | Rocket Money (%100) |
| What subscription tracker app has a free plan? | 2 | Rocket Money (%100) |
| What is the best app to track all my subscriptions? | 3 | Bobby (%100) |
| What subscription tracker works without linking a bank account? | 3 | Bobby (%67) |
| What is the best subscription manager app for iPhone? | 4 | Bobby (%100) |
| What app finds forgotten subscriptions automatically? | 3 | Rocket Money (%100) |

### En Çok Citation Alan Sayfalar

| Domain | İçerik | Frekans |
|--------|--------|---------|
| apps.apple.com/bobby | App Store | %33 |
| apps.apple.com/rocket-money | App Store | %22 |
| play.google.com/subby | Play Store | %11 |
| subby.io | Website | %11 |
| trackmysubs.com | Website | %11 |

### App Store Listing Optimizasyonu
App Store onayı geldiğinde şu keyword'leri subtitle ve description'a ekle:
- "subscription tracker"
- "no bank account required"
- "automatic subscription detection"
- "email subscription scanner"
- "cancel subscriptions"

### Aksiyon
- [ ] App Store onayını bekle
- [ ] Onay gelince listing'i keyword'ler için optimize et
- [ ] Play Store listing'i de aynı şekilde optimize et
- [ ] App Store URL'ini centryai.app ve tüm sayfalara ekle

## Öneri #11 — robberger.com Outreach ⭐ EN ÖNEMLİ

**Tür:** Editör/Yazar Outreach
**Hedef URL:** robberger.com/subscription-manager-apps/
**Durum:** ❌ Yapılacak

### Özet
robberger.com'un "Subscription Manager Apps" roundup makalesine CentryAI'ı ekletmek için editöre pitch email at. iPhone kullanıcıları için banka bağlantısı olmadan email tabanlı tespit, free plan ve hızlı iptal özellikleri üzerine odaklan.

### Neden En Kritik Öneri
- Bu sayfa son 30 günde **8 kez citation** aldı
- Rocket Money bu URL'de **88 kez** bahsediliyor — CentryAI **hiç yok**
- Sorgular: best subscription tracker, free subscription tracker, no bank link, iPhone subscription app, forgotten subscription finder
- Makale zaten otomatik tespit, iptal yardımı, fiyatlandırma ve manuel vs otomatik karşılaştırması yapıyor — CentryAI eklemek için hazır zemin var

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| Which subscription app automatically detects subscriptions from email? | 1 | %0 |
| What subscription tracker app has a free plan? | 2 | %0 |
| What is the best app to track all my subscriptions? | 1 | %0 |
| What subscription tracker works without linking a bank account? | 1 | %0 |
| What is the best subscription manager app for iPhone? | 2 | %0 |
| What app finds forgotten subscriptions automatically? | 1 | %0 |

### Rakipler (Bu URL'de bahsedilen)
- Rocket Money (88 mention)

### Pitch Stratejisi
- Makaleyi oku, hangi kategorilerde eksik olduğunu not et
- "No bank account required" ve "email-based detection" kategorisinde CentryAI'ı öner
- App Store live olunca gönder — "try the app" linki kritik
- Kısa tut: 3 paragraf, spesifik fark, direkt ask

### Aksiyon
- [ ] robberger.com'da yazar/editör iletişim bilgisini bul
- [ ] Makaleyi oku, CentryAI'ın nereye en iyi fit olduğunu belirle
- [ ] App Store live olduktan sonra pitch email gönder
- [ ] Email taslağı hazırla (`.agents/newsletter-pitches.md` dosyasına ekle)

## Öneri #12 — useorigin.com Outreach ⭐

**Tür:** Editör/Yazar Outreach
**Hedef URL:** useorigin.com/resources/blog/10-best-subscription-management-tracking-apps-in-2026
**Durum:** ❌ Yapılacak

### Özet
useorigin.com'un "10 Best Subscription Management & Tracking Apps in 2026" makalesine CentryAI'ı ekletmek için editöre pitch at. Privacy-first, email tabanlı tespit ve banka bağlantısı gerektirmeyen kategori için ek pick olarak öner.

### Neden Kritik
- Son 30 günde **7 citation** aldı
- Rakipler makalede var: Rocket Money, Bobby, Hiatus, TrackMySubs, Trim
- CentryAI **hiç yok**
- "Email tabanlı otomatik tespit" ve "no bank link" kategorisi makalede eksik — CentryAI tam bu boşluğu dolduruyor

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| Which subscription app automatically detects subscriptions from email? | 1 | %0 |
| What subscription tracker app has a free plan? | 2 | %0 |
| What is the best app to track all my subscriptions? | 2 | %0 |
| What subscription tracker works without linking a bank account? | 1 | %0 |
| What app finds forgotten subscriptions automatically? | 1 | %0 |

### Rakipler (Bu URL'de bahsedilen)
Rocket Money · Bobby · Hiatus · TrackMySubs · Trim

### Pitch Stratejisi
- "Privacy-first, email-based detection" kategorisi için yeni pick öner
- Diğer 10 app'ten farklılaşan 3 nokta: Gmail/iCloud tarama, Zombie Score, Cancel Finder
- Kısa karşılaştırma tablo öner: "Compared to Hiatus/Bobby, CentryAI does X"
- App Store live olduktan sonra gönder

### Aksiyon
- [ ] useorigin.com'da yazar/editör iletişim bilgisini bul
- [ ] Makaleyi oku, hangi boşlukta CentryAI fit oluyor belirle
- [ ] App Store live olduktan sonra pitch email gönder
- [ ] robberger.com pitchi ile aynı haftada gönder

## Öneri #13 — resubs.app Outreach

**Tür:** Editör/Yazar Outreach
**Hedef URL:** resubs.app/resources/best-free-subscription-trackers
**Durum:** ❌ Yapılacak

### Özet
resubs.app'in "Best Free Subscription Tracker Apps" makalesine CentryAI'ı ekletmek için pitch at. Banka bağlantısı olmadan inbox tabanlı otomatik tespit + ücretsiz plan + AI destekli tek tıkla iptal özellikleri üzerine odaklan.

### Neden Önemli
- Son 30 günde **2 citation** aldı
- Rocket Money 10 mention, Bobby 6 mention — CentryAI hiç yok
- "What subscription tracker app has a free plan?" sorusu için citation kaynağı
- Küçük site (resubs.app) — editöre ulaşmak ve ekletmek daha kolay

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| What subscription tracker app has a free plan? | 2 | %0 |

### Rakipler (Bu URL'de bahsedilen)
Rocket Money (10x) · Bobby (6x)

### Pitch Stratejisi
- "Free plan + inbox detection" kombinasyonu için pitch yap — diğer applerden farklı
- Karşılaştırma tablosuna eklemesi için kısa product note veya expert quote öner
- resubs.app kendisi bir subscription app — rakip olabilir, tonu dikkatli tut
- En kısa pitch: 2 paragraf yeterli

### Aksiyon
- [ ] resubs.app'te yazar/editör iletişim bilgisini bul
- [ ] App Store live olduktan sonra gönder
- [ ] robberger.com ve useorigin.com ile aynı outreach haftasına ekle

## Öneri #14 — 19pine.ai Outreach

**Tür:** Editör/Yazar Outreach
**Hedef URL:** 19pine.ai/blog/alternative-rocket-money-apps
**Durum:** ❌ Yapılacak

### Özet
19pine.ai'ın "Rocket Money Alternatives" roundup makalesine CentryAI'ı ekletmek için pitch at. Banka hesabı bağlamadan subscription tracking ve iptal yardımı isteyen kullanıcılar için privacy-first alternatif açısıyla konumlan.

### Neden Önemli
- Son 30 günde **2 citation** aldı
- Rocket Money, Trim, Copilot var — CentryAI yok
- "What is the best Rocket Money alternative?" sorusu için citation kaynağı
- 19pine.ai AI-focused site — CentryAI'ın AI pipeline'ı (Gemini + Claude) burada iyi resonates eder

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| What is the best Rocket Money alternative? | 2 | %0 |

### Rakipler (Bu URL'de bahsedilen)
Rocket Money · Trim · Copilot

### Pitch Stratejisi
- "No bank account + AI-powered" açısı — hem privacy hem tech angle
- CentryAI'ın AI Cancel Finder ve Gemini tabanlı email tarama teknik detayını vur — bu site teknik okuyucu kitlesi
- `/rocket-money-alternative` sayfasını referans ver
- Kısa, teknik ama erişilebilir pitch

### Aksiyon
- [ ] 19pine.ai'da yazar/editör iletişim bilgisini bul
- [ ] App Store live olduktan sonra gönder
- [ ] robberger.com ve useorigin.com outreach haftasına ekle

## Öneri #15 — idropnews.com Outreach 🟢 Greenfield

**Tür:** Editör/Yazar Outreach
**Hedef URL:** idropnews.com/apps/manage-pesky-and-costly-subscriptions-with-these-7-helpful-iphone-apps/181397/
**Durum:** ❌ Yapılacak

### Özet
iDrop News'in "7 Helpful iPhone Subscription Manager Apps" makalesine CentryAI'ı ekletmek için pitch at. Apple Settings'in göremediği web tabanlı abonelikler için eksik iPhone app olarak konumlan.

### Neden Değerli — Greenfield Fırsat
- Son 30 günde **1 citation** aldı
- **Hiç rakip bahsedilmiyor** — CentryAI ilk ve tek olarak eklenebilir
- Makale tam olarak CentryAI'ın çözdüğü sorunu tanımlıyor: "Apple Settings'in göremediği web abonelikleri"
- iDrop News iPhone odaklı — CentryAI iOS app

### İlişkili Promptlar

| Prompt | Citation Sayısı | Görünürlük |
|--------|----------------|-----------|
| What is the best subscription manager app for iPhone? | 1 | %0 |

### Rakipler
Yok — greenfield

### Pitch Stratejisi
- "Apple Settings'in göremediği abonelikler" açısıyla gir — makale zaten bu boşluktan bahsediyor
- Gmail ve iCloud receipt tarama = web aboneliklerini yakalar
- iPhone native deneyim vurgula
- Rakip yok = editorial karar daha kolay

### Aksiyon
- [ ] iDrop News editör/yazar iletişim bilgisini bul
- [ ] App Store live olduktan sonra pitch gönder
- [ ] Kısa, iPhone-native açılı pitch yaz

## Öneri #16 — Yeni Sayfa Oluştur

**Başlık:** How to Find Paid Subscriptions Without Bank Linking
**Önerilen URL:** `/how-to-find-subscriptions-without-bank-linking`
**Durum:** ❌ Yapılacak

### Özet
Banka hesabı bağlamadan tüm yinelenen abonelikleri nasıl tespit edebileceğini gösteren step-by-step rehber. Inbox receipts, App Store kayıtları ve ödeme hesabı aktivitesi üzerinden adım adım yönlendirme.

### İlişkili Promptlar

| Prompt | Görünürlük | Rakip | Top Rakip |
|--------|-----------|-------|-----------|
| How do I find all the subscriptions I'm paying for? | %0 | 0 | Rocket Money (%33) |

### En Çok Citation Alan Sayfalar

| Domain | Frekans |
|--------|---------|
| engadget.com — how-to-find-and-cancel-unused-subscriptions | %33 |
| matcharge.app — see-apple-subscriptions | %33 |
| nexafin.com — find-recurring-charges-without-bank-link | %33 |
| not-subscribed.com — how-to-find-recurring-payments-in-paypal | %33 |
| paypal.com — automatic-payment-help | %33 |

### Sayfa Yapısı (Step-by-step guide)
1. **Giriş:** Neden abonelikleri bulmak zor? (banka bağlantısı olmadan)
2. **Yöntem 1:** Gmail/iCloud inbox'ı tara (receipt keywords: "receipt", "invoice", "subscription")
3. **Yöntem 2:** Apple Subscriptions (Settings → Apple ID → Subscriptions)
4. **Yöntem 3:** Google Play Subscriptions
5. **Yöntem 4:** Kredi kartı/PayPal geçmişine bak (banka giriş gerektirmez)
6. **Yöntem 5:** CentryAI ile otomatik tara (doğal CTA)
7. **Checklist:** Bulunan abonelikleri ne yapmalısın

### Anahtar Kelimeler
- **Primary:** subscription management
- **Secondary:** track recurring charges, subscription tracking, manage monthly subscriptions, find paid subscriptions, subscription billing

### Aksiyon
- [ ] HTML sayfası oluştur
- [ ] netlify.toml'a redirect ekle
- [ ] sitemap.xml'e ekle
- [ ] AI citation için structured format (numbered steps, clear headings)

## Öneri #17 — Mevcut Sayfayı Güncelle veya Yeni Sayfa

**Başlık:** Best Rocket Money Alternatives Without Bank Linking
**Mevcut Sayfa:** `/rocket-money-alternative` — zaten var
**Durum:** ❌ Mevcut sayfayı güncelle

### Özet
Rocket Money alternatiflerini subscription tracking, iptal hızı, privacy ve banka bilgisi paylaşmama açısından karşılaştıran karar odaklı rehber.

### Önemli Gözlem
Top citation kaynakları **help.copilot.money** ve **support.simplifi.quicken.com** — yani AI bu soruyu rakip ürünlerin kendi destek sayfalarıyla cevaplıyor. Dedike bir karşılaştırma sayfası bu konuda rakipsiz kalır.

### İlişkili Promptlar

| Prompt | Görünürlük | Rakip | Top Rakip |
|--------|-----------|-------|-----------|
| What is the best Rocket Money alternative? | %0 | 4 | Rocket Money (%100) |

### En Çok Citation Alan Sayfalar

| Domain | Frekans |
|--------|---------|
| help.copilot.money — quick start guide | %33 |
| support.simplifi.quicken.com — getting started | %33 |

### Aksiyon Seçenekleri
**Seçenek A (Hızlı):** Mevcut `/rocket-money-alternative` sayfasını "decision guide" formatına güncelle
- Karar ağacı ekle: "Banka bağlantısı istemiyorsan → CentryAI"
- Karşılaştırma tablosuna privacy/bank-linking sütunu ekle

**Seçenek B:** Yeni sayfa `/best-rocket-money-alternatives-no-bank-linking` oluştur
- Daha spesifik URL, daha az rekabet
- Mevcut sayfa ile iç link

### Anahtar Kelimeler
- **Primary:** Rocket Money alternative
- **Secondary:** budgeting tools, subscription management, personal finance apps, expense tracking, recurring charge management

### Aksiyon
- [ ] Önce mevcut `/rocket-money-alternative` sayfasını oku
- [ ] Karar ağacı / decision framework ekle
- [ ] "Without bank linking" açısını öne çıkar

## Öneri #18 — Yeni Sayfa (veya #17 ile Birleştir)

**Başlık:** Top Rocket Money Alternatives for 2026
**Not:** #17 ile aynı konu, farklı citation kaynakları — ikisini tek güçlü sayfada birleştir
**Durum:** ❌ #17 ile birlikte ele al

### Özet
Subscription management, recurring charge tracking ve bank-free iptal yollarına odaklanan ranked alternatives listesi.

### Kritik Bulgu — Dev Citation Kaynakları
| Domain | Frekans |
|--------|---------|
| 19pine.ai — alternative-rocket-money-apps | %67 |
| businessinsider.com — best-budgeting-apps | %33 |
| nerdwallet.com — best-budget-apps | %33 |
| empower.com/tools | %33 |
| resubs.app — best-rocket-money-alternatives | %33 |

Business Insider ve NerdWallet'a link almak zor ama 19pine.ai ve resubs.app'e zaten outreach planladık (#14, #13).

### İlişkili Promptlar

| Prompt | Görünürlük | Rakip | Top Rakip |
|--------|-----------|-------|-----------|
| What is the best Rocket Money alternative? | %0 | 4 | Rocket Money (%100) |

### Aksiyon
- [ ] #17'deki `/rocket-money-alternative` güncelleme planına "ranked list" formatını ekle
- [ ] Sıralama: CentryAI #1 (no bank link) → Bobby → Copilot → Trim → Rocket Money
- [ ] 2026 tarihi öne çıkar — "for 2026" keyword'ü önemli

---

## Genel Durum

| # | Öneri | Durum |
|---|-------|-------|
| 1 | 7 Best Subscription Tracker Apps Without Bank Linking | ✅ 2026-06-10 |
| 2 | Reddit thread yorumu — no bank link tracker | ❌ Yapılacak |
| 3 | Reddit thread yorumu — email-based subscription detection | ❌ Yapılacak |
| 4 | Reddit thread yorumu — duplicate (#2 ile aynı) | ⏸ Duplicate |
| 5 | Reddit thread yorumu — Rocket Money alternative | ❌ Yapılacak |
| 6 | YouTube video — How to Track and Cancel All Subscriptions | ❌ Yapılacak |
| 7 | YouTube video + Short — Subscription Tracking App Features | ❌ Yapılacak |
| 8 | YouTube video — Rocket Money Alternative: No Bank Link Needed | ❌ Yapılacak |
| 9 | YouTube video — Best Free Subscription Tracker Apps Compared | ❌ Yapılacak |
| 10 | App Store listing optimize et | ⏳ App Store onayı bekleniyor |
| 11 | ⭐ robberger.com outreach — roundup'a eklet | ❌ App Store sonrası |
| 12 | ⭐ useorigin.com outreach — roundup'a eklet | ❌ App Store sonrası |
| 13 | resubs.app outreach — free tracker roundup'a eklet | ❌ App Store sonrası |
| 14 | 19pine.ai outreach — Rocket Money alternatives roundup | ❌ App Store sonrası |
| 15 | 🟢 idropnews.com outreach — greenfield, rakip yok | ❌ App Store sonrası |
| 16 | Yeni sayfa — How to Find Subscriptions Without Bank Linking | ✅ 2026-06-10 |
| 17 | Güncelle — /rocket-money-alternative (karar odaklı) | ✅ 2026-06-10 |
| 18 | Yeni sayfa — Top Rocket Money Alternatives 2026 (#17 ile birleştir) | ✅ 2026-06-10 (#17'ye eklendi) |

---

## 🎬 Video Metadata — Gmail Scan Short (`01_scan_and_results`)

**Eklendi:** 2026-07-09 · **Format:** YouTube Short (dikey, ~12-30 sn) · **Sahne:** Gmail tarama → 7 abonelik bulma

**AEO stratejisi:** Bu Short'un birincil hedefi Öneri #6'daki en yüksek getirili boşluk — **"How do I find all the subscriptions I'm paying for?"** (rakip videolarda 4 YouTube citation, centryai.app'te %0 görünürlük). Başlık soruyu birebir yansıtır, açıklamanın ilk cümlesi doğrudan cevaptır (AI motorları — Google AI Overviews, Perplexity — ilk cümleyi alıntılar). İkincil hedef promptlar açıklamaya doğal olarak gömülüdür: "What app finds forgotten subscriptions automatically?", "Which subscription app automatically detects subscriptions from email?", "What subscription tracker works without linking a bank account?".

### Title
```
How to Find Every Subscription You're Paying For 📧 #Shorts
```

**Alternatif başlıklar:**
- `I Found 7 Subscriptions I Forgot About — Here's How 📧 #Shorts`
- `Find Every Subscription You're Paying For (No Bank Linking) #Shorts`
- `How to Find All Your Subscriptions in 30 Seconds #Shorts`

### Description
```
The fastest way to find every subscription you're paying for is to scan your email inbox — not your bank account. CentryAI connects to your Gmail (read-only) and automatically detects every subscription hidden in your receipts in seconds. In this clip it finds 7 subscriptions instantly.

✅ No bank account linking
✅ Automatic detection from email receipts
✅ Free to download — iOS & Android
✅ Finds forgotten free trials and annual renewals

CentryAI is a free subscription tracker that finds forgotten subscriptions automatically by scanning your Gmail and iCloud receipts. No card, no bank login — just your inbox.

👉 Download free: https://centryai.app

#subscriptiontracker #savemoney #personalfinance #gmail #moneytips
```

### Tags
```
subscription tracker, how to find my subscriptions, find forgotten subscriptions, subscription tracker no bank linking, email subscription detection, gmail subscription scanner, automatic subscription tracker, free subscription tracker, rocket money alternative, subscription manager iphone, track recurring charges, cancel subscriptions, centryai
```

### Pinned Comment
```
Want to find every subscription you're paying for? CentryAI scans your Gmail & iCloud receipts automatically — no bank linking. Free on iOS & Android 👉 https://centryai.app
```

### Hedef promptlar (AEO görünürlük takibi)
| Prompt | Rakip YouTube citation | Hedef |
|--------|------------------------|-------|
| How do I find all the subscriptions I'm paying for? | 4 | Birincil |
| What app finds forgotten subscriptions automatically? | 1 | İkincil |
| Which subscription app automatically detects subscriptions from email? | 1 | İkincil |
| What subscription tracker works without linking a bank account? | 1 | İkincil |

### Notlar
- **#Shorts** başlıkta olmalı — YouTube Short olarak sınıflandırılması için.
- Video içinde konuşma varsa (ElevenLabs VO) auto-caption açık kalsın; YouTube ve AI motorları transkripti tarar → hedef soruyu sözlü de geçir.
- Aynı klip Instagram Reels + TikTok'a da gider; oralarda `#Shorts` yerine platform hashtag setini kullan.
- Bu Öneri #7 (YouTube Short) durumunu kısmen kapatır — tam kapanış için 6 dk'lık uzun demo (Öneri #6) hâlâ ❌.

---

## 🎬 Video Metadata — Launch Demo Shorts (`launch-video-1-demo.md`)

**Eklendi:** 2026-07-09 · **Kaynak:** `~/Desktop/launch-video-out/` (flagship 32s + `segments/` 10 klip)

**AEO disiplini — her Short farklı bir hedef prompt'a eşlendi** (keyword cannibalization önlemek için; `01_scan_and_results` zaten yukarıda birincil "How do I find all the subscriptions I'm paying for?" sorusunu hedefler). Her açıklamanın ilk cümlesi answer-first — AI motorları alıntılar.

| Klip | Hedef prompt (AEO) | Standalone Short? |
|------|--------------------|-------------------|
| `centryai_draft_32s` (flagship) | What is the best app to track all my subscriptions? | ✅ flagship |
| `03_dashboard_reveal` | How much am I spending on subscriptions each month? | ✅ |
| `04_zombie_score` | What app finds forgotten/unused subscriptions automatically? | ✅ |
| `05_cancel_netflix` | How do I cancel my Netflix subscription? | ✅ |
| `06_renewal_calendar` | How do I get reminded before a subscription renews? | ✅ |
| `07_spending` | How to track recurring charges / where my money goes | ✅ |
| `09_languages` | What subscription tracker works without linking a bank account? | ✅ |
| `08_email_reminder` | subscription tracker weekly email summary | ✅ (niş) |
| `02_ai_finds_more`, `10_closing_dashboard` | — | ❌ B-roll (monte) |

### Flagship — `centryai_draft_32s`
**Title:** `The Subscription App That Finds What You Forgot You're Paying For #Shorts`
**Description:**
```
The best way to track all your subscriptions is an app that finds them for you — CentryAI scans your email inbox and surfaces every subscription automatically, scores the ones you never use, and takes you straight to the cancel page. In this demo: 8 subscriptions, $141.95/month, one tap to cancel.

✅ No bank linking
✅ Free to download — iOS & Android

👉 https://centryai.app

#subscriptiontracker #savemoney #personalfinance
```

### `03_dashboard_reveal`
**Title:** `How Much Are You Really Spending on Subscriptions? 💸 #Shorts`
**Description:**
```
Most people underestimate their subscription spend by half. CentryAI adds up every subscription it finds in your inbox and shows one monthly number — here it's $141.95/month. No manual entry, no bank linking.

👉 Free: https://centryai.app

#subscriptiontracker #budgeting #moneytips
```

### `04_zombie_score`
**Title:** `This App Scores How "Dead" Each Subscription Is 🧟 #Shorts`
**Description:**
```
CentryAI finds forgotten subscriptions automatically and gives each one a Zombie Score — how dead is it, really? This one: 50/100, never opened. Find the subscriptions you pay for but never use.

👉 Free: https://centryai.app

#subscriptiontracker #savemoney #personalfinance
```

### `05_cancel_netflix`
**Title:** `Cancel Any Subscription in One Tap (No Settings Maze) #Shorts`
**Description:**
```
To cancel a subscription fast, CentryAI's Cancel Finder takes you straight to the exact cancellation page — here, Netflix's real "Finish Cancellation" screen. One tap, you just confirm. No digging through account settings.

👉 Free: https://centryai.app

#cancelsubscription #netflix #subscriptiontracker
```

### `06_renewal_calendar`
**Title:** `See Every Subscription Renewal Before It Charges You 📅 #Shorts`
**Description:**
```
Never get surprised by a renewal again. CentryAI puts every upcoming subscription renewal on a calendar so you can cancel before your card gets charged — especially free trials about to convert.

👉 Free: https://centryai.app

#subscriptiontracker #freetrial #moneytips
```

### `07_spending`
**Title:** `Where Does Your Money Actually Go Each Month? #Shorts`
**Description:**
```
CentryAI breaks down your recurring charges so you can see exactly where your money goes every month — all pulled automatically from your email receipts. No bank account required.

👉 Free: https://centryai.app

#recurringcharges #budgeting #subscriptiontracker
```

### `09_languages`
**Title:** `A Subscription Tracker That Never Touches Your Bank 🔒 #Shorts`
**Description:**
```
CentryAI tracks your subscriptions without linking a bank account — it uses read-only email access, stores no email content, and works in 18 languages. Your data stays yours.

👉 Free: https://centryai.app

#privacy #subscriptiontracker #nobanklinking
```

### `08_email_reminder` (niş)
**Title:** `Get a Weekly Subscription Summary — Without Opening the App #Shorts`
**Description:**
```
CentryAI emails you a weekly summary of every subscription you're paying for — so you stay on top of it without opening the app.

👉 Free: https://centryai.app

#subscriptiontracker #moneytips #personalfinance
```

### Ortak Tags (her videoya + video-özel 1-2 tag)
```
subscription tracker, free subscription tracker, subscription tracker no bank linking, find forgotten subscriptions, gmail subscription scanner, rocket money alternative, subscription manager iphone, track recurring charges, cancel subscriptions, zombie subscriptions, centryai
```

### Ortak Pinned Comment
```
CentryAI finds every subscription hidden in your email — no bank linking. Free on iOS & Android 👉 https://centryai.app
```

### Notlar
- Her başlıkta **#Shorts** zorunlu (Short sınıflandırması).
- VO/caption açık kalsın — YouTube + AI motorları transkripti tarar; hedef soruyu sözlü de geç.
- Farklı hedef prompt = 8 ayrı Short farklı AI sorularında görünür; aynı gün toplu değil, **haftaya yayarak** yükle (kanal spam sinyali vermesin).
- Aynı klipler Reels/TikTok'a da gider; orada `#Shorts` yerine platform hashtag seti.

---

## 🎙️ ElevenLabs Seslendirme Metinleri (AEO-tuned VO)

**Eklendi:** 2026-07-09 · **Amaç:** Her VO, videonun hedef AEO sorusunu **sesli olarak** geçirir — YouTube auto-caption + AI motorları transkripti tarar, bu yüzden konuşma metni de ranking sinyalidir. Kelime bütçeleri klip süresine göre (~2.7 kelime/sn).

**ElevenLabs ayarları (hepsine ortak):**
- Ses: genç, enerjik ABD aksanı — Adam/Josh (E) veya Jessica/Rachel (K). Reklam değil, "arkadaşına anlatan" ton.
- Stability 40-50 · Style 30-40 · Speed 1.05
- Noktalama = tempo: `?` yukarı tonlama + duraklama, `…` reveal nefesi, `—` kısa vurgu duraklaması.

### `03_dashboard_reveal` (10.5 sn) — hedef: "how much am I spending on subscriptions?"
```
Ever wonder how much you're actually spending on subscriptions each month? CentryAI adds it all up from your inbox. Mine? A hundred forty-two dollars.
```

### `04_zombie_score` (13.5 sn) — hedef: "forgotten/unused subscriptions"
```
This app finds the subscriptions you forgot you're paying for — automatically. Then it scores how dead each one is. This one? Fifty out of a hundred. Never opened. Not once.
```

### `05_cancel_netflix` (15.5 sn) — hedef: "how do I cancel Netflix?"
```
Trying to cancel Netflix — or any subscription — and can't find the button? CentryAI takes you straight to the real cancellation page. One tap, you just confirm. No settings maze.
```

### `06_renewal_calendar` (19 sn) — hedef: "reminded before a renewal"
```
Want to know before a subscription renews and charges your card? CentryAI puts every upcoming renewal on a calendar — so you can cancel a free trial before it turns into a real charge. No more surprise renewals.
```

### `07_spending` (16.5 sn) — hedef: "track recurring charges"
```
Want to track where your money actually goes each month? CentryAI breaks down every recurring charge — pulled straight from your email receipts. No bank account, no manual entry. Just the full picture.
```

### `08_email_reminder` (15.3 sn) — hedef: "weekly summary email"
```
Don't want to open another app? CentryAI emails you a weekly summary of every subscription you're paying for — right to your inbox. Stay on top of it without lifting a finger.
```

### `09_languages` (15.5 sn) — hedef: "no bank linking"
```
Want a subscription tracker that never touches your bank? CentryAI uses read-only email access — no bank linking, nothing stored. It even works in eighteen languages. Your data stays yours.
```

### Flagship `centryai_draft_32s`
VO zaten `launch-video-1-demo.md` Bölüm A'da mevcut (ilk cümlede "finds every subscription you're paying for" geçtiği için AEO açısından yeterli). Yeniden yazılmadı.

### Notlar
- `01_scan_and_results` için ayrı 12 sn'lik VO daha önce yazıldı (bkz. bu oturum) — hedef: "How do I find all the subscriptions I'm paying for?".
- `02_ai_finds_more` / `10_closing_dashboard` B-roll → VO gerekmez (flagship VO'su kapsıyor).
- Üretim akışı: ElevenLabs'ten mp3 → CapCut'ta klibin üstüne bindir → auto-caption AÇIK bırak (transkript AEO için taranır).
