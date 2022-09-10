let doRoma = (number) => {
  if (number > 3999 || number < 0) {
    console.log("The number entered must be less than 4000 and greater than 0");
    return 0;
  } else {
    let arr = ("" + number).split("");
    while (arr.length < 4) {
      arr.splice(0, 0, "0");
    }
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousands = ["", "M", "MM", "MMM"];
    return thousands[arr[0]] + hundreds[arr[1]] + tens[arr[2]] + ones[arr[3]];
  }
};

console.log(doRoma(3234));
