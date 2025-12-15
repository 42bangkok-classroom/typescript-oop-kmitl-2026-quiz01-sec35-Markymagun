export{};

const num=+process.argv[2];
let sum=0;
if(Number.isNaN(num)||num<0){
    console.log("Invalid input")
    process.exit()
} for(let i = 1;i<=num;i++) sum += i;
console.log(`Sum: ${sum}`);