About
============

Some useful JavaScript functions for use with IBM Rational Publishing Engine.

_number.js
============

Some extensions to JavaScript's Number class; useful for working with numbered lists and suchlike. 

```javascript
Number(1).toBijectiveBase26();    // => "A"
Number(1).toRomanUpperCase();     // => "I"
Number(1).toRomanLowerCase();     // => "i"

Number(26).toBijectiveBase26();   // => "Z"
Number(26).toRomanUpperCase();    // => "XXVI"
Number(26).toRomanLowerCase();    // => "xxvi"

Number(27).toBijectiveBase26();   // => "AA"
Number(27).toRomanUpperCase();    // => "XXVII"
Number(27).toRomanLowerCase();    // => "xxvii"

Number(28).toBijectiveBase26();   // => "AB"
Number(28).toBijectiveBase26();   // => "XXVIII"
Number(28).toBijectiveBase26();   // => "xxviii"
```
