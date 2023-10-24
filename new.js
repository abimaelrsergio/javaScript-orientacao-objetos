// cria instancias através de funções contrutoras

// Neste caso com letra maiúscula User
function User(nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// Criando instancia
//const novoUser = new User('Abimael', 'abimael@gmail.com');
//console.log(novoUser.exibirInfos());

// Agora usando Object create
//function Admin(role) {
  //  User.call(this, 'Abimael', 'ab@b.com');
  //  this.role = role || 'estudante';
//}

//Admin.prototype = Object.create(User.prototype);
//const novoUser = new Admin('admin');
//console.log(novoUser.exibirInfos());
//console.log(novoUser.role);

/*
const user = {
    exibirInfos: function(nome) {
        return nome
    }
}

const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('abi'))
console.log(user.isPrototypeOf(novoUser))
*/

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('abimael', 'b@c.com')
console.log(novoUser.exibirInfos())

