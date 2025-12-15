// const grade=+process.argv[2];
// if(Number.isNaN(grade)||grade<0){
//     console.log('Invalid Input');
//     process.exit()}
// console.log(grade>=80 ? "A" : grade >=70 ? "B"
//     : grade>=60 ? "C" :grade>=50 ? "D" : "F")
const input = process.argv[2];
const point = Number(input)
export {}
if (Number.isNaN(point)) {
    console.log('Invalid Input');
}else if (point < 0 || point > 100){
    console.log('Invalid Input');
}else{
    if (point >= 80){
        console.log('A');
    }else if(point >= 70){
        console.log('B');
    }else if(point >=60){
        console.log('C');
    }else if(point >=50){
        console.log('D');
    }else {
       console.log('F');
    }
}