console.log("Soal 1")
const prompt = require('prompt-sync')({sigint: true});

const x = prompt("Input Bilangan: ");

if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (x % 2 !== 0) { 
  console.log("Tidak bisa input bilangan ganjil");
} else {
  const akarPangkat2 = Math.sqrt(x);
  console.log(`Akar pangkat 2 dari ${x} adalah: ${akarPangkat2}`);
}
