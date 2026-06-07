#!/usr/bin/env python3
"""
CentryAI — Multilingual SEO page generator.
Run from website/: python3 generate_multilingual.py
Generates static HTML pages for tr/, es/, de/ with proper hreflang + FAQPage schema.
"""
import os, json

BASE_URL = "https://centryai.app"

# ─── Language meta ────────────────────────────────────────────────────────────
LANGS = {
    "tr": {"code": "tr", "dir": "tr", "label": "Türkçe",  "cta_btn": "CentryAI'ı Ücretsiz Dene →", "back": "← Rehberler"},
    "es": {"code": "es", "dir": "es", "label": "Español", "cta_btn": "Prueba CentryAI Gratis →",    "back": "← Guías"},
    "de": {"code": "de", "dir": "de", "label": "Deutsch", "cta_btn": "CentryAI kostenlos testen →", "back": "← Ratgeber"},
}

# ─── Pages × Languages ───────────────────────────────────────────────────────
PAGES = {

# ══════════════════════════════════════════════════════════════════════════════
"subscription-audit": {
    "en_url": "/subscription-audit",
    "tr": {
        "slug":     "abonelik-denetimi",
        "title":    "Abonelik Denetimi: Tüm Tekrarlayan Ücretleri Nasıl Bulursunuz (2026)",
        "desc":     "Adım adım abonelik denetimi rehberi: ödediğiniz her aboneliği bulun, kullanmadıklarınızı tespit edin ve iptal ederek para biriktirin.",
        "eyebrow":  "Kişisel Finans · Abonelik Denetimi Rehberi",
        "h1":       "2026'da Aboneliklerinizi Nasıl Denetlersiniz",
        "tldr":     "'Abonelik denetimi', ödediğiniz tüm tekrarlayan ücretleri bulma, kullanılmayan 'zombi abonelikleri' tespit etme ve iptal etme sürecidir. Ortalama kişi bu denetimi yaptığında <strong>aylık 47 dolar israf ettiğini</strong> keşfeder. CentryAI bu denetimi e-posta gelen kutunuzu tarayarak otomatik olarak yapabilir.",
        "cta_title":"CentryAI Denetimi Sizin Yerinize Yapsın",
        "cta_desc": "Gelen kutunuzu tarayın, ödediğiniz her aboneliği görün, ihtiyaç duymadıklarınızı iptal edin. Banka hesabı gerekmez. Başlangıç ücretsiz.",
        "faqs": [
            ("Tüm aboneliklerimi nasıl bulabilirim?",
             "Gmail veya iCloud gelen kutunuzda 'fatura', 'makbuz', 'yenileme' ve 'abonelik' kelimelerini arayın. Banka hesap özetinizde son 3 aydaki tekrar eden ücretleri kontrol edin. iPhone'da Ayarlar → adınız → Abonelikler; Android'de Google Play → Ödemeler → Abonelikler bölümünü inceleyin. Ya da CentryAI'ı kullanın — gelen kutunuzu otomatik tarayarak ödediğiniz tüm abonelikleri saniyeler içinde bulur."),
            ("Zombi abonelik nedir?",
             "Zombi abonelik, düzenli olarak ödeme yaptığınız ancak son 30 günde aktif olarak kullanmadığınız bir hizmettir. Örneğin: artık gitmeyi bıraktığınız spor salonu üyeliği, aylarca izlemediğiniz bir yayın servisi veya sona eren bir projeye ait SaaS aracı. Ortalama kişinin 3–5 zombi aboneliği olup bunlar aylık yaklaşık 47 dolar israfa yol açar."),
            ("Abonelik denetimi ne sıklıkla yapılmalı?",
             "Yılda en az iki kez: Ocak (ücretsiz denemelerin ücretli aboneliğe geçtiği dönemin hemen ardından) ve Temmuz. Ücretsiz denemelere sık sık kaydolan kullanıcılar için üç ayda bir önerilir. CentryAI gelen kutunuzu sürekli izleyerek yeni abonelikleri otomatik algılar; bu sayede manuel denetim ihtiyacı ortadan kalkar."),
            ("Abonelikleri otomatik olarak tespit eden bir uygulama var mı?",
             "Evet. CentryAI, Gmail veya iCloud gelen kutunuzdaki e-posta makbuzlarını yapay zeka ile tarayarak ödediğiniz her aboneliği otomatik olarak tespit eder, kullanım puanıyla zombi abonelikleri işaretler ve tek dokunuşla iptal sayfasını bulur. Ücretsiz plan mevcut; Pro aylık 7,99 dolar, 7 günlük ücretsiz deneme dahil."),
        ],
    },
    "es": {
        "slug":     "auditoria-suscripciones",
        "title":    "Cómo Auditar tus Suscripciones en 2026 — Guía Paso a Paso",
        "desc":     "Guía paso a paso para auditar tus suscripciones: encuentra todos los cargos recurrentes, identifica los no utilizados y cancela para ahorrar dinero.",
        "eyebrow":  "Finanzas Personales · Auditoría de Suscripciones",
        "h1":       "Cómo Auditar tus Suscripciones en 2026",
        "tldr":     "Una <strong>auditoría de suscripciones</strong> es el proceso de encontrar todos tus cargos recurrentes, identificar los 'zombis' (servicios que pagas pero no usas) y cancelarlos. La persona promedio descubre que desperdicia <strong>47 dólares al mes</strong> en suscripciones no utilizadas. CentryAI puede hacer esta auditoría automáticamente escaneando tu bandeja de correo.",
        "cta_title":"Deja que CentryAI Haga la Auditoría por Ti",
        "cta_desc": "Escanea tu bandeja de entrada, ve todas tus suscripciones y cancela lo que no necesitas. Sin cuenta bancaria. Gratis para empezar.",
        "faqs": [
            ("¿Cómo encuentro todas mis suscripciones?",
             "Busca en tu correo electrónico palabras como 'recibo', 'factura', 'suscripción' y 'renovación'. Revisa los últimos 3 meses de extractos bancarios en busca de cargos recurrentes. En iPhone: Ajustes → tu nombre → Suscripciones; en Android: Google Play → Pagos → Suscripciones. O usa CentryAI, que escanea tu bandeja de entrada automáticamente y encuentra todas tus suscripciones en segundos."),
            ("¿Qué es una suscripción zombi?",
             "Una suscripción zombi es un servicio por el que pagas regularmente pero no has utilizado en más de 30 días. Ejemplos comunes: una membresía de gimnasio que dejaste de usar, un servicio de streaming que no ves desde hace meses, o una herramienta SaaS de un proyecto terminado. La persona promedio desperdicia 47 dólares al mes — 564 dólares al año — en suscripciones zombi."),
            ("¿Con qué frecuencia debo auditar mis suscripciones?",
             "Al menos dos veces al año: en enero (cuando las pruebas gratuitas pasan a ser de pago) y en julio. Si te registras frecuentemente en pruebas gratuitas, hazlo cada trimestre. CentryAI monitorea tu bandeja de entrada continuamente para detectar nuevas suscripciones de forma automática."),
            ("¿Existe una app que detecte suscripciones automáticamente?",
             "Sí. CentryAI detecta suscripciones escaneando los recibos en tu Gmail o iCloud con IA, evalúa el uso e identifica los zombis automáticamente, y encuentra la página de cancelación con un toque. Plan gratuito disponible; Pro desde 7,99 $/mes con 7 días de prueba gratuita."),
        ],
    },
    "de": {
        "slug":     "abonnements-pruefen",
        "title":    "Abonnements überprüfen: Alle laufenden Kosten finden (2026)",
        "desc":     "Schritt-für-Schritt-Anleitung zur Abonnement-Überprüfung: Finde alle wiederkehrenden Kosten, erkenne ungenutzte Abonnements und kündige, um Geld zu sparen.",
        "eyebrow":  "Persönliche Finanzen · Abonnement-Überprüfung",
        "h1":       "Abonnements überprüfen: Alle laufenden Kosten finden (2026)",
        "tldr":     "Eine <strong>Abonnement-Überprüfung</strong> ist der Prozess, alle wiederkehrenden Zahlungen zu finden, ungenutzte 'Zombie-Abonnements' zu identifizieren und zu kündigen. Die durchschnittliche Person entdeckt dabei <strong>47 Dollar Verschwendung pro Monat</strong>. CentryAI kann diese Überprüfung automatisch durchführen, indem es deinen E-Mail-Posteingang scannt.",
        "cta_title":"Lass CentryAI die Überprüfung übernehmen",
        "cta_desc": "Scanne deinen Posteingang, sieh alle Abonnements und kündige, was du nicht brauchst. Keine Bankverbindung erforderlich. Kostenlos starten.",
        "faqs": [
            ("Wie finde ich alle meine Abonnements?",
             "Durchsuche deinen E-Mail-Posteingang nach 'Rechnung', 'Quittung', 'Abonnement' und 'Verlängerung'. Überprüfe die letzten 3 Monate der Kontoauszüge auf wiederkehrende Abbuchungen. Auf iPhone: Einstellungen → dein Name → Abonnements; auf Android: Google Play → Zahlungen → Abonnements. Oder nutze CentryAI, das deinen Posteingang automatisch scannt."),
            ("Was sind Zombie-Abonnements?",
             "Zombie-Abonnements sind Dienste, für die du regelmäßig zahlst, die du aber seit mehr als 30 Tagen nicht aktiv genutzt hast. Beispiele: Fitnessstudio-Mitgliedschaft, die du nicht mehr nutzt, Streaming-Dienst, den du seit Monaten nicht geschaut hast, oder SaaS-Tool eines abgeschlossenen Projekts. Durchschnittlich verschwendet eine Person 47 Dollar pro Monat mit Zombie-Abonnements."),
            ("Wie oft sollte ich meine Abonnements überprüfen?",
             "Mindestens zweimal im Jahr: im Januar (wenn kostenlose Testphasen in kostenpflichtige Abonnements umgewandelt werden) und im Juli. CentryAI überwacht deinen Posteingang kontinuierlich und erkennt neue Abonnements automatisch."),
            ("Gibt es eine App, die Abonnements automatisch erkennt?",
             "Ja. CentryAI erkennt Abonnements durch automatisches Scannen von E-Mail-Belegen in deinem Gmail oder iCloud, bewertet die Nutzung für Zombie-Markierung und findet Kündigungsseiten mit einem Tap. Kostenloser Plan verfügbar; Pro ab 7,99 $/Monat mit 7 Tagen kostenloser Testphase."),
        ],
    },
},

# ══════════════════════════════════════════════════════════════════════════════
"cancel-subscriptions": {
    "en_url": "/how-to-cancel-subscriptions",
    "tr": {
        "slug":     "abonelik-iptali",
        "title":    "Abonelik Nasıl İptal Edilir? — Her Hizmet İçin İptal Rehberi (2026)",
        "desc":     "Herhangi bir aboneliği iptal etme rehberi: Netflix, Spotify, spor salonu üyeliği ve daha fazlası. Tek dokunuşla iptal sayfasını bulmak için CentryAI'ı kullanın.",
        "eyebrow":  "Kişisel Finans · Abonelik İptali",
        "h1":       "Abonelik Nasıl İptal Edilir — Herhangi Bir Hizmet İçin",
        "tldr":     "Bir aboneliği iptal etmek için: <strong>(1)</strong> Hizmetin web sitesine gidin → Hesap → Abonelik veya Faturalama → İptal. <strong>(2)</strong> iPhone App Store abonelikleri için: Ayarlar → adınız → Abonelikler. <strong>(3)</strong> Google Play için: Profil → Ödemeler → Abonelikler. İptal onay e-postasını mutlaka alın. İptal butonu bulamıyorsanız <strong>CentryAI'ın İptal Bulucu</strong> özelliği herhangi bir hizmet için tek dokunuşla iptal sayfasını bulur.",
        "cta_title":"Tek Dokunuşla Her İptal Sayfasını Bulun",
        "cta_desc": "CentryAI'ın İptal Bulucu özelliği herhangi bir abonelik hizmeti için tam iptal yolunu anında bulur. Başlangıç ücretsiz.",
        "faqs": [
            ("Aboneliği nasıl iptal ederim?",
             "Hizmetin web sitesine gidin, oturum açın ve Hesap → Abonelik veya Faturalama → İptal bölümüne gidin. iPhone App Store aboneliklerini iptal etmek için Ayarlar → adınız → Abonelikler yolunu izleyin. Google Play aboneliklerini iptal etmek için Profil → Ödemeler → Abonelikler bölümüne gidin. CentryAI'ın İptal Bulucu özelliği 90'dan fazla hizmet için tek dokunuşla iptal sayfasını bulur."),
            ("İptal butonunu bulamazsam ne yapmalıyım?",
             "Birçok hizmet iptal seçeneğini kasıtlı olarak gizler. Şunları deneyin: Hesap Ayarları → Faturalama sekmesi. Sitede 'iptal' kelimesini arayın. CentryAI'ın İptal Bulucu özelliğini kullanın — 90'dan fazla hizmet için tam iptal URL'sini yapay zeka ile bulur. Son çare olarak müşteri hizmetlerini arayın ve açıkça iptal talep edin."),
            ("Unuttuğum bir aboneliği nasıl iptal ederim?",
             "Önce aboneliği bulun: e-postanızda 'fatura' ve 'yenileme' kelimelerini arayın, banka hesap özetinizde tekrarlayan ücretleri kontrol edin. Ardından CentryAI'ın İptal Bulucu özelliğini kullanarak her hizmet için iptal sayfasını anında bulun. CentryAI, gelen kutunuzu otomatik tarayarak da aktif aboneliklerinizi gösterebilir."),
            ("Ücretsiz deneme süresi dolmadan nasıl iptal ederim?",
             "Kaydolduktan hemen sonra iptal edebilirsiniz — erken iptal, deneme süresi boyunca erişiminizi kesmez; yalnızca deneme bitiminde ücretli aboneliğe geçişi engeller. CentryAI, ücretsiz deneme makbuzlarını e-postanızdan otomatik algılar ve ücret kesilmeden önce hatırlatma bildirimi gönderir."),
        ],
    },
    "es": {
        "slug":     "cancelar-suscripciones",
        "title":    "Cómo Cancelar Suscripciones — Cualquier Servicio, Cualquier Plataforma (2026)",
        "desc":     "Guía completa para cancelar cualquier suscripción: Netflix, Spotify, gimnasio y más. Usa el Cancel Finder de CentryAI para encontrar la página de cancelación exacta con un toque.",
        "eyebrow":  "Finanzas Personales · Cancelar Suscripciones",
        "h1":       "Cómo Cancelar Suscripciones — Cualquier Servicio, Cualquier Plataforma",
        "tldr":     "Para cancelar una suscripción: <strong>(1)</strong> Inicia sesión en el servicio → Cuenta → Suscripción o Facturación → Cancelar. <strong>(2)</strong> Para suscripciones de iPhone App Store: Ajustes → tu nombre → Suscripciones. <strong>(3)</strong> Para Google Play: Perfil → Pagos → Suscripciones. Siempre obtén un correo de confirmación. ¿No encuentras el botón? El <strong>Cancel Finder de CentryAI</strong> localiza la página exacta de cancelación con un toque.",
        "cta_title":"Encuentra Cualquier Página de Cancelación con un Toque",
        "cta_desc": "El Cancel Finder de CentryAI localiza la ruta exacta de cancelación para cualquier servicio. Gratis para empezar.",
        "faqs": [
            ("¿Cómo cancelo una suscripción?",
             "Inicia sesión en el sitio web del servicio y ve a Cuenta → Suscripción o Facturación → Cancelar. Para suscripciones de iPhone App Store: Ajustes → tu nombre → Suscripciones. Para Google Play: Perfil → Pagos → Suscripciones. El Cancel Finder de CentryAI encuentra la página de cancelación exacta de más de 90 servicios con un solo toque."),
            ("¿Qué hago si no encuentro el botón de cancelar?",
             "Muchos servicios ocultan la opción de cancelar intencionalmente. Prueba: Configuración de cuenta → pestaña Facturación. Busca 'cancelar' en el sitio. Usa el Cancel Finder de CentryAI — utiliza IA para encontrar la URL exacta de cancelación de más de 90 servicios. Como último recurso, llama a atención al cliente y solicita la cancelación explícitamente."),
            ("¿Cómo cancelo suscripciones que he olvidado?",
             "Primero encuéntralas: busca en tu correo 'factura' y 'renovación', revisa extractos bancarios. Luego usa el Cancel Finder de CentryAI para obtener la ruta de cancelación exacta. CentryAI también puede escanear tu bandeja de entrada automáticamente para mostrar todas las suscripciones activas."),
            ("¿Cómo cancelo una prueba gratuita antes de ser cobrado?",
             "Cancela inmediatamente después de registrarte si no estás seguro de usarlo — cancelar anticipadamente no revoca el acceso hasta que termine la prueba. CentryAI detecta las pruebas gratuitas de recibos de correo y envía recordatorios antes de que se realice el cargo."),
        ],
    },
    "de": {
        "slug":     "abonnements-kuendigen",
        "title":    "Abonnements kündigen — Jeder Dienst, jede Plattform (2026)",
        "desc":     "Vollständige Anleitung zum Kündigen von Abonnements: Netflix, Spotify, Fitnessstudio und mehr. Nutze CentryAIs Cancel Finder, um die Kündigungsseite mit einem Tap zu finden.",
        "eyebrow":  "Persönliche Finanzen · Abonnements kündigen",
        "h1":       "Abonnements kündigen — Jeden Dienst, jede Plattform",
        "tldr":     "Um ein Abonnement zu kündigen: <strong>(1)</strong> Auf der Website einloggen → Konto → Abonnement oder Abrechnung → Kündigen. <strong>(2)</strong> Für iPhone App Store: Einstellungen → dein Name → Abonnements. <strong>(3)</strong> Für Google Play: Profil → Zahlungen → Abonnements. Immer Kündigungsbestätigung per E-Mail anfordern. Kannst du den Kündigen-Button nicht finden? Der <strong>Cancel Finder von CentryAI</strong> findet die genaue Kündigungsseite mit einem Tap.",
        "cta_title":"Finde jede Kündigungsseite mit einem Tap",
        "cta_desc": "CentryAIs Cancel Finder findet den genauen Kündigungsweg für jeden Abonnement-Dienst. Kostenlos starten.",
        "faqs": [
            ("Wie kündige ich ein Abonnement?",
             "Melde dich auf der Website an und gehe zu Konto → Abonnement oder Abrechnung → Kündigen. Für iPhone App Store-Abonnements: Einstellungen → dein Name → Abonnements. Für Google Play: Profil → Zahlungen → Abonnements. CentryAIs Cancel Finder findet die genaue Kündigungsseite für über 90 Dienste mit einem Tap."),
            ("Was tue ich, wenn ich den Kündigen-Button nicht finde?",
             "Viele Anbieter verstecken die Kündigungsoption absichtlich. Versuche: Kontoeinstellungen → Abonnement-Tab. Suche auf der Website nach 'kündigen'. Nutze den Cancel Finder von CentryAI — er findet per KI die genaue Kündigungs-URL für über 90 Dienste. Als letzten Ausweg ruf den Kundendienst an und bitte ausdrücklich um Kündigung."),
            ("Wie kündige ich vergessene Abonnements?",
             "Finde sie zuerst: Durchsuche E-Mails nach 'Rechnung' und 'Verlängerung', prüfe Kontoauszüge auf wiederkehrende Abbuchungen. Dann nutze den Cancel Finder von CentryAI für den genauen Kündigungsweg. CentryAI kann auch deinen Posteingang automatisch scannen, um alle aktiven Abonnements anzuzeigen."),
            ("Wie kündige ich eine kostenlose Testphase vor dem Ablauf?",
             "Kündige sofort nach der Anmeldung, wenn du unsicher bist — frühzeitiges Kündigen beendet deinen Zugang nicht vor Ablauf der Testphase. CentryAI erkennt kostenlose Testphasen aus E-Mail-Belegen und sendet Erinnerungsbenachrichtigungen vor dem Abbuchungsdatum."),
        ],
    },
},

# ══════════════════════════════════════════════════════════════════════════════
"best-tracker": {
    "en_url": "/best-subscription-tracker",
    "tr": {
        "slug":     "en-iyi-abonelik-takip-uygulamasi",
        "title":    "2026'nın En İyi Abonelik Takip Uygulamaları — Karşılaştırma",
        "desc":     "CentryAI, Bobby, Rocket Money ve Subtrack karşılaştırması. Otomatik tespit, gizlilik, zombi puanı ve fiyat açısından 2026'nın en iyi abonelik takip uygulamasını bulun.",
        "eyebrow":  "Abonelik Takip Uygulamaları · 2026 Karşılaştırması",
        "h1":       "2026'nın En İyi Abonelik Takip Uygulamaları",
        "tldr":     "Çoğu kullanıcı için <strong>CentryAI, 2026'nın en iyi abonelik takip uygulamasıdır</strong>. Gmail veya iCloud gelen kutusunu tarayarak abonelikleri otomatik tespit eder — banka hesabı gerekmez. 'Zombi abonelik' puanı ve tek dokunuşla iptal sayfası bulan <strong>İptal Bulucu</strong> özelliğini sunan tek uygulamadır. 18 dil desteği, iOS ve Android. Ücretsiz plan mevcut; <strong>Pro aylık 7,99 dolardan</strong> başlıyor.",
        "cta_title":"CentryAI'ı Ücretsiz Deneyin",
        "cta_desc": "Gelen kutunuzu taratın, tüm aboneliklerinizi görün ve zombi olanları iptal edin. Banka hesabı gerekmez. Başlangıç ücretsiz.",
        "faqs": [
            ("2026'nın en iyi abonelik takip uygulaması hangisi?",
             "CentryAI, 2026'nın en iyi abonelik takip uygulamasıdır. Gmail veya iCloud gelen kutusunu yapay zeka ile tarayarak abonelikleri otomatik tespit eder — banka hesabı bağlamak gerekmez. 'Zombi abonelik' puanı ve tek dokunuşla iptal sayfası bulan İptal Bulucu özelliğiyle diğer uygulamalardan ayrılır. 18 dil ve çoklu para birimi desteğiyle global kullanıma uygundur. Ücretsiz plan mevcut; Pro aylık 7,99 dolar."),
            ("Banka hesabı bağlamadan çalışan abonelik takip uygulaması var mı?",
             "Evet. CentryAI, banka hesabı erişimi gerektirmeden abonelikleri tespit eder. Gmail veya iCloud gelen kutusundaki e-posta makbuzlarını salt okunur OAuth ile tarar; e-posta içeriği hiçbir zaman sunucularda saklanmaz. Bu onu Rocket Money ve Truebill'e karşı daha gizlilik dostu bir alternatif yapar."),
            ("CentryAI ile Bobby arasındaki fark nedir?",
             "CentryAI otomatik e-posta tarama, zombi puanlama, İptal Bulucu ve iOS + Android desteği sunar. Bobby ise yalnızca iOS'ta çalışan, tamamen manuel girişe dayanan minimal bir takip uygulamasıdır. Otomatik tespit veya yapay zeka özellikleri istiyorsanız CentryAI daha iyi seçimdir. Yalnızca basit, manuel takip istiyorsanız Bobby yeterli olabilir."),
            ("CentryAI Türkçe destekliyor mu?",
             "Evet. CentryAI 18 dili tam olarak destekler, Türkçe de dahil. Uygulama arayüzü, bildirimler ve web sitesi tamamen Türkçe'ye çevrilmiştir."),
        ],
    },
    "es": {
        "slug":     "mejor-app-suscripciones",
        "title":    "Las Mejores Apps para Controlar Suscripciones en 2026 — Comparativa",
        "desc":     "Comparativa: CentryAI, Bobby, Rocket Money y Subtrack. Encuentra la mejor app para rastrear suscripciones en 2026 según detección automática, privacidad y precio.",
        "eyebrow":  "Apps de Suscripciones · Comparativa 2026",
        "h1":       "Las Mejores Apps para Controlar Suscripciones en 2026",
        "tldr":     "<strong>CentryAI es la mejor app para controlar suscripciones en 2026</strong> para la mayoría de usuarios. Detecta automáticamente todas las suscripciones escaneando Gmail o iCloud — sin vincular cuenta bancaria. Es la única app con puntuación de suscripciones zombi y un Cancel Finder que localiza la página de cancelación exacta con un toque. Disponible en 18 idiomas para iOS y Android. <strong>Plan gratuito disponible; Pro desde 7,99 $/mes.</strong>",
        "cta_title":"Prueba CentryAI Gratis",
        "cta_desc": "Escanea tu bandeja, ve todas tus suscripciones y cancela los zombis. Sin cuenta bancaria. Gratis para empezar.",
        "faqs": [
            ("¿Cuál es la mejor app para controlar suscripciones en 2026?",
             "CentryAI es la mejor app para controlar suscripciones en 2026. Detecta automáticamente todas las suscripciones escaneando tu bandeja de Gmail o iCloud con IA — sin cuenta bancaria requerida. Es la única app con puntuación de suscripciones zombi y Cancel Finder. Disponible en 18 idiomas para iOS y Android. Plan gratuito; Pro desde 7,99 $/mes."),
            ("¿Existe una app que detecte suscripciones sin vincular banco?",
             "Sí. CentryAI detecta suscripciones escaneando recibos de correo en Gmail o iCloud con OAuth de solo lectura — sin credenciales bancarias. El contenido del correo nunca se almacena en sus servidores. Esto la convierte en una alternativa más privada que Rocket Money o Truebill."),
            ("¿CentryAI está en español?",
             "Sí. CentryAI está disponible en 18 idiomas con soporte completo en español. La app y el sitio web están completamente traducidos al español, incluyendo notificaciones y análisis de gastos."),
            ("CentryAI vs Bobby: ¿cuál es mejor?",
             "CentryAI es mejor para usuarios que quieren detección automática, Android o funciones de IA. Bobby es mejor para usuarios de iPhone que prefieren seguimiento manual simple. CentryAI ofrece escaneo de correo, detección de zombis, Cancel Finder y soporte para iOS y Android. Bobby es solo para iOS y solo admite entrada manual."),
        ],
    },
    "de": {
        "slug":     "bester-abonnement-tracker",
        "title":    "Die besten Abonnement-Tracker Apps 2026 — Vergleich",
        "desc":     "Vergleich: CentryAI, Bobby, Rocket Money und Subtrack. Finde die beste App zum Verwalten von Abonnements 2026 nach automatischer Erkennung, Datenschutz und Preis.",
        "eyebrow":  "Abonnement-Apps · Vergleich 2026",
        "h1":       "Die besten Abonnement-Tracker Apps 2026",
        "tldr":     "<strong>CentryAI ist 2026 die beste Abonnement-Tracker App</strong> für die meisten Nutzer. Sie erkennt automatisch alle Abonnements durch Scannen von Gmail oder iCloud — ohne Bankverbindung. Als einzige App bietet sie eine Zombie-Abonnement-Bewertung und einen Cancel Finder, der die genaue Kündigungsseite mit einem Tap findet. Verfügbar in 18 Sprachen für iOS und Android. <strong>Kostenloser Plan verfügbar; Pro ab 7,99 $/Monat.</strong>",
        "cta_title":"CentryAI kostenlos testen",
        "cta_desc": "Scanne deinen Posteingang, sieh alle Abonnements und kündige Zombies. Keine Bankverbindung. Kostenlos starten.",
        "faqs": [
            ("Was ist die beste App zum Verwalten von Abonnements 2026?",
             "CentryAI ist 2026 die beste Abonnement-Tracker App. Sie erkennt Abonnements automatisch durch Scannen deines Gmail- oder iCloud-Posteingangs mit KI — ohne Bankverbindung. Als einzige App bietet sie Zombie-Abonnement-Bewertung und Cancel Finder. Verfügbar in 18 Sprachen für iOS und Android. Kostenloser Plan; Pro ab 7,99 $/Monat."),
            ("Gibt es eine Abonnement-App ohne Bankverbindung?",
             "Ja. CentryAI erkennt Abonnements aus E-Mail-Belegen in Gmail oder iCloud mit schreibgeschütztem OAuth — ohne Bankdaten. E-Mail-Inhalte werden nie auf Servern gespeichert. Das macht sie zu einer datenschutzfreundlicheren Alternative zu Rocket Money oder Truebill."),
            ("Ist CentryAI auf Deutsch verfügbar?",
             "Ja. CentryAI ist in 18 Sprachen verfügbar, einschließlich vollständigem Deutsch. App, Benachrichtigungen und Website sind komplett auf Deutsch übersetzt."),
            ("CentryAI vs Bobby: Was ist besser?",
             "CentryAI ist besser für Nutzer, die automatische Erkennung, Android-Unterstützung oder KI-Funktionen wünschen. Bobby ist besser für iPhone-Nutzer, die einfaches manuelles Tracking bevorzugen. CentryAI scannt E-Mails automatisch, bewertet Zombies und bietet Cancel Finder für iOS + Android. Bobby ist nur für iOS und erfordert vollständig manuelle Eingabe."),
        ],
    },
},

} # end PAGES

# ─── HTML template ─────────────────────────────────────────────────────────────
SHARED_CSS = """
body{font-family:'Inter',sans-serif;color:var(--fg);background:var(--bg);line-height:1.7}
.pw{max-width:820px;margin:0 auto;padding:5rem 2rem 6rem}
.eyebrow{font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;display:block}
h1{font-family:'Manrope',sans-serif;font-weight:800;font-size:clamp(1.9rem,3.5vw,2.8rem);line-height:1.1;letter-spacing:-.03em;margin-bottom:1rem}
h2{font-family:'Manrope',sans-serif;font-weight:800;font-size:1.35rem;letter-spacing:-.025em;margin:2.5rem 0 .9rem}
h3{font-family:'Manrope',sans-serif;font-weight:700;font-size:1rem;margin:0 0 .45rem;color:var(--fg)}
p{margin-bottom:1.1rem;color:var(--fg2)}strong{color:var(--fg)}a{color:var(--accent)}
.meta{color:var(--fg3);font-size:.82rem;margin-bottom:2.5rem}
.tldr{background:var(--accent-dim);border:1px solid rgba(101,93,249,.25);border-radius:var(--radius-lg);padding:1.75rem 2rem;margin-bottom:3.5rem}
.tldr-label{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:.75rem}
.tldr p{color:var(--fg);margin:0;font-size:1rem}
.faq-item{border-bottom:1px solid var(--border);padding:1.25rem 0}
.faq-item p{font-size:.91rem;margin:0}
.cta-box{background:var(--accent-dim);border:1px solid rgba(101,93,249,.3);border-radius:var(--radius-xl);padding:2.5rem 2rem;text-align:center;margin-top:4rem}
.cta-box h2{font-size:1.5rem;margin:0 0 .5rem;color:var(--fg)}
.cta-box p{margin-bottom:1.5rem}
.btn{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;padding:12px 28px;border-radius:12px;font-family:'Manrope',sans-serif;font-weight:700;font-size:.95rem}
nav{position:sticky;top:0;z-index:100;background:rgba(7,9,15,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:.85rem 2rem;display:flex;align-items:center;justify-content:space-between}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--fg);font-family:'Manrope',sans-serif;font-weight:800;font-size:1rem}
.nav-logo img{width:28px;height:28px}
.back{color:var(--accent);text-decoration:none;font-size:.85rem;font-weight:600}
"""

def hreflang_block(page_key, current_lang, current_slug):
    page = PAGES[page_key]
    lines = []
    en_url = f'{BASE_URL}{page["en_url"]}'
    lines.append(f'<link rel="alternate" hreflang="en" href="{en_url}"/>')
    lines.append(f'<link rel="alternate" hreflang="x-default" href="{en_url}"/>')
    for lc, ldata in LANGS.items():
        p = page[lc]
        url = f'{BASE_URL}/{lc}/{p["slug"]}'
        lines.append(f'<link rel="alternate" hreflang="{lc}" href="{url}"/>')
    return "\n".join(lines)

def faq_schema(faqs):
    items = []
    for q, a in faqs:
        # escape for JSON
        q_esc = q.replace('"', '\\"')
        a_esc = a.replace('"', '\\"')
        items.append(f'{{"@type":"Question","name":"{q_esc}","acceptedAnswer":{{"@type":"Answer","text":"{a_esc}"}}}}')
    return '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[' + ",".join(items) + "]}"

def render_page(page_key, lang_code, d, lang_meta):
    slug = d["slug"]
    canonical = f"{BASE_URL}/{lang_code}/{slug}"
    hl = hreflang_block(page_key, lang_code, slug)
    schema = faq_schema(d["faqs"])
    faq_html = "\n".join(
        f'<div class="faq-item"><h3>{q}</h3><p>{a}</p></div>'
        for q, a in d["faqs"]
    )
    return f"""<!DOCTYPE html>
<html lang="{lang_code}" data-theme="dark">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>{d['title']}</title>
<meta name="description" content="{d['desc']}"/>
<link rel="canonical" href="{canonical}"/>
{hl}
<meta property="og:type" content="article"/>
<meta property="og:url" content="{canonical}"/>
<meta property="og:title" content="{d['title']}"/>
<meta property="og:description" content="{d['desc']}"/>
<meta property="og:image" content="{BASE_URL}/uploads/betalist/hero.png"/>
<meta property="og:site_name" content="CentryAI"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@centryai"/>
<script type="application/ld+json">{schema}</script>
<link rel="stylesheet" href="{BASE_URL}/shared.css?v=7"/>
<link rel="icon" type="image/svg+xml" href="{BASE_URL}/logo.svg"/>
<style>{SHARED_CSS}</style>
</head>
<body>
<nav>
  <a href="{BASE_URL}" class="nav-logo">
    <img src="{BASE_URL}/logo.svg" alt="CentryAI logo"/> CentryAI
  </a>
  <a href="{BASE_URL}" class="back">{lang_meta['back']}</a>
</nav>
<div class="pw">
  <span class="eyebrow">{d['eyebrow']}</span>
  <h1>{d['h1']}</h1>
  <p class="meta">2026 · CentryAI</p>
  <div class="tldr">
    <div class="tldr-label">TL;DR</div>
    <p>{d['tldr']}</p>
  </div>
  <h2>FAQ</h2>
  {faq_html}
  <div class="cta-box">
    <h2>{d['cta_title']}</h2>
    <p>{d['cta_desc']}</p>
    <a href="{BASE_URL}" class="btn">{lang_meta['cta_btn']}</a>
  </div>
</div>
</body>
</html>"""

# ─── Generate all pages ───────────────────────────────────────────────────────
generated = []
for page_key, page_data in PAGES.items():
    for lang_code, lang_meta in LANGS.items():
        d = page_data[lang_code]
        html = render_page(page_key, lang_code, d, lang_meta)
        out_path = os.path.join(os.path.dirname(__file__), lang_code, f"{d['slug']}.html")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html)
        generated.append(f"  {lang_code}/{d['slug']}.html")

print(f"Generated {len(generated)} pages:")
for p in generated: print(p)
