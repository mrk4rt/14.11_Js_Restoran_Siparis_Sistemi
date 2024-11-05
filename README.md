# Restoran Sipariş Sistemi Projesi

## Proje Amacı

Restoran sipariş sistemi, kullanıcıların menüden yemek seçmesini ve sipariş oluşturmasını sağlayacak bir uygulamadır. Bu proje, kullanıcı etkileşimini ve program akışını pekiştirmek için `do-while`, `for`, `if-else` ve `switch-case` yapılarını kullanacaktır.

## Değişkenler

- **menu**: Restoran menüsündeki yemekleri tutan dizi.
- **siparisler**: Kullanıcının seçtiği yemekleri tutan dizi.
- **toplamFiyat**: Siparişin toplam fiyatını hesaplamak için bir değişken.
- **secim**: Kullanıcının yaptığı seçim için bir değişken.
- **devam**: Kullanıcının yeni bir sipariş verip vermeyeceğini belirten boolean değişkeni.

## Anahtar Kelimeler

- do
- while
- for
- if
- else
- switch
- case
- prompt
- alert
- console.log

## Proje Adımları

### 1. Menü Oluşturma

- `menu` dizisi oluşturulacak ve bazı yemek seçenekleri ile fiyatları tanımlanacak.

### 2. Sipariş Alma

- Kullanıcıya menüyü gösterecek bir fonksiyon yazılacak.
- Kullanıcıdan yemek seçimi için bir sayı girmesi istenecek. Seçim `switch-case` yapısı ile kontrol edilecek.
- Seçilen yemeğin fiyatı `toplamFiyat` değişkenine eklenecek.

### 3. Sipariş Tamamlayıcı

- Kullanıcıya daha fazla sipariş vermek isteyip istemediği sorulacak. Bu işlem `do-while` döngüsü içinde gerçekleştirilecek.

### 4. Sonuçları Gösterme

- Kullanıcının seçtiği yemekler ve toplam fiyat konsolda gösterilecek.
