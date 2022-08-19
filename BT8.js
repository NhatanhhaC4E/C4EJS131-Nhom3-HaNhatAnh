let x = Boolean
let y = Boolean

if (x==true && y==true) {
    console.log ('den toi');
}
else if (x==true && y==false) {
    console.log ('den sang')
}
    else if (x==false && y ==true)
        console.log ('den sang')

else {console.log ('den toi')};
//1
let max1=101;
let tong=1;
for (i=1;i<=max1;i++){
    if (i%2==1) {
        tong = tong+i;
    }}
    console.log(tong)

//2
let max2=1000;
let s2=0
for (i=2; i<=max2; i++){
    s2 = s2 + 1/i;
}
console.log (s2);
//3
let max3=100;
let s3=1;
for (i3=2;i3<=max3;i3++){
    if (i3%2==1) {
        s3 = s3 + i3;
    }
    else {s3 = s3-i3};
}
console.log (s3)
//4
let s4=1
for(i4=1;i4<=20;i4++) {
    s4=s4*i4;
}
console.log(s4);

//5
let s5 = 0;
let a2 = 0;
for (i5=1; i5<=100; i5++) {
    a2=i5/[i5+1];
    if (i5%2==0) {
        s5=s5+a2;
    }
    else {
        s5=s5-a2;
    }
}
console.log (s5)
//6 
