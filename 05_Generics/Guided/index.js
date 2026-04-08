/**
 *
 * @param {String} input Deretan String
 * @returns {String} Deretan String yang ada fizzbuzz
 */

function fizzBuzz(input) {
  /**@type {Array<String>} */
  const deretLarik = input.split(" ");

  let hasil = "";

  for (const d of deretLarik) {
    const bil = +d;
    let fz = "";

    if (bil % 3 === 0) {
      fz += "fizz";
    }
    if (bil % 5 === 0) {
      fz += "buzz";
    }
    if (fz !== "") {
      hasil += `${fz} `;
      continue;
    }
    hasil += bil;
  }
  return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 6 7 8 9 10"));
