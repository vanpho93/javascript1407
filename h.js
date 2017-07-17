/*
soDong = 5;
soCot = 11;

* * * * * *
 * * * * *
* * * * * *
 * * * * *
* * * * * *

*/

for(let i = 1; i <= 5; i++) {
    let str = i % 2 === 1 ? '*' : ' ';
    for(let j = 1; j < 11; j++) str += (j + i) % 2 === 1 ? '*' : ' '
    console.log(str);
}
