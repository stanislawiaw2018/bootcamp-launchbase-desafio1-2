const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está
 localizada na ${empresa.endereco.rua},
  ${empresa.endereco.numero}, a mesma tem uma
  logomarca da ${empresa.cor}, cujo o foco
  é ensinar ${empresa.foco}`)