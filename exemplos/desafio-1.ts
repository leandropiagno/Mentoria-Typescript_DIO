// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario = {
  codigo: 10,
  nome: "Jonh"
};

let funcionario2: {codigo: number, nome: string} = {
  codigo: 10,
  nome: 'John'
}

  interface Funcionario {
    codigo: number,
    nome: string
  } 

  let funcionario3: Funcionario ={
    codigo: 200,
    nome:'John'
  }