/*
n = 5
    1
   12
  123
 1234
12345
*/

for (let i = 1; i <= 5; i++) {
    let str = '';
    let k = 0;
    for(let j = 1; j <= 5; j++) str += (j <= 5 - i) ? ' ' : ++k;
    console.log(str);
}

/*
n = 4;

   *
  ***
 *****
*******
--------------
   *
  ***
 *****
*******
 *****
  ***
   *
*/

const n = 5;

const soCot = n * 2 - 1;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= soCot; j++) {
        const dieuKien = Math.abs(j - n) < (n - i);
        str += dieuKien ? '*' : ' ';
    }
    console.log(str);
}
