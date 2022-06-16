// Como podemos melhorar o esse código usando TS? 


enum Trabalho {
  Padeiro,
  Atriz
}
type Humano={
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Humano= {
  nome: "maria",
  idade: 29,
  profissao: Trabalho.Atriz

};

let pessoa2: Humano = {
  nome: "roberto",
  idade: 19,
profissao:Trabalho.Padeiro

}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}

