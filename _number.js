//From alexfeseto/hexavigesimal/hexavigesimal.js (github)
Number.prototype.toBijectiveBase26 = (function () {
  return function toBijectiveBase26() {
    n = this
    ret = "";
    while(parseInt(n)>0){
      --n;
      ret += String.fromCharCode("A".charCodeAt(0)+(n%26));
      n/=26;
    }
    return ret.split("").reverse().join("");
  };
}());

//Adapted from enriclluelles/javascript/roman_numerals.js (github)
Number.prototype.toRomanUpperCase = (function () {
  var nmap = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  var toRomanR = function toRomanR(num) {
    for (var a in nmap) {
      if (nmap[a] <= num) {
        return a + toRomanR(num - nmap[a]);
      }
    }
    return '';
  }
  return function toRomanUppercase() {
    return toRomanR(this);
  };
}());

Number.prototype.toRomanLowerCase = (function () {
  return function toRomanLowercase() {
    return Number(this).toRomanUpperCase().toLowerCase();
  };
}());
