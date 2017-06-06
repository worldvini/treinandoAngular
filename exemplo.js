//codigos exemplo de inserir geo localização no google maps

var bCantinaPoveirinha = [{
    address: "Rua Lord Clemente Atlee, 70",
    complement: "Chácara Inglesa, São Paulo - SP, 05142-020",
    lat: -23.495852,
    lng: -46.728097,
    name: "Comida di Buteco - Cantina Poveirinha"
}]

var LTrianonMasp = [{
    name: "Loja Trianon-Masp (SP)",
    lat: -23.560883,
    lng: -46.657415,
    address: "Avenida Paulista 1713",
    complement: "Bela Vista, São Paulo - SP, 01310-000"
}]

var bMurruga = [{
    name: "Comida di Buteco - Boteco do Murruga",
    lat: -23.64757,
    lng: -46.663158,
    address: "Av. Mascote, 57",
    complement: "Vila Mascote, São Paulo - SP"
}]

var bCamisa10 = [{
    name: "Comida di Buteco - Bar Camisa 10",
    lat: -23.549174,
    lng: -46.576382,
    address: "Rua Bom Sucesso, 1218",
    complement: "Cidade Mãe do Céu, São Paulo – SP"
}]

var bDistintaFreguesia = [{
    address: "Rua Enéias Carrilho, 63",
    complement: "Vila Albertina, São Paulo - SP",
    lat: -23.502813,
    lng: -46.687145,
    name: "Comida di Buteco - Distinta Freguesia"
}]

var bOAlemao = [{
    address: "Av. Engenheiro Caetano Álvares, 5131",
    complement: "Mandaqui, São Paulo - SP, 02413-100",
    lat: -23.485695,
    lng: -46.638897,
    name: "Comida di Buteco - O Alemão"
}]

var bZurAlten = [{
    address: "Rua Princesa Isabel, 102",
    complement: "Brooklin Paulista, São Paulo - SP",
    lat: -23.624092,
    lng: -46.684424,
    name: "Comida di Buteco - Bar Zur Alten Mühle"
}]

var bPinu = [{
    address: "Rua Félix de Sousa, 284",
    complement: "Vila Congonhas, São Paulo - SP, 04612-080",
    lat: -23.623011,
    lng: -46.664147,
    name: "Comida di Buteco - Bar do Pinu"
}]

var bVovoTela = [{
    address: "Rua Tenente Marino Freire, 270",
    complement: "Maria Helena, Belo Horizonte - MG",
    lat: -19.801805,
    lng: -43.993499,
    name: "Comida di Buteco - Vovó Tela"
}]

var bBerinjela = [{
    address: "Praça 20 de Janeiro, 67",
    complement: "Vila Reg. Feijo, São Paulo - SP, 03335-050",
    lat: -23.553459,
    lng: -46.568766,
    name: "Comida di Buteco - Bar do Berinjela"
}]

var frutas = ["maça", "banana", "uva", "maça", "graviola"]

frutas.reduce((acc, elem) => {
    return Object.assign(acc, {
        [elem]: (acc[elem] || 0) + 1
    })
}, {})

//resultado Object {maça: 2, banana: 1, uva: 1, graviola: 1}