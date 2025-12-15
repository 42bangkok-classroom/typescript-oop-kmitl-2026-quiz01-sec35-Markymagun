const grade=+process.argv[2];
if(Number.isNaN(grade)||grade<0){
    console.log('Invalid Input');
    process.exit()}
console.log(grade>=80 ? "A" : grade >=70 ? "B"
    : grade>=60 ? "C" :grade>=50 ? "D" : "F")