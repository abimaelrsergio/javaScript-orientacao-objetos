import User from './User.js';
import Docente from './Docente.js';
import Admim from './Admin.js';

const novoUser = new User('Mariana', 'm@m.com', '2021-01-02');
console.log(novoUser.exibirInfos());
