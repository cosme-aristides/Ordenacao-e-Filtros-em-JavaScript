let num = 0;
let index = 0;
let filas = Array();

while (true) {
 
  num = parseInt(gets());

  if (num === 0) {break};
  let fila = Array(num);
  for (let i = 0; i < num; i++) {
    fila[i] = gets().split(" ");
    };
  filas[index] = fila;
  index++;
};

let y = 0;
while (y < filas.length) {
  
  pos = 0;
  posimpar = 0;
  nota = filas[y][pos][1];
  
  while (true) {
    tam = filas[y].length;
    if (tam === 1) {break};
    hor = filas[y].map((i,d) => d);
    hor = hor.concat(hor.concat(hor));
    arco = nota % tam;
    pos += tam;
    
    if (nota % 2 === 0) {
      pos = hor[pos - arco];
    }
    else {
      pos += posimpar;
      pos = hor[pos + arco];
    };
    
    posimpar = -1;
    saiu = filas[y].splice(pos,1);
    nota = saiu[0][1];
  };
  y++;
};

filas.forEach(i => console.log("Vencedor(a): " + i[0][0]));
