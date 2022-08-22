/*
1. Cho mảng A = [5,4,7,8,10,20,1], output -> [1,4,5,7,8,10,20] (hint: sử dụng hàm Array.sort)
2. Cho mảng B = [1,2,'a',{}, 'b', 'c', 2,4,5], output -> mảng C = [1,2,2,4,5] 
3. Cho mảng D = [1,4,10,100,50,69, 96], output -> số lớn nhất trong mảng, số nhỏ nhất trong mảng
4. Cho mảng E = [1,2,'a', 'b', 'c', 2,4,5], không sử dụng thêm mảng mới, 
   đưa các số về đầu mảng và các chữ về cuối mảng, sử dụng các hàm pop, push, shift, unshift
5. Cho mảng F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0], tìm ra vị trí thứ 4 của số 1 trong mảng (hint: dùng findIndex)
*/
//1.
const A = [5,4,7,8,10,20,1];
function compareNumbers (a,b) {
    return a - b;
}
A.sort(compareNumbers);
//console.log (A);

//2. copy tren mang. ko hieu j

const B = [1,2,'a',{}, 'b', 'c', 2,4,5];
let m;
const regex = /\d+/gm;        //  \d:so bat ki ; +: co the xuat hien nhieu lan ; flag gm so khop ca chuoi dang tim.
const C = [];
while ((m = regex.exec(B)) !== null) {
  // To avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
    C.push(parseInt(match))
  });
}
//console.log(C);

//3.
const D = [1,4,10,100,50,69, 96];
const maxD = Math.max(...D);
const minD = Math.min(...D);
//console.log(maxD,minD);

//4. chua lam duoc
/*
const E = [1,2,'a', 'b', 'c', 2,4,5];
function sortE (E) {
  E.forEach (a => {
    if (typeof(a) == 'string') E.pop();
  })
}
*/

console.log (E)
//5
const F = [1,23,41,5,6,1,14,66,1124,1,1,55,15,0];
//console.log (F.lastIndexOf(1));
//console.log (F.indexOf(1,-4));