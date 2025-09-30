/**
 * Converte temperaturas para Celsius (°C); Fahrenheit (°F); Kelvin (°K)
 *
 *
 * @author Bruno Ferrante <brunoferrante78@gmail.com> 
 * @author Luis Felipe Ghiraldi Augusto <luisfelipeg.augusto@gmail.com>
 * @author João Augusto cassita de Souza <joaoaugustosouza16@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (30/09/2025)
 */
/**
 * Converte de qualquer unidade para Celsius.
 * @param {number} valor - Valor numérico
 * @param {"celsius"|"fahrenheit"|"kelvin"} unidade - Unidade de origem
 * @returns {number} Valor em Celsius
 * @throws {Error} Se o valor não for número ou a unidade for inválida
 */
export function toCelsius(valor, unidade) {
  // Valida se o valor é um número válido
  if (isNaN(valor)) throw new Error("Valor inválido");

  // Faz a conversão dependendo da unidade
  switch (unidade) {
    case "celsius": return valor;                       // já está em Celsius
    case "fahrenheit": return (valor - 32) * 5 / 9;     // Fahrenheit → Celsius
    case "kelvin": return valor - 273.15;               // Kelvin → Celsius
    default: throw new Error("Unidade inválida");       // caso não seja nenhuma das opções
  }
}
export function fromCelsius(celsius) {
  return {
    celsius,                              // mantém em Celsius
    fahrenheit: (celsius * 9/5) + 32,     // Celsius → Fahrenheit
    kelvin: celsius + 273.15              // Celsius → Kelvin
  };
}
export function converterTemperatura(valor, origem) {
   // Primeiro converte o valor para Celsius
  const emC = toCelsius(valor, origem);
  // Depois converte de Celsius para todas as outras unidades
  return fromCelsius(emC);
}
