const BGcolor = () => {
    const randomcolor = Math.floor(Math.random()*1677215).toString(16);
    document.body.style.backgroundColor = "#" + randomcolor;
}
ColorBTN.addEventListener("click",BGcolor);
BGcolor();

let count = 0
const addBTN = () => {
    count +=1;
    document.getElementById("BTN").innerHTML = count;
}
BTN.addEventListener("click",addBTN);
BTN();