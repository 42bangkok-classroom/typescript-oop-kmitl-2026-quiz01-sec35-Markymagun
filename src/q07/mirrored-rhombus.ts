const size = +process.argv[2];
if(Number.isNaN(size) || size<=0){
    process.exit()
}
for(let i = 0;i<size;i++){
    let row = '';
    for(let k = size-i-1;k > 0;k--) {
        row += " ";
    }
    for(let j = 0;j < size;j++){
        row +="*"
    }
    console.log(row);
}
export {};