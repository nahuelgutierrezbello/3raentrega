const words = [
  "Messi",
  "Riquelme",
  "Gallardo",
  "Milito",
  "Bochini",
  "Lazzaro",
  "Aimar",
  "Scaloni",
  "Montiel",
  "Di Maria",
  "De Paul",
  "Satanas Paez",
  "Luly Rios",
  "Garrafa Sanchez",
  "Bazan Vera",
  "Akerman",
  "Chino Luna",
  "Cavenaghi",
  "Vietto",
  "Discoteca Nuñez",
  "Maradona",
  "Lautaro",
  "julian alvarez",
  "Palermo",
];

const numbers = words.map((word, index) => ({
  word,
  number: index + 1,
}));

// Utilizamos los objetos para obtener el número de camiseta de cada jugador
const playerNumbers = numbers.map((player) => player.number);

console.log(playerNumbers);
