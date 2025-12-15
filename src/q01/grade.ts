let word = (process.argv[2])
let Input1 = Number(word);



if(Number.isNaN(Input1)||(Input1 < 0) ||
 (Input1 > 100) || word === '' ){
   console.log("Invalid Input");
   process.exit();
}

if(Input1 >= 50 && Input1 < 60){
  console.log("Grade is D");
}

else if(Input1 >= 60 && Input1 < 70){
  console.log("Grade is C");
}

else if(Input1 >= 70 && Input1 < 80){
  console.log("Grade is B");
}

else if(Input1 >= 80 && Input1 <= 100){
  console.log("Grade is A");
}

else if (Input1 >= 0 && Input1 < 50){
  console.log("Grade is F");
}

export {};