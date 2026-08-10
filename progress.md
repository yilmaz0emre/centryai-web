
## Session (2026-08-10, devam) — Firebase teşhisi: push ÖLÜ, kök neden Apple feshi

Emre: *"Apple uygulamamı kaldırdı ama bende yüklü, bildirimler gelmiyor. Kullanıcılar ne yaptı?"*

### ✅ Backend sağlam — sorun üretimde değil, teslimde

| Kontrol | Sonuç |
|---|---|
| Uygulama-içi bildirim üretimi | ✅ son 7 günde **241**, en son **bugün 12:44** |
| `deferredPush` kuyruğu | ✅ 14 kayıt, **vadesi geçmiş 0** → `flushDeferredPush` çalışıyor |
| FCM token | ✅ 128 kullanıcının **126**'sında var; dryRun 12/12 `OK` |
| Zamanlanmış fonksiyonlar | ✅ koşuyor (zombie / renewal / spending damgaları güncel) |

⚠️ **dryRun yanıltıcı:** `validate_only` mesaj yapısını ve token kaydını doğrular, **APNs kimlik doğrulamasını çalıştırmaz**. 12/12 OK'a bakıp "iletim çalışıyor" denseydi teşhis kaçardı.

### 🔴 KÖK NEDEN — kanıtlandı, tahmin değil

Emre'nin **kendi cihazına** tek gerçek gönderim yapıldı (başka kimseye değil):

```
messaging/third-party-auth-error
"Request is missing required authentication credential."
```

FCM **APNs'e kimlik doğrulayamıyor** — Firebase'deki APNs anahtarı feshedilen Apple Developer hesabına ait, Apple iptal etmiş. **29 Tem'den beri her iOS push'u sessizce düşüyor.** Kullanıcıların **120/128'i iOS** → push kanalı fiilen tamamen kapalı. Kodla çözülmüyor; Apple iadesine (ya da yeni Apple hesabı + yeni APNs anahtarı) bağlı.

🟢 **Kod burada doğru davranmış:** `sendWithTokenCleanup` token'ı yalnız `registration-token-not-registered` / `invalid-registration-token` hatalarında siliyor. `third-party-auth-error` o sınıfa girmediği için **126 token'ın hiçbiri silinmedi** → Apple dönünce push, kullanıcı hiçbir şey yapmadan kaldığı yerden devam eder. Hata sınıflarını ayırmamış olsaydık token tabanı silinmiş olacaktı.

⚠️ Servis hesabının Cloud Logging yetkisi **yok** (`Permission denied for all log views`) — hatalar 12 gündür görünmez şekilde birikti. Uyarı/alarm yok.

### Kullanıcılar ne yaptı (128 kullanıcı, PII'siz sayım)

| | |
|---|---|
| Platform | iOS **120** · Android 7 · bilinmiyor 1 |
| **29 Tem (fesih) sonrası açan** | **10 kişi** — 117'si yalnız öncesinde |
| Son görülme | 7g: **5** · 14g: 8 · 30g: 30 · daha eski: 84 · hiç: 1 |
| accountStatus | churned **55** · active 31 · (alan yok) 42 |
| plan | free 68 · premium **19** · (yok) 41 |

Fesihten sonra taban fiilen durdu. Push'un ölmesi mi, uygulamanın mağazadan kalkması mı — **ayrıştırılamaz**, ikisi aynı gün oldu.

⏳ **Purge takvimi işliyor:** churned 55'in **14'ünün vadesi geçmiş** (bir sonraki günlük koşuda kalıcı silinir), 7 gün içinde 33 tane daha, 8-30 gün: 8. Geri dönen: **0**. Tasarlanmış ve Terms'te taahhüt edilmiş davranış — bug değil, ama geri alınamaz.

### 🔴 Yan bulgu: site 12 gündür ölü App Store iddiası gösteriyordu

Win-back e-postaları **hâlâ gidiyor** (günlük, en son bugün 11:41) ve CTA `centryai.app`'e götürüyor. Site orada şunları sunuyordu:

| İddia | Gerçek |
|---|---|
| "Download on the App Store" düğmesi | `apps.apple.com/.../id6762604883` → **HTTP 404**; `itunes.apple.com/lookup` → **resultCount 0** |
| `hero.trust` "Şimdi yayında" (18 dil) | Hiçbir mağazada yok. 27 Tem'de yazılmıştı, **29 Tem'de yanlış oldu** |
| SEO sayfası: "All three are available on the App Store" | Görünür metinde **ve JSON-LD structured data'sında** |

**Commit `0bca521`** (website): App Store düğmesi → waitlist CTA; `hero.trust` 18 dilde "Coming soon to Google Play" (çeviri uydurulmadı, her dilin kendi `googlePlaySmall` + deneme parçasından türetildi); `hero.appStoreSmall/Name` silindi; SEO sayfasındaki iki iddia düzeltildi. Doğrulama: `node --check` temiz, 18 JSON geçerli, EN+TR render edildi — 0 apps.apple.com linki, ham anahtar sızmıyor.

**Emre'nin kararları:**
- 🔴 **`0bca521` PUSH EDİLMEDİ** — Innerly düzeltmesiyle birlikte çıkacak. **Bilerek alınan risk: ölü App Store iddiaları ~1 hafta daha canlı kalıyor ve win-back mailleri oraya akmaya devam ediyor.**
- **Win-back e-postaları devam** — uygulaması yüklü olanlar için geçerli çağrı.
- **`innerly.html` Play çıkışına ertelendi.** Sayfada iki `apps.apple.com/redeem` düğmesi (INNERLYFREE1M / INNERLYYEAR25, **31 Ağu**'da doluyor) ve ölü listeye link veren "How it works" adımı var — hepsi şu an çalışmıyor. ⚠️ "Play promo koduyla yenile" bul-değiştir değil: Play Console'da yeni kodlar + RevenueCat bağlantısı gerekiyor, ve 31 Ağu son tarihi Play onayından (~16-17 Ağu) sonra **dar bir pencere** bırakıyor.
- `waitlist.desc` dokunulmadı (geleceğe dönük vaat, iade başvurusu sürüyor).
