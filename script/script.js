//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.
const products = require("./data.js");

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) { 
  return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(sumNumbers(numbers));

// //2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  return array.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0);
}
console.log(totalProducts(products));

// //3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  return array.reduce((total, product) => product.size === "GG" ? total + product.price : total, 0);
}
console.log(totalProductsSize(products));

// //DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
function totalProductsSale(array) {
  return array.reduce((total, product) => product.sale ? total + (product.price * 0.5) : total, 0);
  
}
console.log(totalProductsSale(products));
