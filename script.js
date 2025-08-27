const ismH1 = document.getElementById("ism");
const famH1 = document.getElementById("fam");
const yoshH1 = document.getElementById("yosh");

let ism = prompt("ism kiriting");
let familya = prompt("famliya kiriting");
let yosh = prompt("yosh kiriting");

let javob = prompt("Ismlarni katta harfdami yoki kichik?\n1)katta\n2)kichik");

if (javob == 1) {
  ismH1.textContent = "1.Ism: " + ism.toUpperCase();
  famH1.textContent = "2.Familya: " + familya.toUpperCase();
  yoshH1.textContent = "3.Yosh: " + yosh;
} else {
  ismH1.textContent = "1.Ism: " + ism.toLowerCase();
  famH1.textContent = "2.Familya: " + familya.toLowerCase();
  yoshH1.textContent = "3.Yosh: " + yosh;
}