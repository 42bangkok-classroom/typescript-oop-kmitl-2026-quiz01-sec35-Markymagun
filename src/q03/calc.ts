
const args = process.argv.slice(2);
const op = args[0];            
const num1 = Number(args[1]);  
const num2 = Number(args[2]);  


if (isNaN(num1) || isNaN(num2)) {
    console.error("Invalid input");
    process.exit(1);
}


let result: number;

switch (op) {
    case 'add':
        result = num1 + num2;
        break;
    case 'sub':
        result = num1 - num2;
        break;
    case 'mul':
        result = num1 * num2;
        break;
    case 'div':
   
        if (num2 === 0) {
            console.error("Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.error("Error: Invalid operator. Use add, sub, mul, or div.");
        process.exit(1);
}


console.log(result);