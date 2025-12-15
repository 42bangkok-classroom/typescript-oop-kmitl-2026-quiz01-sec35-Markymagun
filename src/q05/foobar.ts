export{};
const input=+process.argv[2];
if(Number.isNaN(input) || input<=0){
    process.exit()
}
for(let i =1;i<=input;i++){
    if(i%3 ===0 && i%7===0){
        console.log('Foobar');
    }else if(i%3 ===0){
        console.log('Foo');
    }else if(i%7===0){
        console.log('Bar')
    }else{
        console.log(i);
    }
}