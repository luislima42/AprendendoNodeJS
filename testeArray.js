function testeArray(){
    var numeros = [1,2,3];
    numeros.push(4)
    numeros.push(5)
    for (let i = 0; numeros.length > i; i++){
        console.log(numeros[i]);
    } 
}

//testeArray();

function testeArray2(){
    var numeros = [1,2,3];
    numeros.push(4)
    numeros.push(5)
    for (let i in numeros){
        console.log(numeros[i]);
    } 
}

//testeArray2();

function testeArray3(){
    var numeros = [1,2,3];
    numeros.push(4)
    numeros.push(5)
    numeros.map(n => console.log(n))
}

testeArray3();