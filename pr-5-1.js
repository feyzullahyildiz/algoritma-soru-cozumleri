var ilkSayiString = prompt('ilk sayıyı giriniz');
var ikinciSayiString = prompt('ikinci sayıyı giriniz');
console.clear();
var ilkSayi = Number(ilkSayiString);
var ikinciSayi = Number(ikinciSayiString);

if (isNaN(ilkSayi) || isNaN(ikinciSayi)) {
    throw new Error('ilk sayı ve ikinci sayı nümerik olmalı')
}
console.log('SAYILAR VALID')
console.log('ILK SAYI', ilkSayi);
console.log('IKINCI SAYI', ikinciSayi);

var ilkSayiBolunenler = [];
for (var index = 1; index <= ilkSayi; index++) {
    if(ilkSayi % index === 0) {
        ilkSayiBolunenler.push(index)
    }
}
console.log('ILK SAYININ BÖLÜNENLERİ', ilkSayiBolunenler);

var ikinciSayiBolunenler = [];
for (var index = 1; index <= ikinciSayi; index++) {
    if(ikinciSayi % index === 0) {
        ikinciSayiBolunenler.push(index)
    }
}
console.log('IKINCI SAYININ BÖLÜNENLERİ', ikinciSayiBolunenler);

var EBOB = 0;
for (var index = 0; index < ilkSayiBolunenler.length; index++) {
    var sayi = ilkSayiBolunenler[index];
    // console.log('SAYI', sayi);
    var ortakSayi = ikinciSayiBolunenler.find((nextSayi) => nextSayi == sayi)
    if(ortakSayi !== undefined) {
        EBOB = ortakSayi;
    }
    
}

console.log('EBOB: ', EBOB)