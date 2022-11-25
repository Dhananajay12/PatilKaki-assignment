function Sum(str) {
  let tempSting = "0";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!isNaN(char)) {
      tempSting += char;
    } else {
      sum += parseInt(tempSting);
      tempSting = "0";
    }
  }
  return sum + parseInt(tempSting);
}

let str = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80";

console.log(Sum(str));
