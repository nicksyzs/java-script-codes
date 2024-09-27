const carros = ['Renegade', 'Toro', 'Tracker'];

const carrosClassicos = ['Fusca',
    'Corcel',
    'Chevette'
];

const carrosEsportivos = [];
carrosEsportivos[0] = 'Ferrari';
carrosEsportivos[1] = 'McLaren';
carrosEsportivos[2] = 'Porsche';

const carrosUtilitarios = new Array('Montana', 'Toro', 'S10')

const notas = [8.5, 7.7, 10];

alert(carrosEsportivos[1]); //Mostra o carro classificado no 1

const aluno = { nome: 'Alex', telefone: '1234-5678', notas };
alert(aluno.nome); //Mostra o nome do aluno

alert(`método length: ${carros.length}`) //Mostra o numero de carros dentro do array

carros.push('Gol') //Inserir elemento no Array
alert(carros); //Exibir todos os itens

carros.pop(); //Deleta o ultimo elemento
alert(carros);

carros.shift(); //Remove o primeiro elemento e reorganiza os demais
alert(carros);

carros.unshift('Ave Maria doido'); //Adiciona um elemento no começo da lista
alert(carros);

delete carros[1]; //Elimina um elemento numa posição especifica
alert(carros);

carros.splice(1, 0, 'Carro A', 'Carro B'); //Posição Assumida, Posição Removida, Carros Adicionados
alert(carros);

alert(carros.join(' - ')) //Muda a exibição

const listCarros = carros.concat(carrosEsportivos); //Exibe a lista somando os outros carros
alert(listCarros);

const carros = ['Renegade', 'Toro', 'Tracker'];

alert(carros.sort());
alert(carros.reverse()); //reverter a ordem exibida
