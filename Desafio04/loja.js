/*

DESAFIO 04 - LOJA TEWCH
Uma loja de informática possui vários produtos cadastrados.

Crie um array de objetos contendo:
- nome
- preço

Utilize uma estrutura de repetição para mostrar apenas os produtos que custam mais de R$100,00.
Exiba o nome dos produtos encontrados.
*/
let produtos = [
{ nome: "Cartão de memória" , preco: 120},
{nome: "CPU" , preco: 450},
{nome:"fone" , preco: 80},
{nome:"Monitor" , preco: 560}
];
for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].preco > 100){
console.log(produtos[i].nome);
    }
}
