let num = 0;
let index = 0;

num = parseInt(gets());

let uniformes = Array(num);

while (index < num ) {
  id = gets();
  line = gets().split(" ");
  uniformes[index] = {
  cor : line[0],
  tam : line[1],
  nome : id,
  };
  index++;
};

uniformes.sort((a, b) => a.nome > b.nome ? 1 : -1);
uniformes.sort((a, b) => b.tam < a.tam ? 1 : -1);
uniformes.sort((a, b) => a.cor > b.cor ? 1 : -1);
 
uniformes.forEach(i => console.log(Object.values(i).join(" ")));
