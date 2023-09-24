function suma(a,b){
    return a + b ;
}

function rest(a,b){
    return a - b ;
}

function calc(a,b, callback){
    return callback(a,b);
}

console.log(calc(2,2, rest));

function saludar(name){
    console.log("hola" + name);
}

setTimeout(saludar, 2000, "Lucas");
