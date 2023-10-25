import User from './User.js';

export default class Docente extends User {
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
