const age = 8;
let message;

switch (age) {
    case age < 10: {
        message = 'Thieu nhi';
        console.log('AAA');
        break;
    }
    case age < 18 && age >= 10: {
        message = 'Thieu nien';
        break;
    }
    case age >= 18 && age < 30: {
        message = 'Thanh nien';
        break;
    }
    default: {
        message = 'Trung nien';
        break;
    }
}

console.log(message);
