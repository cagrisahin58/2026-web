# YZM205 Web Tasarımı ve Programlama · Ders planı

Muş Alparslan Üniversitesi · Mühendislik-Mimarlık Fakültesi · Yazılım Mühendisliği 2. sınıf · 2026–2027 Güz

Yürütücü: Arş. Gör. Çağrı ŞAHİN

Perşembe · teori 10:00–11:45 · uygulama (lab) 15:00–16:45 · derslik BLD-104

Etkileşimli sürüm: [cagrisahin58.github.io/2026-web/docs/syllabus.html](https://cagrisahin58.github.io/2026-web/docs/syllabus.html)

Güncelleme: 23 Eylül 2026

## Dersin amacı

WhatsApp Web, YouTube, e-Devlet: her gün açtığın bu sitelerin hepsi birer web uygulaması. Dönemin sonunda sen de takımınla birlikte küçük ama gerçek bir web uygulaması yapıp internete koymuş olacaksın. Sayfaları tarayıcıda açılan, arkasında bir sunucu ve bir veritabanı çalışan bir uygulama. Bugün kodun bir kısmını yapay zekâ yazabiliyor. Neyin yapılacağına karar vermek, çıkan kodu anlamak ve doğru çalışıp çalışmadığını kontrol etmek yine insanın işi. Bu derste o insan olmayı öğreneceksin.

Peki yapay zekâ bir sayfayı saniyeler içinde yazabiliyorsa HTML'i, CSS'i, JavaScript'i neden tek tek öğreniyoruz? Çünkü yapay zekâ çoğu zaman neredeyse doğru kod verir ve aradaki küçük hatayı ancak kodu okuyabilen biri fark eder. O yüzden Hafta 2 ile Hafta 9 arasında kodu önce sen yazarsın. Temeller oturunca, Hafta 10'dan itibaren kodlama ajanıyla daha hızlı çalışırsın. Kuralların ayrıntısı aşağıda, "Yapay zekâ kuralları" başlığında.

## Haftalık ritim

Her Perşembe iki blok var. Sabah 10:00–11:45 arası konu anlatılır. Hoca yeni kavramları o haftanın ders notundan anlatır ve canlı örnekle gösterir. 105 dakikanın ortasında 10 dakika ara verilir.

Ders notu slayt değil, tarayıcıda açılan bir sayfa. İçinde küçük denemeler (simülasyonlar) ve cevabı açıklanan sorular var. Soruların bir kısmını derste birlikte çözeriz, kalanını evde sen çözersin.

Öğleden sonra 15:00–16:45 arası lab var. Kendi dizüstünle gelirsin, kampüs Wi-Fi'ına bağlanırsın. Lab da 105 dakika sürer, arada 5 dakika ara verilir. Her lab üç adımdan oluşur:

1. Yap: Haftanın konusunu adım adım uygulayıp kendi çalışan sayfanı ya da kodunu ortaya çıkarırsın.
2. Boz: İçine bilerek üç hata konmuş bir kodu alır, hataları bulup düzeltirsin.
3. Anlat: Haftanın bir sorusunu yanındaki arkadaşına 60 saniyede kendi cümlelerinle anlatırsın.

Lab bitmeden teslim formunu doldurursun. Ayrıntısı aşağıda, "Lab teslimi" başlığında.

## 14 haftalık plan

Tarihler Perşembe günleridir. 29 Ekim Cumhuriyet Bayramı'dır, o hafta ders yok. Hafta 6 (9–13 Kasım) ara sınav haftasıdır, o hafta da ders yapılmaz. Demo Günü final haftasının ilk Perşembesine, 7 Ocak'a denk gelir. Puanlanan 11 lab var: Hafta 2, 3, 4, 5, 7, 8, 9, 10, 11, 12 ve 13.

### Hafta 1 · 1 Ekim · Tanışma: yapay zekâ çağında web yazılımcısı olmak

Sabah konu anlatımı yok. Dersi, dönemin haritasını ve takım projesini tanırsın. HTML, CSS, JavaScript, sunucu, veritabanı ve yapay zekâya birer küçük tadımlık bakarız.

Öğleden sonra bilgisayar yok: dörtlü masalarda tanışırız, kampüs hayatından site fikirleri çıkarırız ve yapay zekâ çağında bu işi neden öğrendiğimizi konuşuruz. Puan yok, teslim yok. Bilgisayarlı ilk ders 8 Ekim. O güne kadar Hafta 0 kurulum sayfasındaki beş adımı evde yaparsın.

[Hafta 1 ders notu](https://cagrisahin58.github.io/2026-web/weeks/hafta-01/) · [Hafta 0 kurulum sayfası](https://cagrisahin58.github.io/2026-web/weeks/hafta-00-kurulum/)

### Hafta 2 · 8 Ekim · HTML: sayfanın iskeleti

Bir web sayfasının aslında bir metin dosyası olduğunu görürsün. Tarayıcının bu dosyayı sunucudan nasıl alıp ekrana çizdiğini anlarsın. Etiket, öğe ve niteliğin ne olduğunu ve etiketlerin iç içe nasıl geçtiğini öğrenirsin. Bir HTML belgesinin iskeletini satır satır yazarsın. Başlık, paragraf ve liste kullanırsın. Bağlantı ve görsel eklerken dosya yolunun mantığını çözersin. Sayfanı header (üst kısım), nav (menü), main (ana içerik) ve footer (alt kısım) bölümlerine ayırırsın.

Labda kişisel sayfanı adım adım yaparsın, GitHub'a web arayüzünden yükleyip GitHub Pages ile yayınlarsın. Boz adımında bozuk bir sitede üç hata ararsın.

### Hafta 3 · 15 Ekim · CSS: sayfaya görünüş vermek

CSS'in ne olduğunu ve HTML'e nasıl bağlandığını öğrenirsin. Seçicilerle (etiket ve sınıf) hangi öğeyi biçimlendireceğini söylersin. Renk, yazı tipi ve boşluk verirsin. Her öğenin bir kutu olduğunu görürsün. Bu kutunun dış boşluğu margin, çerçevesi border, iç boşluğu padding adını taşır. Flexbox adlı CSS yöntemiyle öğeleri yan yana dizersin. Ekran genişliğine göre devreye giren tek bir kuralla, yani bir media query ile sayfanı telefonda da düzgün gösterirsin.

Labda kişisel sayfanı biçimlendirirsin. Boz adımında bozuk bir stil dosyasında üç hata bulursun.

### Hafta 4 · 22 Ekim · JavaScript 1: dilin temelleri

İlk JavaScript kodunu tarayıcı konsolunda çalıştırırsın. Değişken (let, const) ve veri türlerini, koşulu (if), döngüyü (for), fonksiyonu ve diziyi JavaScript'te yazarsın. Bu fikirlerin çoğunu YZM103'ten tanıyorsun. Burada aynı fikirlerin JavaScript'te nasıl yazıldığını görürsün.

Labda küçük hesaplayıcılar yaparsın: not ortalaması, KDV, çarpım tablosu. Boz adımında bozuk bir kodda üç hata bulursun.

Proje: M0. Dört kişilik takımlar dersin öğle arasında kurulur, labın sonunda takım adı ve fikir netleşir. Her takım proje fikrini, uygulamanın kimin için olduğunu ve üç ekranın kâğıt üzerindeki taslağını Pazar 1 Kasım 23:59'a kadar ayrı bir M0 formuyla teslim eder.

### 29 Ekim · Ders yok (Cumhuriyet Bayramı)

Ders ve lab yok. Takımın ilk buluşmasını bu hafta kendi aranızda yaparsınız.

### Hafta 5 · 5 Kasım · JavaScript 2: sayfayı canlandırmak

DOM'un ne olduğunu öğrenirsin. DOM, tarayıcının sayfadaki öğeleri JavaScript'in erişebileceği biçimde tuttuğu yapıdır. querySelector ile bir öğe seçer, metnini ve sınıfını değiştirirsin. click ve input olaylarını dinlersin. Formdan değer okur, listeye yeni öğe eklersin.

Labda bir yapılacaklar listesi uygulaması yaparsın. Boz adımında bozuk bir kodda üç hata bulursun.

### Hafta 6 · 9–13 Kasım · Ara sınav haftası, ders yok

Ara sınav bu haftadır ve Hafta 2–5 konularını kapsar. Sınavın biçimi "Değerlendirme" başlığında.

### Hafta 7 · 19 Kasım · Sunucu: tarayıcının konuştuğu program

HTTP, tarayıcı ile sunucunun konuşurken uyduğu kurallardır. Tarayıcı bir istek gönderir, sunucu bir yanıt döner. Veri isteyen GET ile veri gönderen POST'un farkını görürsün. "Tamam" anlamına gelen 200 ile "bulunamadı" anlamına gelen 404'ü tanırsın. Verinin JSON biçiminde, yani programların kolayca okuduğu düz bir metin olarak nasıl taşındığını öğrenirsin. Bilgisayarına Node.js kurarsın. Node.js, JavaScript'i tarayıcının dışında çalıştıran programdır. Express kütüphanesiyle ilk sunucunu yazarsın. Sunucunda bir rota, yani `/soz` gibi bir adres tanımlayıp oradan JSON döndürürsün. Sonra sayfandaki JavaScript'ten fetch komutuyla kendi sunucuna istek gönderirsin.

Labda kendi küçük API'ni yaparsın. API, başka bir programın senin sunucuna soru sorup cevap aldığı kapıdır. Seninki örneğin günün sözünü verebilir. Boz adımında bozuk bir sunucuda üç hata bulursun.

### Hafta 8 · 26 Kasım · Veritabanı: veriyi saklamak

Tablo, satır ve sütunun ne olduğunu öğrenirsin. Birincil anahtar, her satırı ötekilerden ayıran değerdir, çoğu zaman bir numara. Veritabanıyla SQL dilinde konuşursun. SQL ile veri okursun (SELECT), eklersin (INSERT), süzersin (WHERE), sıralarsın (ORDER BY), güncellersin (UPDATE) ve silersin (DELETE). Veritabanı olarak tek bir dosyada duran SQLite'ı kullanırsın. Sunucundan veritabanına yazıp okursun.

Labda bir ziyaretçi defteri yaparsın: form, sunucu, veritabanı ve liste birbirine bağlanır. Boz adımında bozuk bir sorguda üç hata bulursun.

### Hafta 9 · 3 Aralık · Git ve GitHub ile takım çalışması

Bilgisayarına Git kurarsın. Git, dosyalarında yaptığın her değişikliğin geçmişini tutan programdır. Yaptığın değişikliği commit ile kaydeder, push ile GitHub'a gönderir, pull ile takım arkadaşının değişikliğini alırsın. Ana kodu bozmadan çalışmak için kendi dalını (branch) açarsın. İşin bitince pull request ile değişikliğini takıma "bakın, uygunsa ekleyelim" diye sunarsın. İki kişi aynı satırı değiştirdiğinde çıkan çakışmayı (conflict) çözersin.

Labda takım deposu kurulur, herkes bir dal açıp pull request gönderir. Bilerek çıkarılmış bir çakışmayı çözersin.

Proje: takım deposu açılır.

### Hafta 10 · 10 Aralık · Yapay zekâ ile geliştirme

Yapay zekânın nasıl kod yazdığını ve nerede yanıldığını görürsün. İstem, yapay zekâya yazdığın istektir. İyi istem yazmayı öğrenirsin: bağlam verirsin, tek bir görev istersin, açıklama istersin. Kodlama ajanı, verdiğin göreve göre dosyalarını kendisi değiştiren yapay zekâdır. Onunla (Copilot ajan modu) çalışırsın. Üretilen kodu okur ve test edersin.

Labda ajanla projene bir özellik eklersin ve her satırını açıklarsın. Ajanın bıraktığı üç hatayı bulursun.

Proje: M1. HTML, CSS ve JavaScript ile yapılmış prototip (uygulamanın ilk deneme sürümü), takım deposundan yayında.

### Hafta 11 · 17 Aralık · Güvenlik ve kullanıcı girişi

Parolanın neden düz metin olarak saklanmadığını öğrenirsin. Hash, parolayı geri çözülemeyen bir karakter dizisine çevirir. Çerez, tarayıcının bir site için sakladığı küçük nottur. Oturum da sitenin, giriş yaptığını bu not sayesinde hatırlamasıdır. İki açığı tanırsın. XSS'te saldırgan sayfaya kendi JavaScript kodunu sokar. SQL enjeksiyonunda form kutusuna yazdığı metinle veritabanı sorgusunu değiştirir. Gizli anahtarlar, bir servise bağlanmak için kullanılan şifre gibi metinlerdir. Bunların neden koda ve depoya yazılmadığını öğrenirsin.

Labda ziyaretçi defterine kullanıcı girişi eklersin. İçindeki açıkları bulup kapatırsın.

### Hafta 12 · 24 Aralık · Web uygulamasına yapay zekâ eklemek

Dil modeli, sohbet eden yapay zekâ programlarının arkasındaki modeldir. Bir dil modeli API'sinin, yani programının modele soru sorduğu kapının ne olduğunu öğrenirsin. API anahtarının neden sunucuda kalması gerektiğini görürsün. Sunucundan modele istek atarsın. Modelin cevabına körü körüne güvenmez, kullanmadan önce doğrularsın.

Labda projene küçük bir yapay zekâ özelliği eklersin.

Proje: M2. Sunucusu ve veritabanı bağlı, çalışan sürüm.

### Hafta 13 · 31 Aralık · Yayına alma ve modern araçlara bakış

Sunucunu ve veritabanını internete koymayı öğrenirsin. Ortam değişkeni, kodun içine değil sunucunun ayarlarına yazılan bir değerdir. Gizli bilgileri ve ayarları bununla kodun dışında tutarsın. Çerçeve, büyük bir uygulamayı düzenli yazmak için hazır bir yapıdır. React gibi çerçevelerin hangi sorunu çözdüğüne kısa bir tanıtımla bakarsın.

Labda yayın yolunu birlikte kurarız. Projeni yayına alır, son hazırlığı yaparsın.

Proje: final kodu 6 Ocak 23:59'da dondurulur. Bu saatten sonra takım deposuna yapılan değişiklik değerlendirilmez.

### Hafta 14 · 7 Ocak · Demo Günü

Final haftasının ilk Perşembesi, ders saatlerinde. Sabah ve öğleden sonra blokları Demo Günü'ne ayrılır. 14 takımın her biri 7 dakika demo yapar, ardından 3 dakika soru gelir. Toplam 140 dakika.

Proje: M3, final teslimi.

### Final haftası · 4–15 Ocak 2027

Final sınavı ve bireysel kod savunmaları bu iki haftada yapılır, Demo Günü'nden sonra. Savunma öğrenci başına 15 dakikadır.

### Bütünleme · 18–22 Ocak 2027

Bütünleme sınavı final sınavının yerine geçer ve onunla aynı biçimdedir. Proje ve savunma notların korunur.

## Dönem projesi

56 kişiyiz. Dört kişilik 14 takım kuracağız. Takımlar Hafta 4'te kurulur.

Her takım gerçek bir kullanıcı için birkaç sayfalık bir web uygulaması yapar. Ön yüz HTML, CSS ve JavaScript ile yazılır. Arkada bir Express sunucusu ve bir SQLite veritabanı çalışır. Uygulamada küçük bir yapay zekâ özelliği bulunur. Dönem sonunda uygulama yayındadır, yani herkes adresinden açabilir. Fikir örnekleri: kulüp etkinliklerine kayıt, kantin siparişi, ders notu paylaşımı, laboratuvar cihazı rezervasyonu.

Kilometre taşları:

| Taş | Tarih | Ne teslim edilir? |
| --- | --- | --- |
| M0 | 22 Ekim (Hafta 4), teslim Pazar 1 Kasım 23:59 | Takım, proje fikri, kullanıcı ve üç ekranın kâğıt taslağı |
| M1 | 10 Aralık (Hafta 10), teslim Pazar 13 Aralık 23:59 | HTML, CSS ve JavaScript prototip, takım deposundan yayında |
| M2 | 24 Aralık (Hafta 12), teslim Pazar 27 Aralık 23:59 | Sunucusu ve veritabanı bağlı, çalışan sürüm |
| M3 | 7 Ocak (Hafta 14) | Demo Günü ve final teslimi: yayındaki uygulama, README (projeyi tanıtan metin dosyası), kısa rapor |

Final kodu 6 Ocak 23:59'da dondurulur. Final raporunda yapay zekâ kullanımını anlatan bir bölüm zorunludur.

Ara teslimlerde (M0, M1, M2) takım notu, senin bireysel katkınla çarpılır. Takımda iş yapmayan, takımın aldığı notu olduğu gibi almaz.

Final teslimi şu başlıklarla değerlendirilir:

| Başlık | Neye bakılır? |
| --- | --- |
| Çalışan ürün | Uygulama yayında açılıyor ve söz verdiği işi yapıyor mu? |
| Kod kalitesi ve anlayış | Kod okunaklı mı, takımdaki herkes kendi yazdığı kısmı açıklayabiliyor mu? |
| Takım çalışması | İş takım deposunda paylaşılmış mı, herkes katkı vermiş mi? |
| Kullanıcı deneyimi | Kullanıcı uygulamayı zorlanmadan kullanabiliyor mu? |
| Yapay zekâ kullanımının dürüst kaydı | Raporda yapay zekânın nerede ve nasıl kullanıldığı açıkça yazılmış mı? |

## Değerlendirme

| Bileşen | Puan | Açıklama |
| --- | --- | --- |
| Ara sınav (9–13 Kasım) | 15 | 60 dakika bilgisayarda uygulamalı (yapay zekâ kapalı, ders notları açık) ve 30 dakika kâğıt üzerinde kavram soruları. Kapsam Hafta 2–5. |
| Haftalık lab | 12 | 11 lab (Hafta 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13). En düşük 2 lab notun silinir. Her labda çalışan sayfa ya da kod, bozuk kodun düzeltmesi ve kısa yapay zekâ notu teslim edilir. |
| Proje ara teslimleri (M0, M1, M2) | 13 | Takım notu, bireysel katkınla çarpılır. |
| Final sınavı | 25 | 80 dakika uygulamalı (yapay zekâ serbest) ve 40 dakika yazılı (yapay zekâ kapalı). |
| Proje final teslimi (M3) | 20 | Demo Günü, yayındaki uygulama, README ve kısa rapor (yapay zekâ kullanımı bölümü zorunlu). |
| Bireysel kod savunması | 15 | 15 dakika: projeni anlatırsın, bir kodu açıklarsın, küçük bir değişiklik yaparsın. 0–4 ölçeğiyle puanlanır. |

Yıl içi notun 40 puandır (15 + 12 + 13). Yarıyıl sonu notun 60 puandır (25 + 20 + 15). Yarıyıl sonu notu 50'nin altında kalan öğrenci dersten kalır.

Devam şartı teoride en az %70, uygulamada en az %80. Lab teslimin uygulama yoklaması sayılır. En düşük iki lab notunun silinmesi devam şartını değiştirmez.

## Lab teslimi

Her lab haftasında iki teslim var ve ikisi de aynı Google Form ile yapılır. Formun bağlantısı derste ve sınıf kanalında paylaşılır.

1. Lab sonu teslimi: Perşembe 16:45'e kadar. Labda o ana kadar yaptığını gönderirsin. Bu teslim uygulama yoklaması sayılır.
2. Tam teslim: Pazar 23:59'a kadar. Labın bitmiş hâlini gönderirsin.

Örnek olarak Hafta 2'de lab sonu teslimi 8 Ekim Perşembe 16:45'e, tam teslim 11 Ekim Pazar 23:59'a kadardır.

Formda şunları dolduracaksın:

- Ad soyad
- Öğrenci numarası
- GitHub kullanıcı adı
- Teslim türü (lab sonu ya da tam teslim)
- Yayındaki sayfanın adresi (o hafta yayın varsa)
- Deponun adresi (Hafta 2'de açtığın kullaniciadi.github.io deposu ya da labda söylenen depo)
- Yapay zekâ notu

## Yapay zekâ kuralları

Bu derste yapay zekâ yardımcındır. Her haftanın ders notunda "Yapay zekâyla çalış" kutusu var. O kutu, o hafta yapay zekâya ne sorabileceğini örnek istemlerle gösterir.

Hafta 2 ile Hafta 9 arasında kodu önce sen yazarsın. Yapay zekâya bir satırın ne işe yaradığını sorabilirsin. Aldığın hata mesajını açıklatabilir, konuyu anlayıp anlamadığını görmek için seni sınamasını isteyebilirsin. Bütün sayfayı ya da bütün kodu ona yazdırmazsın.

Hafta 10'dan itibaren kodlama ajanıyla kod ürettirmek serbesttir. Tek şart, üretilen kodun her satırını açıklayabilmendir. Açıklayamadığın kod senin kodun değildir. Kod savunmasında da bu yüzden kendi projenden bir kodu açıklamanı ve üzerinde küçük bir değişiklik yapmanı isteriz.

Sınavlarda yapay zekâ şöyle:

| Sınav | Bölüm | Yapay zekâ |
| --- | --- | --- |
| Ara sınav | 60 dakika bilgisayarda uygulamalı | Kapalı (ders notları açık) |
| Ara sınav | 30 dakika kâğıt üzerinde kavram soruları | Kapalı |
| Final sınavı | 80 dakika uygulamalı | Serbest |
| Final sınavı | 40 dakika yazılı | Kapalı |

Her lab teslimine üç satırlık bir yapay zekâ notu eklersin:

```text
Ne sordum:
İşe yaradı mı, neyi değiştirdim:
Kendi başıma ne öğrendim:
```

## Araçlar

Dönem boyunca kullanacağımız araçlar aşağıda. VS Code'u, Live Server ve GitHub Copilot Chat eklentilerini kurup GitHub hesabını açmayı 8 Ekim'den önce evde yaparsın. Adım adım anlatım [kurulum sayfasında](https://cagrisahin58.github.io/2026-web/weeks/hafta-00-kurulum/). Eksik kalanı Hafta 2 labının başında birlikte bitiririz. Hafta 12'de kullanacağımız dil modeli servisini ve Hafta 13'teki yayın yolunu o haftanın dersinde birlikte kuracağız.

| Araç | Ne işe yarar? | İlk kullandığımız hafta |
| --- | --- | --- |
| VS Code | Kodunu yazdığın editör | Hafta 0 (evde) |
| Live Server | VS Code eklentisi. Sayfanı tarayıcıda açar, dosyayı kaydettikçe sayfayı yeniler. | Hafta 0 (evde) |
| Chrome ya da Edge DevTools | Tarayıcının içindeki geliştirici araçları. Sayfanın kodunu ve hatalarını görürsün. | Hafta 0 (evde) |
| GitHub Copilot | VS Code içindeki yapay zekâ yardımcısı. Copilot Chat her hafta, ajan modu Hafta 10'dan itibaren. | Hafta 0 (evde) |
| GitHub ve GitHub Pages | Kodunu sakladığın ve sayfanı yayınladığın yer. Git'i Hafta 9'da bilgisayarına kurarsın. | Hafta 0 (hesap), Hafta 2 (yayın) |
| Google Form | Haftalık lab teslimi | Hafta 2 |
| Node.js ve Express | Sunucunu yazdığın ortam ve kütüphane | Hafta 7 |
| SQLite | Verileri sakladığın veritabanı | Hafta 8 |
