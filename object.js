function objeto1(){
    var pessoa = Object();
    pessoa.nome = "Luis";
    pessoa.sobrenome = "Lima";
    pessoa.hello = function(){
        return "Hello Pessoa"
    }
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.hello())
}

//objeto1()

function objeto2(){
    var pessoa = {
        nome : "Luis",
        sobrenome : "Lima",
        hello : function(){
            return "Hello Pessoa";
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

//objeto2();

function pessoa(){
    this.nome = "Luis";
    this.hello = function(){
        return "Hello Pessoa";
    }
}

function objeto3(){
    var pessoa = new pessoa()
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
} 

//objeto3()

class Person{
    constructor(){
        this.nome = "Luis"
    }
    hello(){
        return "Hello Pessoa"
    }
}

function objeto4(){
    var pessoa = new Person()
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
} 

objeto4()
