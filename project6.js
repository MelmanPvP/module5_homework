const massive=[1, 9, 'butterfly']
// for (var b = 0; b < a.length; b++) {
//     if (a[b] !== a[0])
//     {return !1;}
//     else
//     {
//     return !0}
// }
let check = true;
for (let index = 1; index < massive.length; index++) {
    const element = massive[index];
    //element это текущий элемент
    // если(текущий элемент не равен нулевому из нашего массива)
    if (massive[index] !== massive[0])
    {
        check=false;
        break
        // записываем в check false
        // останавливаем массив
    }
}
console.log(check)
