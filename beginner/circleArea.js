//A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
//- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
let radius = parseFloat(prompt("Type the circle's radius."));
let area = (Math.PI * radius**2).toFixed(4);
console.log(`A = ${area}`);
