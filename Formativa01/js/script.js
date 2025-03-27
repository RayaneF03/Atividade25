//                      ATIVIDADE 01

const exercicio1 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += i + " # ";
  }
  resposta.innerHTML = resultado;
};

//                      ATIVIDADE 02

const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  if (numero <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= numero; i += 2) {
      resultado.innerHTML += i + " ";
    }
    erro.innerHTML = "";
  }
};

//                      ATIVIDADE 03

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let primo = true;
  if (numero <= 1) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
    if (primo) {
      resultado.innerHTML = "O número " + numero + " é primo";
      erro.innerHTML = "";
    } else {
      resultado.innerHTML = "O número " + numero + " não é primo";
      erro.innerHTML = "";
    }
  }
};

//                      ATIVIDADE 04

const exercicio4 = () => {
  let tabuada = "";
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  if (numero <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    for (let i = 1; i <= 10; i++) {
      tabuada += numero + " x " + i + " = " + numero * i + "<br>";
    }
    resultado.innerHTML = tabuada;
    erro.innerHTML = "";
  }
};

//                      ATIVIDADE 05

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let i = 0;
  if (numero <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    while (i <= numero) {
      if (i % 2 != 0) {
        resultado.innerHTML += i + " ";
      }
      i++;
    }
    erro.innerHTML = "";
  }
};

//                      ATIVIDADE 06

const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let i = 0;
  let soma = 0;
  if (numero <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    while (i <= numero) {
      if (i % 2 == 0) {
        soma += i;
      }
      i++;
    }
    resultado.innerHTML =
      "A soma dos números pares de 0 a " + numero + " é " + soma;
    erro.innerHTML = "";
  }
};

//                      ATIVIDADE 07

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let i = 10;
  while (i >= 1) {
    resposta.innerHTML += i + " ";
    i--;
  }
};

//                      ATIVIDADE 08

const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let palindromo = true;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] != palavra[palavra.length - i - 1]) {
      palindromo = false;
    }
  }
  if (palindromo) {
    resultado.innerHTML = "A palavra " + palavra + " é um palíndromo";
  } else {
    resultado.innerHTML = "A palavra " + palavra + " não é um palíndromo";
  }
  erro.innerHTML = " ";
};


//                      ATIVIDADE 09

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  resposta.innerHTML = "A soma dos números de 1 a 100 é " + soma;
};

//                      ATIVIDADE 10

let contador = 0;
let soma = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  if (numero >= 0) {
    soma += parseInt(numero);
    contador++;
  }
  resultado.innerHTML = `A média dos números digitados é: ${soma / contador}`;
  erro.innerHTML = " ";
};

//                      ATIVIDADE 11

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resposta.innerHTML += i + " ";
    }
  }
};

//                      ATIVIDADE 12

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let soma = 0;
  if (numero <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i < numero.length; i++) {
      soma += parseInt(numero[i]);
    }
    resultado.innerHTML =
      "A soma dos dígitos do número " + numero + " é " + soma;
    erro.innerHTML = "";
  }
};

//                      ATIVIDADE 13

const exercicio13 = () => {
  let resposta = document.getElementById("resposta");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let primo = true;
  if (num1 <= 1 || num2 <= 1) {
    erro.innerHTML = "Número inválido";
    resposta.innerHTML = "";
  } else {
    for (let i = num1; i <= num2; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          primo = false;
        }
      }
      if (primo) {
        resposta.innerHTML += i + " ";
      }
      primo = true;
    }
    erro.innerHTML = "";
  }
};
//                      ATIVIDADE 14
const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num2 <= 0 || num1 <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "A área do retângulo é " + num1 * num2;
    erro.innerHTML = "";
  }
};
//                      ATIVIDADE 15
const exercicio15 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let vogais = "aeiou";
  let consoantes = "";
  let resultadoVogais = "";
  let resultadoConsoantes = "";
  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      resultadoVogais += palavra[i] + " ";
    } else {
      resultadoConsoantes += palavra[i] + " ";
    }
  }
  resultado.innerHTML =
    "Vogais: " + resultadoVogais + "<br>Consoantes: " + resultadoConsoantes;
  erro.innerHTML = "";
};
//                      ATIVIDADE 16
const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  if (num1 <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "A área do círculo é " + Math.PI * num1 * num1;
    erro.innerHTML = "";
  }
};
//                      ATIVIDADE 17

const exercicio17 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 <= 0 || num2 <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "A área do triângulo é " + (num1 * num2) / 2;
    erro.innerHTML = "";
  }
};
//                      ATIVIDADE 18
const exercicio18 = () => {
  let resultado = document.getElementById("resultado");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let erro = document.getElementById("erro");
  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    erro.innerHTML = "Número inválido";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "A área do triângulo é " + (num1 * num2 * num3) / 2;
    erro.innerHTML = "";
  }
};
//                      ATIVIDADE 19
const exercicio19 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let letra = document.getElementById("letra").value;
  let palavra = document.getElementById("palavra").value;
  let vogais = ['a', 'e', 'i', 'o', 'u'];


  if (letra.length > 1) {
      erro.innerHTML = 'Digite apenas uma letra';
      resultado.innerHTML = '';
  } else {
      palavra = palavra.toLowerCase();
      let palavraVetor = palavra.split('');
      for (let i = 0; i < palavraVetor.length; i++) {
          if (vogais.includes(palavraVetor[i])) {
              palavraVetor[i] = letra; 
          }
      }
      palavra = palavraVetor.join('');
      resultado.innerHTML = `A palavra resultante é: ${palavra}`;
      erro.innerHTML = '';
  }
}
//                      ATIVIDADE 20
const exercicio20 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }
  resultado.innerHTML = fraseInvertida;
  erro.innerHTML = "";

};
//                      ATIVIDADE 21
const exercicio21 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  let fraseSemEspacos = "";
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != " ") {
      fraseSemEspacos += frase[i];
    }
  }
  resultado.innerHTML = fraseSemEspacos;
  erro.innerHTML = "";
};
//                      ATIVIDADE 22
const exercicio22 = () => {
  let resposta = document.getElementById("resposta");
  let erro = document.getElementById("erro");
  let numero = 0;
  let soma = 0;
  erro.innerHTML = ""; 

  while (soma < 100) {
    numero = prompt("Digite um número");
    if (isNaN(numero) || numero === "") {
      erro.innerHTML = "Por favor, digite um número válido!";
    } else {
      soma += parseInt(numero);
    }
  }

  resposta.innerHTML = "A soma dos números digitados é " + soma;
};
//                      ATIVIDADE 23
const exercicio23 = () => {
  let resposta = document.getElementById("resposta");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let palavras = frase.split(" ");
  let quantidade = 0;
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] == palavra) {
      quantidade++;
    }
  }
  resposta.innerHTML =
    "A palavra " + palavra + " aparece " + quantidade + " vezes na frase";
  erro.innerHTML = "";
};
//                      ATIVIDADE 24
const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  let palavras = frase.split(" ");
  let fraseFormatada = "";
  for (let i = 0; i < palavras.length; i++) {
    fraseFormatada +=
      palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + " ";
  }
  resultado.innerHTML = fraseFormatada;
  erro.innerHTML = "";
};
//                      ATIVIDADE 25
const exercicio25 = () => {
  let resposta = document.getElementById("resposta");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);
  resposta.innerHTML = "Os números em ordem crescente são " + numeros;
  erro.innerHTML = "";
};
