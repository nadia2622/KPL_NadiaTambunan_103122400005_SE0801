/**
 * Buatlah Array berisi 3 element tentang minuman kesukaan dan
 * dimpan ke versi variable listMinuman
 *
 * Ganti 2 elemen pertama dengan minuman lain yang kamu suka
 * dengan cara index dan penugasa
 *
 * tambah 1 minuman di depan array.
 */

// const listMinuman = ["teh", "kopi", "susu"];
// console.log("List awal minuman:", listMinuman);

// // Ganti 2 elemen pertama dengan minuman lain yang kamu suka
// listMinuman[0] = "jus";
// listMinuman[1] = "air mineral";
// console.log("List minuman setelah diubah:", listMinuman);

// // Tambah 1 minuman di depan array
// listMinuman.unshift("soda");
// console.log("List minuman setelah ditambahkan:", listMinuman);

/**
 * Tuliskan sebuah fungsi yang menerima n bilangan dan mengembalikan nilai penjumlahan
 * dari 1 sampai n
 */

function penjumlahan(n) {
  let jml = 0;
  for (let i = 1; i <= n; i++) {
    jml += i;
  }
  return jml;
}
// Contoh penggunaan fungsi
let n = 1;
console.log("Penjumlahan dari 1 sampai", n, "adalah:", penjumlahan(n));
n = 2;
console.log("Penjumlahan dari 1 sampai", n, "adalah:", penjumlahan(n));
n = 5;
console.log("Penjumlahan dari 1 sampai", n, "adalah:", penjumlahan(n));
n = 50;
console.log("Penjumlahan dari 1 sampai", n, "adalah:", penjumlahan(n));
n = 65546;
console.log("Penjumlahan dari 1 sampai", n, "adalah:", penjumlahan(n));
