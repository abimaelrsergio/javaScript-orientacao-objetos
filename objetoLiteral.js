const user = {
    nome: 'Abimael',
    email: 'abimael@gmail.com',
    nascimento: '2021/01/01',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        return console.log(this.nome, this.email)
    }
}

//user.exibirInfos();
// a função perdeu o contexto, perdeu a conexão om o objeto user.
// O this não funciona na variável exibir
//const exibir = user.exibirInfos;
//exibir();

// é o mesmo que:
//const exibir = function() {
    //return console.log(this.nome, this.email)
//}
//exibir();

// outro exemplo que traz o objeto global, contexto global
//const exibir = function() {
//    return console.log(this)
//}
//exibir();

// Prender a função em um contexto usando bind()
const exibir = function() {
    return console.log(this.nome)
}
const exibirNome = exibir.bind(user);
exibirNome();
exibir();