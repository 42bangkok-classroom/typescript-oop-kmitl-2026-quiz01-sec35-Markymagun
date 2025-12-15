let balance = Number(process.argv[2]);
let amount = Number(process.argv[3]);

if(Number.isNaN(amount)||amount<0){
    console.log("Invalid input")
    process.exit
}
if(amount > balance){
  console.log("Insufficient funds");
}
else if(amount >= 5000){
  console.log("Exceeds per-withdrawal limit");
}
else console.log("successful");