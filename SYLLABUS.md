# YZM205 Web Tasarımı ve Programlama · Ders planı

Muş Alparslan Üniversitesi · Mühendislik-Mimarlık Fakültesi · Yazılım Mühendisliği 2. sınıf · 2026–2027 Güz

Yürütücü: Arş. Gör. Çağrı ŞAHİN

Haftada iki blok: sabah konu anlatımı ve birlikte kodlama, öğleden sonra proje atölyesi. Derslik BLD-104.

Etkileşimli sürüm: [cagrisahin58.github.io/2026-web/docs/syllabus.html](https://cagrisahin58.github.io/2026-web/docs/syllabus.html)

## Dersin amacı

WhatsApp Web, YouTube, e-Devlet: her gün açtığın bu sitelerin hepsi birer web uygulaması. Dönemin sonunda sen de takımınla birlikte küçük ama gerçek bir web uygulaması yapıp internete koymuş olacaksın. Sayfaları tarayıcıda açılan, arkasında bir sunucu ve bir veritabanı çalışan bir uygulama. Bugün kodun bir kısmını yapay zekâ yazabiliyor. Neyin yapılacağına karar vermek, çıkan kodu anlamak ve doğru çalışıp çalışmadığını kontrol etmek yine insanın işi. Bu derste o insan olmayı öğreneceksin.

Peki yapay zekâ bir sayfayı saniyeler içinde yazabiliyorsa HTML'i, CSS'i, JavaScript'i neden tek tek öğreniyoruz? Çünkü yapay zekâ çoğu zaman neredeyse doğru kod verir ve aradaki küçük hatayı ancak kodu okuyabilen biri fark eder. Bu yüzden ilk sekiz haftada temeli birlikte kurarız: her kavramı önce sen yazarsın. Temel oturunca dokuzuncu haftadan itibaren bugünün web dünyasına bakarız: modern mimariler, çerçeveler, kodlama ajanları, uygulamaya yapay zekâ eklemek, GitHub'ın otomasyon araçları.

## Haftalık ritim

Her ders günü iki blok var. Sabah bloğunda hoca konuyu projeksiyondaki sunumdan anlatır: her ekranda tek bir fikir, hareketli bir şema, sınıfça bir tahmin ve birkaç dakikada bir "şimdi sen" adımı. Sen de kendi bilgisayarında aynı kodu yazarsın. 105 dakikanın ortasında 10 dakika ara verilir.

Her haftanın bir de uzun ders notu var: tarayıcıda açılan, içinde küçük denemeler (simülasyonlar) ve cevabı açıklanan sorular olan bir sayfa. O sayfa evde tekrar içindir; derste sunumu izlersin, evde notu okursun.

Öğleden sonra bloğu proje atölyesidir. Takımınla oturursun, o haftanın konusunu kendi projenize uygularsınız, hoca masaları gezer. Blok bitmeden o haftanın teslimini gönderirsin (aşağıda "Haftalık teslim"). Her haftanın ders notundaki lab paketleri (Yap, Boz, Anlat) evde çalışmak isteyen için duruyor; zorunlu değil.

Takvimi haftalarla sayarız, günle değil. Bir hafta iki derse yayılabilir ya da iki hafta tek derste işlenebilir; hangi haftada olduğumuz derste ve sınıf kanalında söylenir.

## 14 haftalık plan

İlk sekiz hafta temel: sayfa, görünüş, davranış, takım çalışması, sunucu, veritabanı, yayın. Sonraki haftalar bugünün web'i. Ara sınav haftası ders yok; sınav o güne kadar işlediğimiz konuları kapsar.

### Hafta 1 · Tanışma: yapay zekâ çağında web yazılımcısı olmak

Konu anlatımı yok. Dersi, dönemin haritasını ve takım projesini tanırsın. HTML, CSS, JavaScript, sunucu, veritabanı ve yapay zekâya birer küçük bakış. Öğleden sonra bilgisayar yok: dörtlü masalarda tanışırız, kampüs hayatından site fikirleri çıkarırız. Takımını Lab grupları sayfasından kaydedersin.

[Hafta 1 ders notu](https://cagrisahin58.github.io/2026-web/weeks/hafta-01/) · [Kurulum sayfası](https://cagrisahin58.github.io/2026-web/weeks/hafta-00-kurulum/)

### Hafta 2 · HTML: sayfanın iskeleti

Bir web sayfasının aslında bir metin dosyası olduğunu görürsün. Etiket, öğe ve niteliğin ne olduğunu, etiketlerin iç içe nasıl geçtiğini öğrenirsin. Bir HTML belgesinin iskeletini satır satır yazarsın. Başlık, paragraf ve liste kullanırsın. Bağlantı ve görsel eklerken dosya yolunun mantığını çözersin. Sayfanı header, nav, main ve footer bölümlerine ayırırsın. Kişisel sayfanı yapıp GitHub Pages ile yayınlarsın.

[Hafta 2 ders notu](https://cagrisahin58.github.io/2026-web/weeks/hafta-02/)

### Hafta 3 · CSS: sayfaya görünüş vermek

CSS'in ne olduğunu ve HTML'e nasıl bağlandığını öğrenirsin. Seçicilerle hangi öğeyi biçimlendireceğini söylersin. Renk, yazı tipi ve boşluk verirsin. Her öğenin bir kutu olduğunu görürsün: içerik, padding, border, margin. Flexbox ile öğeleri yan yana dizersin. Tek bir media sorgusuyla sayfanı telefonda da düzgün gösterirsin. Kişisel sayfanı biçimlendirir, projenin ilk ekranına görünüş verirsin.

### Hafta 4 · JavaScript ve DOM: sayfayı canlandırmak

YZM103'ten tanıdığın değişken, koşul, döngü, fonksiyon ve diziyi JavaScript'te hızlıca yazarsın. Sonra DOM'u öğrenirsin: tarayıcının sayfayı bellekte tuttuğu ağaç. Bir öğeyi seçer, metnini ve sınıfını değiştirir, tıklama ve yazma olaylarını dinler, formdan değer okur, listeye öğe eklersin. `fetch` ile sunucuya nasıl soru sorulduğunu görürsün. Projenin bir ekranını canlandırırsın.

### Hafta 5 · Git ve GitHub ile takım çalışması

Git, dosyalarında yaptığın her değişikliğin geçmişini tutan programdır. Değişikliği commit ile kaydeder, push ile GitHub'a gönderir, pull ile arkadaşının değişikliğini alırsın. Ana kodu bozmadan çalışmak için kendi dalını açar, işin bitince pull request ile takıma sunarsın. İki kişinin aynı satırı değiştirmesinden doğan çakışmayı çözersin. Takım deposu kurulur ve proje oradan yayınlanır.

Proje: M1. Takımın statik sayfalardan ve JavaScript'ten oluşan ilk sürümü takım deposundan yayında.

### Hafta 6 · Sunucu: HTTP, Node.js ve Express

HTTP, tarayıcı ile sunucunun konuşma kuralıdır: istek gider, yanıt gelir. GET ile POST'un, 200 ile 404'ün farkını görürsün. Verinin JSON biçiminde taşındığını öğrenirsin. Node.js ile JavaScript'i tarayıcının dışında çalıştırır, Express ile ilk sunucunu yazar, bir rota açıp JSON döndürürsün. Sayfandan `fetch` ile kendi sunucuna istek atarsın. Projene ilk API'ni eklersin.

### Hafta 7 · Veritabanı: SQL, SQLite ve bulutta veritabanı

Tablo, satır, sütun ve birincil anahtarı öğrenirsin. SQL ile veri okur (SELECT), ekler (INSERT), süzer (WHERE), sıralar (ORDER BY), günceller ve silersin. Tek dosyada duran SQLite ile çalışırsın. Aynı fikrin buluttaki servislerine (Supabase, Turso, Firebase gibi) bakarsın: ne değişir, ne aynı kalır. Projenin verisi veritabanına taşınır.

### Hafta 8 · Yayına alma ve güvenlik temelleri

Sunucunu ve veritabanını internete koymayı öğrenirsin: barındırma servisi, ortam değişkeni, gizli anahtarın neden koda yazılmadığı, geçici disk. Parolanın neden düz saklanmadığını (hash), oturumun nasıl hatırlandığını (çerez) ve en bilinen iki açığı (XSS, SQL enjeksiyonu) tanırsın. Proje yayına alınır.

Proje: M2. Sunucusu ve veritabanı bağlı sürüm yayında.

### Ara sınav haftası · ders yok

Ara sınav o güne kadar işlediğimiz konuları kapsar. Biçimi "Değerlendirme" başlığında.

### Hafta 9 · Modern web mimarileri

Sayfa tarayıcıda mı, sunucuda mı üretilir? SPA, SSR ve SSG'nin ne olduğunu, API-first yaklaşımı, bileşen tabanlı çerçeveleri (React, Next.js) ve TypeScript'in neden var olduğunu görürsün. Hangi projenin neyi seçtiğini konuşuruz. Kendi projenin mimarisini çizersin, küçük bir bileşen denersin.

### Hafta 10 · Yapay zekâ ile geliştirme

Kodlama ajanları (GitHub Copilot, Claude Code, Cursor) nasıl çalışır, nerede yanılır? İyi istem yazmayı, üretilen kodu okumayı ve test etmeyi öğrenirsin. Ajanın araç kullanımına (MCP) bakarsın. Kural: açıklayamadığın kod senin değil. Projene ajanla bir özellik ekler, her satırını açıklarsın.

### Hafta 11 · Uygulamaya yapay zekâ eklemek

Dil modeli API'sine sunucundan istek atarsın; anahtar sunucuda kalır. Sistem mesajı, hata ve zaman aşımı, çıktının doğrulanması. Modelin kendi belgelerinden cevap üretmesine (RAG) kısa bir bakış. Projene bir yapay zekâ özelliği eklersin.

### Hafta 12 · GitHub ekosistemi ve otomasyon

GitHub Actions ile test ve yayın otomasyonu, Issues ve Projects ile iş takibi, iyi bir README ve lisans, açık kaynak projeye katkı. Depon senin CV'ndir. Projene bir otomasyon eklersin.

### Hafta 13 · Kalite ve son hazırlık

Erişilebilirlik, performans (Lighthouse), telefon ve masaüstü kontrolü, güvenlik kontrol listesi. Demo Günü provası.

Proje: kod dondurma, Demo Günü'nden önceki gün 23:59. Bu saatten sonra takım deposuna yapılan değişiklik değerlendirilmez.

### Hafta 14 · Demo Günü

Sabah ve öğleden sonra blokları Demo Günü'ne ayrılır. Her takım 7 dakika demo yapar, 3 dakika soru alır.

Proje: M3, final teslimi.

### Final haftası

Final sınavı ve bireysel kod savunmaları final haftasında yapılır. Savunma öğrenci başına 15 dakikadır. Bütünleme sınavı final sınavının yerine geçer ve onunla aynı biçimdedir; proje ve savunma notların korunur.

## Dönem projesi

Dört kişilik takımlar. Takımını [Lab grupları](https://cagrisahin58.github.io/2026-web/gruplar/) sayfasından kaydedersin; kayıt yedi gün düzenlenebilir, sonra kilitlenir.

Her takım gerçek bir kullanıcı için birkaç sayfalık bir web uygulaması yapar. Ön yüz HTML, CSS ve JavaScript ile yazılır. Arkada bir sunucu ve bir veritabanı çalışır. Uygulamada küçük bir yapay zekâ özelliği bulunur. Dönem sonunda uygulama yayındadır, yani herkes adresinden açabilir. Fikir örnekleri: kulüp etkinliklerine kayıt, kayıp eşya panosu, ders notu paylaşımı, laboratuvar cihazı rezervasyonu.

Kilometre taşları:

| Taş | Ne zaman | Ne teslim edilir? |
| --- | --- | --- |
| M0 | Hafta 1 | Takım, proje fikri ve kullanıcı (Lab grupları sayfasında) |
| M1 | Hafta 5 | Statik sayfalar ve JavaScript ile ilk sürüm, takım deposundan yayında |
| M2 | Hafta 8 | Sunucusu ve veritabanı bağlı sürüm yayında |
| M3 | Hafta 14 | Demo Günü ve final teslimi: yayındaki uygulama, README (projeyi tanıtan metin dosyası), kısa rapor |

Final kodu Demo Günü'nden önceki gün 23:59'da dondurulur. Final raporunda yapay zekâ kullanımını anlatan bir bölüm zorunludur.

Ara teslimlerde (M1, M2) takım notu, senin bireysel katkınla çarpılır. Takımda iş yapmayan, takımın aldığı notu olduğu gibi almaz.

Final teslimi şu başlıklarla değerlendirilir:

| Başlık | Neye bakılır? |
| --- | --- |
| Çalışan ürün | Uygulama yayında açılıyor ve söz verdiği işi yapıyor mu? |
| Kod kalitesi ve anlayış | Kod okunaklı mı, takımdaki herkes kendi yazdığı kısmı açıklayabiliyor mu? |
| Takım çalışması | İş takım deposunda paylaşılmış mı, herkes katkı vermiş mi? |
| Kullanıcı deneyimi | Kullanıcı uygulamayı zorlanmadan kullanabiliyor mu? |
| Yapay zekâ kullanımının dürüst kaydı | Raporda yapay zekânın nerede ve nasıl kullanıldığı açıkça yazılmış mı? |

Yıl sonunda projeler bütün üniversitenin gezdiği bir proje sergisinde sergilenebilir. Ders kapsamında en iyi üç proje ödüllendirilir; ödüller Lab grupları sayfasında yazıyor.

## Değerlendirme

| Bileşen | Puan | Açıklama |
| --- | --- | --- |
| Ara sınav | 15 | 60 dakika bilgisayarda uygulamalı (yapay zekâ kapalı, ders notları açık) ve 30 dakika kâğıt üzerinde kavram soruları. Kapsam: sınava kadar işlenen konular. |
| Haftalık teslim | 12 | Hafta 2'den 13'e kadar her hafta bir teslim; en düşük iki notun silinir. Teslim, o haftanın konusunun kendi sayfanda ya da projende uygulanmış hâlidir; kısa bir yapay zekâ notu eklenir. |
| Proje ara teslimleri (M1, M2) | 13 | Takım notu, bireysel katkınla çarpılır. |
| Final sınavı | 25 | 80 dakika uygulamalı (yapay zekâ serbest) ve 40 dakika yazılı (yapay zekâ kapalı). |
| Proje final teslimi (M3) | 20 | Demo Günü, yayındaki uygulama, README ve kısa rapor (yapay zekâ kullanımı bölümü zorunlu). |
| Bireysel kod savunması | 15 | 15 dakika: projeni anlatırsın, bir kodu açıklarsın, küçük bir değişiklik yaparsın. 0–4 ölçeğiyle puanlanır. |

Yıl içi notun 40 puandır (15 + 12 + 13). Yarıyıl sonu notun 60 puandır (25 + 20 + 15). Yarıyıl sonu notu 50'nin altında kalan öğrenci dersten kalır.

Devam şartı teoride en az %70, uygulamada en az %80. Haftalık teslimin uygulama yoklaması sayılır.

## Haftalık teslim

Her hafta iki teslim var ve ikisi de [Lab teslimleri](https://cagrisahin58.github.io/2026-web/teslimler/) sayfasındaki formla yapılır (GitHub hesabınla).

1. Lab sonu teslimi: öğleden sonra bloğu bitmeden. O ana kadar yaptığını gönderirsin. Bu teslim uygulama yoklaması sayılır.
2. Tam teslim: labı izleyen Pazar 23:59'a kadar. Bitmiş hâlini gönderirsin. Aynı haftaya ikinci kez gönderdiğinde yenisi geçerli sayılır.

Formda şunları yazarsın: hafta, öğrenci numarası, ad soyad, yayındaki sayfanın adresi, deponun adresi, varsa düzelttiğin bozuk paketin adresi, yapay zekâ notu.

## Yapay zekâ kuralları

Bu derste yapay zekâ yardımcındır. Her haftanın ders notunda "Yapay zekâyla çalış" kutusu var. O kutu, o hafta yapay zekâya ne sorabileceğini örnek istemlerle gösterir.

İlk sekiz haftada kodu önce sen yazarsın. Yapay zekâya bir satırın ne işe yaradığını sorabilirsin. Aldığın hata mesajını açıklatabilir, konuyu anlayıp anlamadığını görmek için seni sınamasını isteyebilirsin. Bütün sayfayı ya da bütün kodu ona yazdırmazsın.

Hafta 9'dan itibaren kodlama ajanıyla kod ürettirmek serbesttir. Tek şart, üretilen kodun her satırını açıklayabilmendir. Açıklayamadığın kod senin kodun değildir. Kod savunmasında da bu yüzden kendi projenden bir kodu açıklamanı ve üzerinde küçük bir değişiklik yapmanı isteriz.

Sınavlarda yapay zekâ şöyle:

| Sınav | Bölüm | Yapay zekâ |
| --- | --- | --- |
| Ara sınav | 60 dakika bilgisayarda uygulamalı | Kapalı (ders notları açık) |
| Ara sınav | 30 dakika kâğıt üzerinde kavram soruları | Kapalı |
| Final sınavı | 80 dakika uygulamalı | Serbest |
| Final sınavı | 40 dakika yazılı | Kapalı |

Her haftalık teslime üç satırlık bir yapay zekâ notu eklersin:

```text
Ne sordum:
İşe yaradı mı, neyi değiştirdim:
Kendi başıma ne öğrendim:
```

## Araçlar

VS Code'u, Live Server ve GitHub Copilot Chat eklentilerini kurup GitHub hesabını açmayı ilk bilgisayarlı dersten önce evde yaparsın. Adım adım anlatım [kurulum sayfasında](https://cagrisahin58.github.io/2026-web/weeks/hafta-00-kurulum/). Sonraki haftalarda gelen araçları o haftanın dersinde birlikte kurarız.

| Araç | Ne işe yarar? | İlk kullandığımız hafta |
| --- | --- | --- |
| VS Code | Kodunu yazdığın editör | Hafta 0 (evde) |
| Live Server | VS Code eklentisi. Sayfanı tarayıcıda açar, dosyayı kaydettikçe sayfayı yeniler. | Hafta 0 (evde) |
| Chrome ya da Edge DevTools | Tarayıcının içindeki geliştirici araçları. Sayfanın kodunu ve hatalarını görürsün. | Hafta 0 (evde) |
| GitHub Copilot | VS Code içindeki yapay zekâ yardımcısı. Chat her hafta, ajan kipi Hafta 9'dan itibaren. | Hafta 0 (evde) |
| GitHub ve GitHub Pages | Kodunu sakladığın ve sayfanı yayınladığın yer; takım kaydı ve haftalık teslim de burada | Hafta 1 |
| Git | Değişikliklerin geçmişini tutan program | Hafta 5 |
| Node.js ve Express | Sunucunu yazdığın ortam ve kütüphane | Hafta 6 |
| SQLite ve bulut veritabanı | Verileri sakladığın veritabanı | Hafta 7 |
| Barındırma servisi | Uygulamanı internete koyduğun yer | Hafta 8 |
| Kodlama ajanı ve dil modeli API'si | Kod üreten ajan; uygulamana eklediğin yapay zekâ | Hafta 10, 11 |
