import User from './User.js';

class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no cruso ${curso}`
  }

  // o método é static e é executado a partir da própria classe, e não de uma instância dela
  static exibirRole() {
    return `A role do docente é: ${this.role}`
  }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '2021-01-01');
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))
console.log(Docente.exibirRole())