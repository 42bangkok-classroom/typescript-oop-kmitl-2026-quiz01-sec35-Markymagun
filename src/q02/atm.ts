const balance: number = parseInt(process.argv[2]);
const withdraw: number = parseInt(process.argv[3]);
if(Number.isNaN(withdraw)||Number.isNaN(balance)){
  console.log('Invalid Input')
}
else if(withdraw > balance){
  console.log('Insufficient balance')
}
else if(withdraw>5000){
  console.log('Exceeds per-withdrawal limit')
}
else{
  console.log('Withdrawal approved')
}
