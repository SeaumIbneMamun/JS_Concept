let product = 'Pant';

const website = 'www.eshikhon.com';
// website = 'eshikhon.com';
console.log(website);


const student = {
    name: 'Jafor',
    id: 9899,
    dress: 'blue'
}

student.dress = 'black dress'
student ['id'] = 2144895
console.log(student);




let bCCloss = 1;

while (bCCloss <= 10) {
    console.log(bCCloss);
    bCCloss++
}


for (let loss = 0; loss<9; loss++){
    console.log(loss);
}



function sum (one,two) {
    const add = one + two;
    return add;
    
}
const result = sum(1,2)
console.log(result);


function inchtoFeet(params) {
    
}

function inchesToFeet(inches) {
    const feetResult = inches / 12 
    return feetResult;

  }

const output = inchesToFeet(12);
console.log(output);



function isLeepYear (year) {
    if (year % 4 == 0) {
        console.log('This is leap year.');
    }
    else {
        console.log('This is not leap year.');
    }
}

isLeepYear(2028)




function milesToKilometers(miles) {
    const kilometeres = miles * 1.60934 ;
    return kilometeres;
}

const result1 = milesToKilometers (50);
console.log(result1 ,'kilometers');


function isEven(num) {
    if (num == 0) {
        return 'Please enter a number that is more than 0'
    }
    else if (num % 2 == 0) {
        return 'This is even number.'
    }
    else {
        return 'This is odd number'
    }
}

const output2 = isEven(4);
console.log(output2);







function সেরথেকেমণ(সের) {
    const মণ = সের / 40 ;
    return মণ;
}



const result2 = সেরথেকেমণ (25);
console.log(result2 ,'মণ');



function মণথেকেসের(মণ) {
    const সের = মণ * 40 ;
    return সের;
}

const result৩ = মণথেকেসের (1);
console.log(result৩ ,'সের');



function মণথেকেকেজি (কেজি) {
    const মণ = কেজি * 37.32 ;
    return মণ;
}

const result4 = মণথেকেকেজি (1);
console.log(result4 ,'কেজি');



function কেজিথেকেমণ (মণ) {
    const কেজি = মণ / 37.32 ;
    return কেজি;
}

const result৫ = কেজিথেকেমণ (37.32);
console.log(result৫ ,'মণ');

