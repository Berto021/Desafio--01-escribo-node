const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`Digite um número: `, (num) => {
  const array = [];
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }
  const total = array.reduce((acc, value) => acc + value);
  console.log(`Esses são os núm ${array}`);
  console.log(`Essa é a soma deles:${total}`);
  readline.close();
});
