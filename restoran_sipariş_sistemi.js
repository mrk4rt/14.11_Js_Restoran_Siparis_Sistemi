// 1. Menü Oluşturma
let menu = [
  { yemek: "Pizza", fiyat: 50 },
  { yemek: "Hamburger", fiyat: 30 },
  { yemek: "Salata", fiyat: 20 },
  { yemek: "Döner", fiyat: 40 },
];

let siparisler = [];
let toplamFiyat = 0;
let devam = true;

do {
  // 2. Menü Gösterimi
  console.log("Menü:");
  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1}. ${menu[i].yemek} - Fiyat: ${menu[i].fiyat} TL`);
  }

  // Kullanıcıdan seçim alma
  let secim = parseInt(
    prompt(
      "Sipariş vermek istediğiniz yemeğin numarasını girin (Çıkmak için 0 girin):"
    )
  );

  // 3. Seçim Kontrolü
  if (secim === 0) {
    devam = false;
    continue;
  } else if (secim > 0 && secim <= menu.length) {
    siparisler.push(menu[secim - 1]);
    toplamFiyat += menu[secim - 1].fiyat;
    console.log(`${menu[secim - 1].yemek} sipariş edildi.`);
  } else {
    console.log("Geçersiz seçim, lütfen tekrar deneyin.");
  }

  // 4. Yeni sipariş isteği
  let yeniSiparis = prompt(
    "Yeni bir sipariş vermek ister misiniz? (Evet/Hayır)"
  ).toLowerCase();
  if (yeniSiparis !== "evet") {
    devam = false;
  }
} while (devam);

// 5. Sonuçları Gösterme
console.log("Siparişleriniz:");
siparisler.forEach((siparis) => {
  console.log(`${siparis.yemek} - Fiyat: ${siparis.fiyat} TL`);
});
console.log(`Toplam Fiyat: ${toplamFiyat} TL`);
