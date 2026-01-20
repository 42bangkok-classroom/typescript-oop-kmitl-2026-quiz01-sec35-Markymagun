const op: string = process.argv[2];
const n1: number = parseFloat(process.argv[3]);
const n2: number = parseFloat(process.argv[4]);
let x:number = 0
if(isNaN(n1)||isNaN(n2)||(op ==='div' && n2===0)){
    console.log('Invalid input');
}else if(op=== 'add'){
    x= n1+n2
}else if(op=== 'sub'){
    x=n1-n2
}else if(op==="mul"){
    x=n1*n2
}else if(op==='div'){
    x=n1/n2
}else{
    console.log('Invalid operator')
}
const reult = (x).toString
console.log(x)