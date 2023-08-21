function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Exporta las funciones al espacio de nombres global.

export { add, subtract, multiply, divide };

// Importa las funciones de la biblioteca `my-lib.js`.

import { add, subtract, multiply, divide } from "my-lib.js";

// Usa las funciones.

const sum = add(1, 2); // 3
const difference = subtract(10, 5); // 5
const product = multiply(3, 4); // 12
const quotient = divide(10, 2); // 5
