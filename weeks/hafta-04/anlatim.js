window.ANLATIM = {
 "klasor": "ses",
 "ses": "tr-TR-EmelNeural",
 "hiz": "-10%",
 "ekranlar": {
  "kapak": [
   {
    "m": "Merhaba. Bugün dersimizde yeni bir döneme başlıyoruz. Geçen haftalarda HTML ve CSS ile bir sayfanın nasıl yazıldığını gördünüz. Bundan sonra kodu çoğunlukla yapay zekâ kodlama araçlarıyla yazacaksınız. Biz bu derste kodun yazımından çok, bir web ürününün hangi parçalardan oluştuğunu, bu parçalar için hangi hazır servislerin olduğunu ve nerede neyi kontrol etmeniz gerektiğini konuşacağız."
   },
   {
    "m": "Ekrandaki soru bugünün sorusu: kodu yapay zekâ yazıyorsa, sen ne bilmelisin? Bu soruyu dersin sonunda birlikte cevaplayacağız. Önce bugün neler kazanacağınıza bakalım."
   },
   {
    "adim": true,
    "m": "Birincisi: bir web uygulamasının üç parçasını gerçek bir örnekle anlatabileceksiniz. Bu üç parça, dönem boyunca konuşacağımız her şeyin iskeleti."
   },
   {
    "adim": true,
    "m": "İkincisi: bu parçalar için kullanılan hazır servislerin, yani GitHub, Supabase ve Vercel gibi araçların ne işe yaradığını bileceksiniz. Bunları ilk kez duyuyor olabilirsiniz; sorun değil, hepsini tek tek açacağız."
   },
   {
    "adim": true,
    "m": "Üçüncüsü ve en önemlisi: atölyede takımınızın ürününün ilk sayfası internette, herkesin açabileceği bir adreste olacak. Yani bugün yalnız dinlemeyecek, bir şey de yayına çıkaracaksınız. Önce gerçek bir olayla başlayalım."
   }
  ],
  "hikaye": [
   {
    "m": "Lovable adında bir araç var. Ona bir fikir yazıyorsunuz; örneğin, öğrencilerin kitap takası yapabileceği bir site istiyorum diyorsunuz. Araç birkaç dakika içinde çalışan bir uygulama üretiyor: sayfaları, giriş ekranını, veritabanını, hepsini kendisi kuruyor. Ekrandaki cümle aracın vaadi: fikrini yaz, uygulama hazır."
   },
   {
    "adim": true,
    "m": "Bu araç çok sevildi. Kurulduktan sonraki sekiz ayda dünyanın en hızlı büyüyen yazılım şirketlerinden biri oldu. Yüz binlerce kişi onunla uygulama yaptı, ve bu kişilerin önemli bir kısmı yazılımcı bile değildi. Fikri olan herkes ürün çıkarabiliyordu."
   },
   {
    "adim": true,
    "m": "Aynı dönemde bir güvenlik araştırmacısı, bu araçla yapılmış uygulamalara yakından bakmaya karar verdi. Bin altı yüz kırk beş uygulamayı inceledi. Bunların yüz yetmişinde kullanıcıların bilgileri herkese açıktı: telefon numaraları, ödeme bilgileri, hatta başka servislere ait gizli anahtarlar. Uygulamanın adresini bilen herkes bu bilgileri okuyabiliyordu. Bu açık resmi olarak kayda geçti."
   },
   {
    "m": "Peki sizce sorun neydi? Bir sonraki ekranda tahmininizi isteyeceğim."
   }
  ],
  "sinifca-acik": [
   {
    "m": "Dört seçenek var. Birincisi: aracı yapan şirketin sunucuları mı ele geçirildi? İkincisi: kullanıcılar zayıf şifreler mi seçmişti? Üçüncüsü: kod mu hatalıydı, uygulamalar mı çalışmıyordu? Dördüncüsü: uygulamalar çalışıyordu, ama veritabanında kim neyi okuyabilir kuralı mı yoktu? Kırk beş saniye düşünün, yanınızdakiyle konuşun, sonra elinizi kaldırın.",
    "dusun": 45
   },
   {
    "eylem": "cevap",
    "m": "Doğru cevap dördüncü seçenek. Uygulamalar çalışıyordu. Kodu yapay zekâ düzgün yazmıştı: sayfalar açılıyor, giriş yapılıyor, ilanlar ekleniyordu. Kimse sunuculara saldırmadı, kimse şifre kırmadı. Eksik olan tek şey bir kontroldü: veritabanında, hangi bilgiyi kimin okuyabileceğini söyleyen kural yazılmamıştı."
   },
   {
    "m": "Bu çok önemli bir ders. Sorun kodun yazımında değildi; sorun, ürünün parçalarını ve kontrolün nerede durması gerektiğini bilmemekteydi. Yapay zekâ çalışan bir uygulama yazdı, ama kapıyı kilitlemeyi unuttu. Bu ders size tam olarak bunu öğretecek: bir ürünün parçaları neler, ve kontrol nerede durmalı. İlk fikirle başlayalım."
   }
  ],
  "uc-parca": [
   {
    "m": "Birinci fikir: her web uygulaması üç parçadan oluşur. Bunu hepinizin her dönem kullandığı bir sistemle anlatayım: OBS. Notlarınıza bakmak için OBS'ye girdiğinizi düşünün. Şemadaki turuncu nokta sizin isteğiniz, yeşil nokta size dönen cevap. Nokta soldan sağa gidiyor, sonra geri dönüyor.",
    "eylem": "oynat",
    "bekle": 2
   },
   {
    "adim": true,
    "m": "Birinci parça ekran. Notlarınızı gördüğünüz sayfa sizin tarayıcınızda, yani sizin bilgisayarınızda ya da telefonunuzda çalışır. Kitaplarda buna ön yüz ya da istemci denir. Siz notlarımı göster düğmesine bastığınızda ekran bu isteği bir yere gönderir. Ekranın kendisinde notlarınız yoktur; ekran yalnızca ister ve gelen cevabı gösterir."
   },
   {
    "adim": true,
    "m": "İkinci parça program. İsteğiniz üniversitenin bilgisayarında çalışan bir programa gider. Kitaplarda buna arka uç ya da sunucu denir. Programın ilk işi, isteği gönderenin kim olduğuna bakmaktır. Giriş yapmış mısınız, oturumunuz geçerli mi, gerçekten o öğrenci misiniz? Bu kontrol geçmeden program hiçbir bilgi vermez."
   },
   {
    "adim": true,
    "m": "Üçüncü parça veritabanı. Notlarınız tablolarda durur. Bir tablo düşünün: her satırda bir öğrenci numarası, bir ders kodu ve bir not var. Program veritabanına şunu der: bu öğrencinin notlarını ver. Veritabanı ilgili satırları bulur ve programa verir; program da onları ekrana yollar. Ekran da gelen satırları düzgün bir tabloya çevirip size gösterir."
   },
   {
    "m": "Bir şeye dikkat edin: bu üç parça farklı bilgisayarlarda çalışıyor. Ekran sizin elinizdeki cihazda; program ve veritabanı ise üniversitenin bilgisayarlarında, çoğu zaman bir veri merkezinde. Aralarındaki bağlantıyı internet sağlıyor. İnternetiniz kesilirse ekran açık kalır ama yeni bilgi gelmez. Program çökerse sayfa açılır ama notlar gelmez. Veritabanına ulaşılamazsa program size bir hata mesajı gösterir. Bir sorunla karşılaştığınızda ilk soru hep şu olacak: sorun hangi parçada?"
   },
   {
    "eylem": "oynat",
    "m": "Şemayı bir kez daha izleyelim. İstek ekrandan çıkıyor, programdan geçiyor, veritabanına ulaşıyor. Cevap aynı yoldan geri dönüyor: veritabanından programa, programdan ekrana. Bütün bu yolculuk çoğu zaman bir saniyeden kısa sürer.",
    "bekle": 2
   }
  ],
  "ornekler": [
   {
    "m": "Bu üç parça yalnız OBS'de yok; kullandığınız her uygulamada var. Birkaç örneğe bakalım."
   },
   {
    "adim": true,
    "m": "OBS'yi az önce gördük. Ekran not sayfası. Program sizin kim olduğunuza bakıyor ve notlarınızı istiyor. Veritabanında notlar tablosu var."
   },
   {
    "adim": true,
    "m": "Trendyol'da bir ürünü sepete atıp siparişi tamamla dediğinizi düşünün. Ekran sepet ve sipariş sayfası. Program o ürünün stokta olup olmadığına bakıyor, ödemenin geçip geçmediğini kontrol ediyor. Veritabanında ürünler, stoklar ve siparişler tabloları var. Siparişiniz o tabloya yeni bir satır olarak yazılıyor."
   },
   {
    "adim": true,
    "m": "Instagram'da bir gönderiyi beğendiğinizde de aynı şey olur. Ekran kalp düğmesi. Program beğeniyi kaydediyor ve gönderinin sahibine bildirim gidip gitmeyeceğine karar veriyor. Veritabanında gönderiler ve beğeniler tabloları var. Kalbin kırmızıya dönmesi ekranın işi; beğeninin gerçekten kaydedilmesi programın ve veritabanının işi."
   },
   {
    "adim": true,
    "m": "Son satır sizin. Takımınızın ürününde ekran ne olacak, program neyi kontrol edecek, veritabanında hangi tablolar olacak? Bu soruyu bugünkü görevde README dosyanıza yazacaksınız. Şimdi bir tahmin sorusu."
   }
  ],
  "sinifca-kontrol": [
   {
    "m": "Soru şu: başkasının notunu görmenizi engelleyen kontrol nerede olmalı? Ekranda mı, yani başkasının notunu göstermeyen bir sayfa yeterli mi? Arkadaki programda ve veritabanında mı? Sayfanın kaynağını gizlemekte mi? Yoksa şifrenin uzunluğunda mı? Kırk saniye düşünün.",
    "dusun": 40
   },
   {
    "eylem": "cevap",
    "m": "Doğru cevap: arkadaki programda ve veritabanında. Nedeni şu. Ekran sizin bilgisayarınızda çalışır. Tarayıcıda F12 tuşuna basıp sayfanın kodunu değiştirebilirsiniz; gizli bir düğmeyi görünür yapabilir, bir isteği elle yeniden gönderebilirsiniz. Yani ekranda yapılan kontrolü, biraz bilen herkes aşabilir."
   },
   {
    "m": "Program ve veritabanı ise sizin dokunamadığınız bir bilgisayarda çalışır. Oradaki kontrolü kullanıcı değiştiremez. Bu yüzden kural şudur: ekran kullanıcıya kolaylık sağlar, güvenliği ise program ve veritabanı sağlar. Açılıştaki yüz yetmiş uygulamada eksik olan tam buydu: ekranlar düzgündü, ama veritabanında kural yoktu. Şimdi ekranın programla konuşmasını gözümüzle görelim."
   }
  ],
  "gosteri-network": [
   {
    "m": "Bunu kendi bilgisayarınızda da yapabilirsiniz; adımlar ekranda. Chrome'da Türkçe Vikipedi'yi açın. F12 tuşuna basın; geliştirici araçları açılır. Üstteki sekmelerden Network'e geçin. Network, sayfanın arka planda gönderdiği bütün istekleri tek tek listeler."
   },
   {
    "m": "Sonra süzgeçten Fetch/XHR seçeneğini seçin; böylece yalnız veri isteklerini görürsünüz. Arama kutusuna yavaşça Muş yazın. Her harfte listeye yeni bir satır düşer, çünkü her harfte ekran programa şunu soruyor: bu harflerle başlayan maddeleri öner. Bir satıra tıklayıp Response sekmesini açarsanız, programın gönderdiği cevabı görürsünüz. Bir sonraki ekranda bunu bir benzetimle adım adım izleyelim."
   }
  ],
  "network-sim": [
   {
    "eylem": "oynat",
    "m": "Şimdi gördüğünüz, az önce anlattığımız şeyin bir benzetimi. Solda arama kutusu, sağda Network listesi. Harfler yazıldıkça izleyin.",
    "bekle": 4
   },
   {
    "m": "Her harften sonra listeye bir satır eklendi. Her satır bir istek. Adresinde aranan harfler var: önce M, sonra M u, sonra Muş. Yanında iki yüz yazıyor. İki yüz, programın, tamam, isteğini anladım, cevabı gönderiyorum demesidir. Aranan şey bulunamasaydı dört yüz dört görürdünüz. Yanındaki milisaniye de cevabın ne kadar sürede geldiğini gösterir: kırk milisaniye civarı, yani bir saniyenin yirmi beşte biri."
   },
   {
    "m": "Alttaki kutu son isteğin cevabı. Ekranda gördüğünüz öneri listesi, programdan aslında böyle düz bir veri olarak geliyor: köşeli parantez içinde üç metin. Ekran bu veriyi alıp düzgün bir açılır listeye çeviriyor. Yani ekran bilgiyi kendisi üretmiyor; programdan istiyor ve gösteriyor. Şimdi sıra sizde."
   }
  ],
  "bak-network": [
   {
    "eylem": "sayac",
    "m": "Kendi dizüstünüzü açın. Sık kullandığınız bir siteyi açın: YouTube, Trendyol, ne isterseniz. F12'ye basın, Network sekmesine geçin, sonra sayfayı yenileyin. Altta kaç istek yazdığına bakın ve yanınızdakiyle karşılaştırın. Sonra Fetch/XHR süzgecini seçin, bir satıra tıklayın ve Response sekmesinde ne geldiğine bakın. Üç dakikanız var; süre şimdi başlıyor."
   },
   {
    "m": "Süre doldu. Muhtemelen onlarca, belki yüzlerce istek gördünüz. Basit görünen bir sayfa bile açılırken programla defalarca konuşuyor: resimler, yazı tipleri, öneriler, reklamlar, istatistikler. Her biri ayrı bir istek. Şimdi aynı yolculuğu kısa bir videoda izleyeceğiz."
   }
  ],
  "video-istek": [
   {
    "m": "Videoyu izlemeden önce bir soru: adres çubuğuna bir site adı yazdığınızda, bilgisayarınız o siteyi nasıl buluyor? İzlerken cevabını arayın."
   },
   {
    "adim": true,
    "m": "Bir ipucu: videoda istemci sözcüğü geçtiğinde bizim ekranı, sunucu sözcüğü geçtiğinde bizim programı düşünün. Video dört dakika."
   },
   {
    "eylem": "video",
    "sure": 242
   },
   {
    "adim": true,
    "m": "Video bitti. Adres çubuğuna yazdığımız ad önce bilgisayarın bulabileceği sayısal bir adrese çevriliyor; sonra istek o adrese gidiyor, cevap aynı yoldan geri dönüyor. OBS'de not ekranına bakarken de aynısı oluyor: önce OBS'nin adresi bulunuyor, sonra isteğiniz programa gidiyor, program veritabanına soruyor ve cevap size dönüyor. Şimdi ikinci fikre geçelim."
   }
  ],
  "hazir-servisler": [
   {
    "m": "İkinci fikir: bu üç parça için bugün hazır servisler var."
   },
   {
    "adim": true,
    "m": "Eskiden bir web ürünü yapmak isteyen biri önce bir sunucu kiralar ya da kurardı. Sonra üstüne veritabanını kurar, yedeklerini almayı ayarlar, kullanıcıların kayıt olup giriş yapabileceği bir sistemi sıfırdan yazardı. Her güncellemede dosyaları elle sunucuya yüklerdi. Bunlar haftalar sürerdi, ve küçük bir hatada her şey dururdu."
   },
   {
    "adim": true,
    "m": "Bugün her parça için hazır bir servis var. Bu servislerin çoğunun öğrencilere uygun, ücretsiz bir başlangıç planı var. Yani sunucu kurmadan, birkaç tıklamayla ürün çıkarabiliyorsunuz. Bu dönem öğreneceğiniz şeylerden biri, bu servisleri doğru seçmek ve doğru ayarlamak."
   },
   {
    "adim": true,
    "m": "Dört araçla tanışalım. GitHub, kodunuzun ve takımınızın ortak deposunun durduğu yer; dört kişi aynı kod üzerinde burada çalışır. Supabase, hazır bir veritabanı ve hazır bir giriş sistemi veriyor: tablo açıyorsunuz, kullanıcı kaydı ve girişi hazır geliyor. Vercel, GitHub'daki kodunuzu alıp internete koyuyor ve her güncellemede kendiliğinden yeniden yayınlıyor. Kodlama aracı ise kodu yazan yapay zekâ: Copilot, Cursor ya da Claude gibi. Bunlardan hangisine erişiminiz varsa onu kullanabilirsiniz."
   },
   {
    "m": "Bu araçların çoğuna GitHub hesabınızla giriş yapabilirsiniz; ayrı ayrı şifre oluşturmanız gerekmiyor. Öğrenci olduğunuzu GitHub'a doğruladıysanız, öğrencilere sunulan ek araçlardan da yararlanabilirsiniz. Bu hafta yalnız GitHub ve Vercel'i kullanacaksınız; Supabase altıncı haftada, veritabanı haftasında gelecek."
   }
  ],
  "ucretsiz": [
   {
    "m": "Bu servislerin ücretsiz planları var, ama bilmeniz gereken kuralları da var. Üç kural."
   },
   {
    "adim": true,
    "m": "Birincisi: uyur. Ücretsiz veritabanı projeleri bir süre hiç kullanılmazsa duraklatılır. Demo Günü sabahı ürününüzü açtığınızda veritabanı cevap vermiyorsa, ilk bakacağınız yer burası. Çözümü basit: ürününüze her hafta dokunun, Demo Günü'nden önceki akşam da panele girip projenin çalıştığına bakın."
   },
   {
    "adim": true,
    "m": "İkincisi: durur ya da fatura keser. Ücretsiz plan, sınırını aşınca ürününüzü durdurur. Ama kredi kartı bağladığınız bir planda ürün durmaz; kullandıkça fatura keser. Bir bot sitenize gece boyunca binlerce istek gönderirse sabah bir faturayla uyanabilirsiniz. Bu yüzden bu derste kart bağlamıyoruz. Sekizinci haftada harcama sınırı koymayı da göreceğiz."
   },
   {
    "adim": true,
    "m": "Üçüncüsü: ticari değil. Ücretsiz planların çoğu kişisel ve ticari olmayan kullanım içindir. Ürününüzden para kazanmaya başladığınız gün ücretli bir plana geçmeniz gerekir. On üçüncü haftada pazara çıkışı konuşurken buna döneceğiz."
   }
  ],
  "yayin-yolu": [
   {
    "m": "Peki bir değişiklik internete nasıl çıkıyor? Dört adımda. Birincisi, kodu kendi bilgisayarınızda, kodlama aracıyla yazıyorsunuz. İkincisi, bu değişikliği GitHub'daki takım deposuna gönderiyorsunuz. Üçüncüsü, Vercel bunu kendiliğinden fark ediyor, kodu alıyor ve kuruyor. Dördüncüsü, birkaç dakika sonra adres herkese açık; telefonunuzdan da açabiliyorsunuz."
   },
   {
    "adim": true,
    "m": "En güzel tarafı şu: elle dosya yükleme yok. GitHub'a gönderdiğiniz her şey birkaç dakika içinde canlı adreste. Bunu da bir benzetimle görelim."
   }
  ],
  "yayin-sim": [
   {
    "eylem": "oynat",
    "m": "Burada bir takım üyesinin değişikliğini gönderdiği anı görüyorsunuz. Satırlar sırayla gelecek; sağdaki telefona da dikkat edin.",
    "bekle": 4
   },
   {
    "m": "Satırları birlikte okuyalım. Önce değişiklik GitHub'a gönderildi. Vercel bunu fark etti ve yeni bir yayın başlattı. Sonra kodu indirdi, gerekli paketleri kurdu ve uygulamayı derledi. Derlemek, yazdığımız kodu tarayıcının hızlıca çalıştırabileceği hâle getirmek demek. En sonda yeşil satır: yayında. Sağdaki telefonda başlığın değiştiğini görüyorsunuz."
   },
   {
    "m": "Bütün bunlar kimse elle bir şey yapmadan oldu. Gerçekte birkaç dakika sürer. Bugünkü görevinizin son adımı tam olarak bu: ilk sayfanızı bu şekilde yayına almak."
   }
  ],
  "yz-sayilar": [
   {
    "m": "Üçüncü fikir: kodu yapay zekâ yazıyor, ama kontrol bizim işimiz. Önce sahada çalışan geliştiricilerin ne düşündüğüne bakalım. Bu sayılar, dünyanın en büyük geliştirici anketinden."
   },
   {
    "adim": true,
    "m": "Geliştiricilerin yüzde seksen dördü yapay zekâ kodlama araçlarını kullanıyor ya da kullanmayı planlıyor. Yani bu araçlar artık işin olağan bir parçası; sizin de kullanmanız doğal. Bu derste yapay zekâ kullanmak yasak değil, tersine bekleniyor."
   },
   {
    "adim": true,
    "m": "Ama aynı ankette en büyük dert şu: yüzde altmış altı, yapay zekânın neredeyse doğru ama tam değil çıktılar verdiğini söylüyor. Kod çalışıyor gibi görünüyor, ama bir yerde eksik. Bu eksik bazen önemsiz bir ayrıntı, bazen de açılıştaki gibi bütün kullanıcıların bilgisini açığa çıkaran bir kontrol. Bunun nasıl olduğunu bir örnekle görelim."
   }
  ],
  "kural": [
   {
    "eylem": "oynat",
    "m": "Bir notlar tablosu düşünün. Dört öğrenci var: Ece, Mert, Deniz ve Can. Mert giriş yapıyor ve notlarımı getir diyor. Solda kuralı olmayan bir tablo, sağda kuralı olan bir tablo var. İzleyin.",
    "bekle": 2
   },
   {
    "m": "Solda, kural yokken, Mert'e dört öğrencinin notu birden gidiyor; kırmızı satırların hepsi. Ekran belki yalnız Mert'in notunu gösteriyor, ama veri Mert'in bilgisayarına gelmiş bile. Network sekmesini açan herkes diğerlerinin notlarını görebilir. Sağda, kural varken, yalnız Mert'in kendi satırı geliyor; diğerleri hiç gönderilmiyor. Fark ekranda değil, veritabanında."
   },
   {
    "adim": true,
    "m": "Supabase'de her tabloya böyle bir kural yazılır: kim hangi satırı okuyabilir, kim hangi satırı yazabilir, kim silebilir. Altıncı haftada bu kuralları kendi ürününüzde yazacaksınız."
   },
   {
    "m": "Burada çok karıştırılan bir nokta var. Supabase size bir anahtar verir, ve bu anahtar ekranın koduna yazılır; yani tarayıcıya gider ve Network sekmesini açan herkes onu görebilir. Bu bir hata değil, böyle tasarlanmış. O anahtar yalnızca kapıya kadar götürür. Kapının açılıp açılmayacağına tablo üstündeki kural karar verir. Anahtar gizlenemez, ama kural yazılabilir. Açılıştaki uygulamalarda anahtar her zamanki gibi açıktaydı; eksik olan kuraldı."
   },
   {
    "adim": true,
    "m": "Kural yoksa, adresi bilen herkes bütün tabloyu okur. Açılıştaki yüz yetmiş uygulamada olan tam buydu."
   },
   {
    "adim": true,
    "m": "Yapay zekâ bu kuralı yazabilir; çoğu zaman da yazar. Ama yazıp yazmadığını ve doğru yazıp yazmadığını kontrol etmek sizin işiniz. Bir yapay zekâ ile çalışırken bunun nasıl göründüğüne bakalım."
   }
  ],
  "yz-sohbet": [
   {
    "eylem": "oynat",
    "m": "Bu ekranda bir öğrencinin kodlama aracıyla konuşmasını görüyorsunuz. Mesajlar sırayla gelecek; sağdaki değişiklikler listesine de dikkat edin.",
    "bekle": 5
   },
   {
    "m": "Öğrenci, ilanlar tablosunu ve ilanları listeleyen sayfayı yap dedi. Araç işi yaptı ve çalışıyor dedi. Değişiklikler listesine bakın: tablo oluşturulmuş, sayfa eklenmiş. Ama kırmızı satıra bakın: tabloya kural yazılmamış. Araç bunu kendiliğinden söylemedi. Öğrenci, aracın ne yaptığını değişiklik listesinden okuyunca fark etti."
   },
   {
    "m": "Sonra öğrenci araçtan kuralı eklemesini istedi: herkes okuyabilsin, yalnız ilanın sahibi değiştirebilsin. Araç kuralı ekledi ve yeşil satır geldi. Yapay zekâ ile çalışmak işte böyle bir şey: araç yazar; siz neyi değiştirdiğine bakar, eksiği yakalar ve tamamlatırsınız."
   },
   {
    "m": "Yapay zekâya iş verirken iyi bir istem üç şey söyler. Ne istediğinizi: ilanları listeleyen bir sayfa. Nerede istediğinizi: hangi dosyada, hangi tabloyla. Ve neye dikkat etmesi gerektiğini: anahtarı koda yazma, tabloya kural ekle, dış kütüphane kullanma. Ne kadar açık yazarsanız, o kadar az eksik çıkar. Ama en açık istem bile kontrolün yerini tutmaz; aracın ne yaptığını her seferinde okursunuz. Şimdi bununla ilgili bir soru."
   }
  ],
  "sinifca-ajan": [
   {
    "m": "Yapay zekâ, özelliği ekledim, çalışıyor dedi. İlk ne yaparsınız? Hemen yayına mı alırsınız? Neyi değiştirdiğine satır satır bakıp sonra kendiniz mi denersiniz? Yoksa aynı şeyi başka bir yapay zekâya mı sorarsınız? Kırk saniye düşünün.",
    "dusun": 40
   },
   {
    "eylem": "cevap",
    "m": "Doğru cevap ikinci seçenek: neyi değiştirdiğine satır satır bakarsınız, sonra kendiniz denersiniz. Çalışıyor ile doğru aynı şey değil. Araç bir kuralı eklemeyi unutmuş olabilir, ihtiyacınız olan bir şeyi silmiş olabilir. Başka bir yapay zekâya sormak da yetmez; o da aynı şeyi gözden kaçırabilir."
   },
   {
    "m": "Bakmak beş dakika sürer; yayına çıkmış bir hatayı bulmak saatler. Bu dersin kuralı da buradan geliyor: açıklayamadığınız kod sizin kodunuz değildir. Dönem sonunda her biriniz projenizdeki kodu açıklayacaksınız; yapay zekânın yazdığı satırlar da dahil. Son fikre geçelim."
   }
  ],
  "once-yayinla": [
   {
    "m": "Dördüncü fikir: önce yayınla, sonra geliştir. Birçok takım şöyle düşünür: önce her şeyi bitirelim, en sonda internete koyarız. Bu derste tam tersini yapacağız."
   },
   {
    "m": "Bu hafta ürününüzün ilk sayfası canlı adreste olacak. Beşinci haftada GitHub'da takım olarak birbirinizin işini bozmadan çalışmayı öğreneceksiniz. Altıncı haftada veritabanını ekleyeceksiniz. Yedinci haftada kullanıcı girişi ve yapay zekâ özelliği gelecek. Sekizinci haftada ürünü buluta tam olarak yayınlayacaksınız. Sonraki haftalarda hız, güvenlik, kalite, telefonda çalışma ve pazara çıkış var. En sonda Demo Günü."
   },
   {
    "m": "Neden böyle? Çünkü bir ürünü internete koymak, onu kendi bilgisayarınızda çalıştırmaktan farklıdır. Kendi bilgisayarınızda her şey yerli yerindedir; internette ise bir dosya adındaki büyük küçük harf farkı, eksik bir ayar ya da unutulmuş bir anahtar yüzünden sayfa açılmayabilir. Bu sorunları ilk hafta görürseniz küçük sorunlardır; son gün görürseniz Demo Günü'nü kaçırırsınız."
   },
   {
    "adim": true,
    "m": "Her hafta canlı bir adres olduğu için, bende çalışıyordu cümlesi ortadan kalkar. Bir sorun varsa hemen görürsünüz, son haftada değil. Şimdi bununla ilgili bir karar sorusu."
   }
  ],
  "karar-senaryo": [
   {
    "m": "Senaryoyu okuyalım: dört kişilik bir takım, kimse daha önce sunucu kurmamış. Ürün fotoğraflı ilanlar, kullanıcı girişi ve yapay zekâ ile özet içeriyor. On hafta sonra Demo Günü. Ne yaparsınız? Kendi sunucunuzu kurup her şeyi baştan mı yazarsınız? Bu hafta ilk sayfayı yayına alıp her hafta hazır servislerle bir parça mı eklersiniz? Yoksa önce tasarımı bitirip kodu son üç haftaya mı bırakırsınız? Kırk saniye.",
    "dusun": 40
   },
   {
    "eylem": "cevap",
    "m": "Doğru cevap ikinci seçenek. Sunucu kurmayı öğrenmek bu dönemin işi değil; hazır servisler bu yükü sizden alıyor. Kodu sona bırakan takım ise genellikle Demo Günü'nde çalışmayan bir ürün gösterir, çünkü sorunları ancak son hafta görür. Önce yayınla, sonra geliştir. Şimdi bu haftaki görevinize bakalım."
   }
  ],
  "gorev": [
   {
    "m": "Atölyede takımınızla dört şey yapacaksınız. Birincisi: takım deponuzdaki README dosyasına ürününüzü tanımlayın. Ürün kim için, hangi sorunu çözüyor, ilk üç ekranı ne, yapay zekâ ne yapacak?"
   },
   {
    "m": "README, deponuzun ön sayfasıdır; GitHub'da deponuzu açan herkesin ilk gördüğü yazıdır. Ürününüzü ilk kez gören biri, bu dosyayı okuyunca ne yaptığınızı anlamalı."
   },
   {
    "m": "İkincisi: bu tanımın altına üç kutu çizin: ekran, program, veritabanı. Her kutuya sizin üründe ne olacağını yazın. Kâğıda çizip fotoğrafını koymanız da yeterli."
   },
   {
    "m": "Üçüncüsü: kodlama aracınıza ürününüzün tanıtım sayfasını yaptırın ve takım deposuna gönderin. Her üye en az bir kez gönderim yapsın; README dosyasına kendi rolünü yazmak bile sayılır. Ders notunda araca verebileceğiniz hazır bir istem var; onu kendi ürününüze göre değiştirin."
   },
   {
    "m": "Dördüncüsü: sayfayı yayına alın. Vercel ile ya da ikinci haftada yaptığınız gibi GitHub Pages ile. Çıkan adresi README dosyasının en üstüne yazın."
   },
   {
    "m": "Vercel'de yayına almak şöyle: Vercel'in sitesine GitHub hesabınızla girin. Yeni proje oluşturma düğmesine basın. Takım deponuz listede görünür; onu seçin. Ayarlara dokunmadan Deploy düğmesine basın. Bir iki dakika sonra size bir adres verilir. O adresi telefonunuzdan açın; açılıyorsa tamam. Takıldığınız yerde ders notundaki üç buçuk dakikalık Türkçe videoya bakın."
   },
   {
    "m": "Kabul ölçütleri sağda: adres telefondan açılıyor olmalı; README dosyasında tanım, üç kutu ve adres olmalı; dört üyenin her birinden en az bir gönderim olmalı. Teslimi her üye kendi adıyla, haftalık teslim sayfasındaki formdan yapacak. Süre, bu dersi izleyen Pazar gece yarısına kadar. Formdaki yapay zekâ notuna, bu hafta kendinizin ne yaptığını, aracın ne yaptığını ve aracın ürettiği şeyde neyi değiştirdiğinizi yazın."
   }
  ],
  "ozet": [
   {
    "m": "Bugünü toparlayalım. Aklınızda kalması gereken dört şey var."
   },
   {
    "adim": true,
    "m": "Bir: her web uygulaması üç parçadır: ekran, program ve veritabanı. OBS'de de, Trendyol'da da, sizin ürününüzde de."
   },
   {
    "adim": true,
    "m": "İki: bugün bu parçalar için hazır servisler var. Kod için GitHub, veritabanı ve giriş için Supabase, yayın için Vercel, kodu yazmak için bir kodlama aracı."
   },
   {
    "adim": true,
    "m": "Üç: yapay zekâ kodu yazar, ama kapıyı kilitlemeyi unutabilir. Kontrol sizin işiniz; açıklayamadığınız kod sizin kodunuz değildir."
   },
   {
    "adim": true,
    "m": "Dört: önce yayınla, sonra geliştir."
   },
   {
    "adim": true,
    "m": "Dersin başındaki soruya dönelim: kodu yapay zekâ yazıyorsa sen ne bilmelisin? Cevap: ürünün parçalarını, hangi servisin ne işe yaradığını ve kontrolün nerede durduğunu. Çıkarken bir soruya cevap vermenizi istiyorum: takımınızın ürününde ekran, program ve veritabanı ne olacak? Her birine bir sözcük. Atölyede bu cevapla başlayacağız. Teşekkürler."
   }
  ]
 }
};
