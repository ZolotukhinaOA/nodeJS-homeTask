let str0="abc  !";
let str1="aabc  !";
let str2="bac???";
let str3="abcde abc";

function anagrams1(str1, str2) {
  let cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  let cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

   if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let char of cleanStr1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams1(str0, str1));
console.log(anagrams1(str0, str2));
console.log(anagrams1(str1, str2));
console.log(anagrams1(str2, str3));
console.log(anagrams1(str1, str3));

function anagrams2(str1, str2){
    let cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
    let cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');

	return cleanStr1===cleanStr2;
}
console.log(anagrams2(str0, str1));
console.log(anagrams2(str0, str2));
console.log(anagrams2(str1, str2));
console.log(anagrams2(str2, str3));
console.log(anagrams2(str1, str3));