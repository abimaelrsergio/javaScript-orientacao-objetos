const user = {
    nome: 'Abimael',
    email: 'abimael@gmail.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        return console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado')
    }
}

// Parametro 1: Objeto que vai herdar propriedades (admin)
// Parametro 2: Objeto que vai ceder as propriedades (user)
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();