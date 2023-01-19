var nome = "Luis Felipe";
var idade = "21"

function mostra(){
    return "Nome: " + nome + ", Idade: " + idade + " anos." 
}

// console.log(mostra());

function mostra2(){
    var nome = "Luis";
    var a = 20;
    var b = 20;
    var soma = a + b;
    if(nome != undefined){
        console.log("Olá %s, a soma dos números selecionados é: %d", nome, soma);
    }
    if(typeof(nome) == "undefined"){
        console.log("Preencha o nome, canalha!")
    }

    console.log("O tippo do nome é %s e o da soma é %s", typeof(nome), typeof(soma));
    console.log("Olá %s, a soma dos números selecionados é: %d", nome, soma, "que", "legal");

}
mostra2();