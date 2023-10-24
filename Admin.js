import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  criarCurso(nomeCurso, vagas){
    return `Curso de ${nomeCurso} criado com ${vagas} vagas.`
  }
}

const novoAdmin = new Admin('Sergio', 'r@r.com', '2021-01-01');
console.log(novoAdmin.criarCurso('JS', 20))
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())