// Importa a função principal que faz a conversão
import { converterTemperatura } from "./conversor.js";

// Seleciona o formulário e a área onde o resultado será exibido
const form = document.getElementById("converterTemp");
const resultado = document.getElementById("resultado");

// Escuta o evento de "submit" do formulário (quando o usuário clica em Converter)
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que a página recarregue ao enviar o formulário

  // Pega os valores digitados pelo usuário
  const valor = parseFloat(document.getElementById("temperatura").value);
  const origem = document.getElementById("origem").value;

  try {
    // Faz a conversão para todas as unidades
    const all = converterTemperatura(valor, origem);

    // Cria um objeto que guarda os nomes das unidades de temperatura
    // A chave é o nome em minúsculo (usado no código)
    // O valor é o nome formatado com a primeira letra maiúscula (mostrado na tela)
    const nomes = {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
    };
    
    // gera lista de resultados, excluindo a unidade de origem
    const html = Object.entries(all)
      .filter(([unidade]) => unidade !== origem) // remove a unidade escolhida pelo usuário
      .map(([u, v]) => { // Define o símbolo correto para cada unidade de temperatura
        let unidadeSimbolo = "";
        if (u === "celsius") unidadeSimbolo = "°C";
        if (u === "fahrenheit") unidadeSimbolo = "°F";
        if (u === "kelvin") unidadeSimbolo = "K";
        // Retorna uma linha de HTML formatada com:
        // - o nome da unidade (u)
        // - o valor convertido com 1 casas decimais
        // - o símbolo correspondente (°C, °F ou K)
      return `<p class="${u}"><b>${u}:</b> ${v.toFixed(1)} ${unidadeSimbolo}</p>`;}) 
      .reduce((acc,cur) => acc+cur,""); // junta todos os parágrafos em uma única string
      // acc = acumulador (resultado parcial até agora)
      // cur = item atual do array sendo processado
    
    // Exibe os resultados na tela
    resultado.className = "resultado-ok";
    resultado.innerHTML = html;
  } catch (erro) {
    // Caso ocorra algum erro, mostra a mensagem na tela
    resultado.className = "resultado-erro";
    resultado.textContent = `❌ ${erro.message}`;
  }
});

// Escuta o botão "Limpar" (reset) e apaga o resultado
form.addEventListener("reset", () => {
  resultado.className = "";
  resultado.textContent = "";
});

// Gera nuvens no fundo
const ceu = document.getElementById("ceu");

for (let i = 0; i < 100; i++) {
  // quantidade de nuvens
  const nuvem = document.createElement("img");
  nuvem.src = "images/nuvem.png";
  nuvem.classList.add("nuvem");

  // tamanho aleatório (entre 40px e 120px)
  const tamanho = Math.floor(Math.random() * 80) + 40;
  nuvem.style.width = tamanho + "px";

  // posição aleatória
  nuvem.style.top = Math.random() * 100 + "%";
  nuvem.style.left = Math.random() * 100 + "%";

  ceu.appendChild(nuvem);
}


