// console.log(Math.random())

//Lam tron, random => [0, 1)

const KET_QUA = 31;
// Viet vong lap -> mua 1 so -> 00 --- 99
// Mua bao nhieu lan 
// Lan mua 1: 30
let soMuaDuoc = -1;
let soLanMua = 0;

while(soMuaDuoc !== KET_QUA) {
    soMuaDuoc = Math.floor(Math.random() * 100);
    console.log('Lan thu ' + ++soLanMua + ': ' + soMuaDuoc);
}
