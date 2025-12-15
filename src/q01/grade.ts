const grade=+process.argv[2];
console.log(grade>=80 ? "A" : grade >=70 ? "B"
    : grade>=60 ? "C" :grade>=50 ? "D" : "F")