let num = 0;
let index = 0;
let cof = 0;

num = parseInt(gets());

let filas = Array(num);
let cad = Array(num);
let ordem = Array(num);

while (index < num ) {
  id = gets();
  line = gets();
  filas[index] = line.split(" ");
  cad[index] = line.split(" ");
  index++;
};

cad.forEach(i => i.sort((a, b) => b-a));

while (cof < num ) {
  ordem[cof] = cad[cof].filter((i,d) => d === filas[cof].indexOf(i));
  cof++;
};

ordem.forEach(i => console.log(i.length)); 
