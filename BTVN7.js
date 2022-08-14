let greeting = 'Hello. My name is John';
//console.log(greeting.charAt(8));//

let str1 = 'The morning is upon us.';
//console.log(str1.slice(11,22));//

let str2 = 'Hello';
let str3 = 'World';
//console.log(str2.concat(' ',str3))//

let bt = 'Hom nay ngay thu 7';
//console.log(bt.charAt(0).toLowerCase()+bt.slice(1, 7),bt.charAt(8).toUpperCase()+bt.slice(9, 20));//
console.log(bt.charAt(0).toLowerCase()+bt.slice(1, 3)+bt.slice(4, 17),(bt.charAt(bt.length-1).replace("7", "8")));
