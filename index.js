import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Mariana', 'm@m.com', '2021-01-02');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Sergio', 'a@b.com', '2021-02-04')
console.log(novoAdmin.nome);
novoAdmin.nome = 'Viumar'
console.log(novoAdmin.nome)
