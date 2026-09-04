// const //data yang sifatnya tidak berubah
// var //data yang berubah
// let //data yang berubah

let a = 1;
// let a = 2;
// let a = 3;

let string = "";
let number = 334; // database minta angka biasa, kasi number
let boolean = false;
let float = 34.1; // minta angka koma, kasi float

// let kebab-case
let camelCase1 = 1 
let camelcase2 = 2

let snake_case = ""

let dataKosong
let dataGakKosong = ""

snake_case = 3

console.log(camelCase1)

let modulus = 17%3
console.log(modulus)

let angka1 = 50;
let angka2 = "50";
console.log(angka1==angka2)

let statement1 = false;
let statement2 = true;

// AND && => kalo ada yang false, kehitungnya false
// OR || => kalo ada yang true, kehitungnya true

console.log('logic')
console.log(statement1 || statement2);

console.log('negation')
console.log(!statement1)

let isWeekend = true;
let isHoliday = false;
let canRelax = (isWeekend || isHoliday) && !false;

console.log(canRelax)

// IF

if (statement1 && statement2) {
    console.log('jalan')
} else {
    console.log('tidak jalan')
}

// let buah = "apel"
let buah = "jeruk"
// let buah = "alpukat"
if (buah == "apel"){
    console.log('bikin jus apel')
} else if(buah == "jeruk"){
    console.log('bikin jus jeruk')
} else {
    console.log('beli buah')
}

//SWITCH

switch (buah) {
    case "apel":
        console.log('2 ribu')
        break;
    case "jeruk":
        console.log('5 ribu')
        break;   
    default:
        console.log('10 ribu')
        break;
}

//FOR
for (let i = 0; i < 5; i++) {
    console.log('pengulangan ke-'+i)
}

//WHILE
let whileLimit = 3
let counter = 0
// while (counter < whileLimit) {
//     console.log('hello '+counter);
//     counter++;
// }

// DO WHILE
do {
    console.log('hola')
    console.log(counter)
    counter++
} while (counter < 0);

// string
// number
// boolean

//object
let dataKtp = {
    nama: "aulia",
    umur: 12,
    isWni: true
}

//array
let data = [1000, 2000, 3000]

// cara manggilnya
// #1
// dataKtp.isWni

// // #2
console.log('dataKtp');
console.log(data[0])
// console.log(object.nama)
// console.log(object.umur)
// console.log(object.isWni)

// for (const key in dataKtp) {
//     // if (!Object.hasOwn(object, key)) continue;
    
//     // const element = object[key];
//     console.log(key)
//     // let output = dataKtp[key];
//     let output = dataKtp.key;
//     console.log(output)
// }

for (const element of data) {
    console.log(element)
}

let number1 = 1;

while(number1 < 5){
    console.log('Angka sekarang: ' + number1);
    number1++;
}

let angka3 = 3
function perkalian(x) {
    // let hasil = x*4;
    // console.log(hasil)
    if (x%2==0){
        // console.log('genap')
        // console.log(x*2000)
        return x*2000;
    } else {
        // console.log('ganjil')
        // console.log(x*3000)
        return x*3000;
    }
}

perkalian(angka3);
perkalian(21)
perkalian(6)

let hasil1 = perkalian(20)
console.log(`hasil satu, isinya berapa ${hasil1}`)

// function apple(params) => {
//     return params*2;
// }

const functionArrow = (a,b) => {
    console.log('function arrownya jalan')
    return a+b;
}

let variableFunctionArrow = functionArrow(10,3);
console.log(variableFunctionArrow)

// function hargaBuah(){
// function hargaBuah(buah, kalkulasi){
//     let buah = apple
//     kalkulasiHarga(buah)
// }

// function kalkulasiHarga(){
//     if apple = return 10000
//     if banana = return 20000
// }

// hargaBuah('apple', kalkulasiHarga)

let objectBaru = {
    nama: 'aulia',
    umur: 12
}

let dataSiswa = {
    id:[10,20]
}

//manggil object dataSiswa.id

console.log(dataSiswa.id)
console.log(dataSiswa.id[0])

// object dalam array
let dataGuru = [{
    nama: 'budi',
    umur: 30,
    mataPelajaran: 'Agama'
}, {
    nama: 'citra',
    umur: 35,
    mataPelajaran: 'PKN'
}]

console.log(dataGuru[1].umur)

dataGuru[1][2]
dataSiswa.nama.depan
