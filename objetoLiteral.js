const user = {
    nome: 'Abimael',
    email: 'abimael@gmail.com',
    nascimento: '2021/01/01',
    role: 'admin',
    ativo: true,
    exibirInfor: function() {
        return console.log(this.nome, this.email)
    }
}

user.exibirInfor();
