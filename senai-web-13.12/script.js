// alert('seu js deu certo !')

// pode mudar(valor global)
// var
// pode mudar(valor local)
// let
// não pode mudar
// const

// tipos de dados:
// Number -> tipo para número
// String -> textos, sempre entre 'texto' ou "texto"
// Boolean -> true ou false

// declaração de vaiaveis:
//= -> atribuição de valores
// const meuNome = 'Amorim';
// alert(meuNome)
// let minhaIdade = 15
// alert(minhaIdade)

// variavel do tipo Boolean/verdadeiro ou falso
// let fumante = true;
// fumante = false;
// alert(fumante)

// 1 -> declare uma let com o texto "ola mundo" chamada "mensagemInicial"
// 2 -> declare uma variavel que não muda de valor chamada

// let exer = "mensagemInicial"
// exer = "ola mundo !"
// alert(exer)

// let dtNasc = "sete de maio de dois mil e oito !"
// alert (dtNasc)

// operações com variaveis-PT.2
// const primeiraIdade = 8;
// const segundoIdade = 2;
// var somaDasIdades = primeiraIdade+segundoIdade;
// alert(somaDasIdades)

// var subtracaoDasIdade = primeiraIdade-segundoIdade;
// alert(subtracaoDasIdade)

// var multiplicacaoDasIdades = primeiraIdade*segundoIdade;
// alert(multiplicacaoDasIdades)

// var divisaoDasIdades = primeiraIdade/segundoIdade;
// alert(divisaoDasIdades)

// operação com String
// const profLeo = "Leonardo";
// const profMoises = "Moises";
// o simbolo de "+" quando aplicado a texto, realiza a concatenação dos valores.
// const mensagemfinal = "Ola " + profLeo + " e " + profMoises + " comos estão ?"
// alert(mensagemfinal)

// operação com Boolean
// = -> atribuição
// == -> comparação
// === -> comparação de valores e TIPO
// != -> diferença
// console.log(2 == 2); vai retornar "true"
// console.log (2 != 2); vai retornar "false"
// console.log(2 === "2"); vai retornar "false"

// console.log(true+true); -> o valor de "true" é 1 pois é o valor que representa o "verdadeiro"
// console.log(false-false); -> o valor de "false" é 0 pois é o valor que representa o "falso"

// operações matematicas com variaveis PT.3

// o computador segue as regras matematicas mult./divisão primeiro e depois soma/sub.

// const resultadoOperacao = 5+2*1+6/2;
// console.log(resultadoOperacao)

// const resultadoOperacaoDois = ((5+2) * (1+6) / 2)
// console.log(resultadoOperacaoDois)

// estrutura condicional PT.4
// if -> se
// if("leo"!= "moises"){
//       alert("primeira condição");
//       if(2===2){
//             alert("segunda condição");
//             if(4==4){
//                   alert("terceira condição")
//             }
//       }
// }

// 1
// verifique se 5 é estritamente igual a "5", se for, verifique se 2 é igual 2. Caso todos sejam satisfeito, mostre "todos iguais, Dougras !"

// 2
// verifique se "leao" é igual a "leao", se for, verifique se 42 é igual a "42". Caso todos sejam satisfeitos, mostre "leao e 42 iguais"

// if(5===5){
//       if(2==2){
//             alert("todos iguais, Dougras !")
//       }
// }
// if("leao"=="leao"){
//       if(42=="42"){
//             alert("leao e 42 iguais")
//       }
// }
// && -> e ->* (condições todas serem satisfeitas) 1*1*1*1*1*1*1*1*1*0= 0
// || -> ou -> + (qualquer uma das condições a ser satisfeitas) 
// 1+1+1+1+1+1+1+1+1+1+0= 1

// if (2 == 2 && 2 === "2"){
//       alert("false")
// }

// if(2===2 || 2==='2'){
//       alert("entrei no if do OU!")
// }
// if((2==="2" && 5==5) || 2===2){
//       alert("entrei na terceira condição");
// }

// estrutura condicional PT.4
// if(2===2 && 2==='2'){
//       alert("entrei no if do OU!")
// }
// else{
//       alert("entrei no else")
// }

// estrutura condicional PT.5 (else if)
// if(2===2 && 2==="2"){
//       alert('entrei no if')
// }
// else if(5=='5'){
//       alert("entrei no else if!")
// }
// estrtura condicional PT.6 (switch-case)

// const minhaIdade = 28;
// switch(minhaIdade) {
//       case 10: 
//             alert("tem 10 anos");
//             break;
//       case 11:
//             alert("tem 11 anos");
//             break;
//       case 28:
//             alert("tem 28 anos");
//             break;
//       default:
//             alert("idade não encontrada");
//             break;
// }

// considere os valores entre 1 e 5 para seu switch;
// caso o usuario digite algum desses valores (1 até 5), o sistema deve mostrar a mesma quantidade de vezes a palavra "dougras" se não, escrever "vacilou Dougras"

// const dougras= 5;
// switch(dougras) {
//       case 1:
//             console.log("Dougras")
//             break
//       case 2:
//             console.log("Dougras Dougras")
//             break
//       case 3:
//             console.log("Dougras Dougras Dougras")
//             break
//       case 4:
//             console.log("Dougras Dougras Dougras Dougras")
//             break
//       case 5:
//             console.log("Dougras Dougras Dougras Dougras Dougras")
//             break
//       default:
//             console.log("vacilou Dougras")
//             break
// }

// loop de repetição (for)

// for (let parada = 0;  parada <5 ; parada++){
//       console.log(parada*parada)
//       console.log("douglas")
// }

// faça a tabuada do 7.

// for (let tabuada =0; tabuada <=10 ; tabuada++)
//       console.log(tabuada*7)

// mostre todos os pares de 0 a 100

// for (let indice =0; indice <=100; indice++){
//       if (indice % 2 == 0) {
//             console.log(indice)
//       }
// }
let fatorial= 7;
let resultado= 1;
for (let indice =1; indice <= fatorial; indice++){
      resultado= resultado*indice;
      console.log(resultado);
}