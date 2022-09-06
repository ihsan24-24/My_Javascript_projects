//! method 1 only algoritma
function sumStrings(a, b) {
  let arr1 = a.split(""); // I converted the incoming strings to an array to be able to apply the array methods
  let arr2 = b.split("");
  let sum = "";
  let sum2 = "";
  let j = 0; // will keep the remaining number in the addition operation, for example 9 + 8 = 17 j = 1

  let len = arr1.length > arr2.length ? arr1.length : arr2.length; //I set it equal to the length of whichever array is bigger
  if (arr1.length > arr2.length) {
    //I made the array length of the two strings the same so that it does not give undefined in the tom operation.
    while (arr1.length != arr2.length) {
      arr2.unshift("0");
    }
  } else if (arr2.length > arr1.length) {
    while (arr1.length != arr2.length) {
      arr1.unshift("0");
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    // I added all the elements of the array one by one and assigned the variable j to take the single digit and add the hand to the next addition
    sum = "" + (Number(arr1[i]) + Number(arr2[i]) + Number(j));
    if (i == 0) {
      sum2 = "" + sum + sum2;
    } else {
      if (sum.length > 1) {
        j = sum[0];
        sum = sum[1];
      } else {
        j = 0;
      }
      sum2 = "" + sum + sum2;
    }
  }

  return sum2;
}
console.log(sumStrings("202", "801"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);

//! Method 2
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
console.log(sumStrings("202", "801"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
