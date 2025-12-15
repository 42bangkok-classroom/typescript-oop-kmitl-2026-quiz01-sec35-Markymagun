export{};


let num = +process.argv[2];

if(Number.isNaN(num) || num<=0){
    console.log("Invalid input")
    process.exit()
}
let result = '';
for(let i = num;i > 0;i--){
    for(let j = i;j > 0;j--) {
        result += j;
    }
    result += '\n'
}
console.log(result);
export {};