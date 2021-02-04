


let bonais = 400;
let Palitodeheladodeagua = 1000;
let Bombonheladoconarequipe = 1500;
let Mediolitrodehelado = 2000;
let Palitodeheladodecrema = 2200;
let Bombonheladoconchispasdechocolate = 2500;
let Bombonheladoconfresas = 2800;


let listado = "";

let u1 = prompt("Ingrese su numbre ");

let t1 = parseInt(prompt("Ingrese su dinero"));

let d1 = t1;


if (d1 >=  bonais) {

   listado = listado +  "Puede comprar el bonais \n";
   d1 = d1 - bonais
   
}

if (d1 >=  Palitodeheladodeagua) {

   listado = listado + "Puede comprar el Palito de helado de agua \n";
   d1 = d1 - Palitodeheladodeagua;
   
}

if (d1 >=  Bombonheladoconarequipe) {

   listado = listado + " Puede comprar el Bombon helado con arequipe \n";
   d1 = d1 - Bombonheladoconarequipe;
   
}

if (d1 >=  Mediolitrodehelado) {

   listado = listado + " Puede comprar Medio litro de helado \n";
   d1 = d1 - Mediolitrodehelado;
   
}

if (d1 >=  Palitodeheladodecrema) {
   listado = listado + " Puede comprar el Palito de helado de crema \n";
   d1 = d1 - Palitodeheladodecrema;
   
}


if (d1 >=  Bombonheladoconchispasdechocolate) {

   listado = listado + " Puede comprar el Bombon helado conchispas de chocolate \n";
   d1 = d1 - Bombonheladoconchispasdechocolate;
   
}

if (d1 >=  Bombonheladoconfresas) {

   listado = listado + " Puede comprar el Bombon helado con fresas \n";
   d1 = d1 - Bombonheladoconfresas;
   
}



alert(listado);


alert(`Señor ${u1} sus vueltos son ${d1}`);


