/*

    Na Digital College os professores que possuem carro tem direito a um cartão
    estacionamento para guardarem seus veículos, quando um professor passa pela cancela, a
    mesma registra o horário em que ele entrou ou saiu, o gerente quer saber em que período
    do dia os professores mais acessam o estacionamento, sabendo disso crie uma função que
    identifique pelo horário em que período do dia(Manhã(05:00 as 11:59), Tarde(12:00 as
    17:59), ou Noite(18:00 as 04:59)) aconteceu o acesso, execute essa função 10 vezes com
    horários diferentes, e escreva na tela a quantidade de acessos de cada período;

*/

let manha = 0;
let tarde = 0;
let noite = 0;

function gerarNumAleatorio() {
    return Math.random() * 24;
};

for (let i = 0; i < 10; i++) {
    let hora = gerarNumAleatorio();
    hora >= 5 && hora < 12? manha++ : hora >= 12 && hora < 18? tarde++ : noite++;
}

console.log('Manhã: ' + manha);
console.log('Tarde: ' + tarde);
console.log('Noite: ' + noite);