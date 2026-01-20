let word = (process.argv[2])
let Input1 = Number(word);



if(Number.isNaN(Input1)||(Input1 < 0) || (Input1 > 100) || word === '' || !word ){
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
// export{};
// const input= (process.argv[2])
// const score=parseFloat(input);

// if(isNaN(score) || score < 0||score>100){
//   console.log("Invalid Input");
//   process.exit(0);
// }else{
//   if(score>=80){
//     console.log("Grade is A");
//   }else if (score>=70){
//     console.log("Grade is B");
//   }else if (score>=60){
//     console.log("Grade is C")
//   }else if (score>=50){
//     console.log("Grade is D")
//   }
//   else{
//     console.log("Grade is F")
//   }
// }



