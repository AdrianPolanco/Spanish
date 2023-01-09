const meses = ["Enero", "Febrero", "Marzo"];
const meses2 = ["Abril", "Mayo", "Junio", "Julio"];

//Concatenar los arrays con .concat
const mes = meses2.concat(meses);
console.log(mes);

//Concatenar los arrays con los spreads operators

const mesfinal = [...meses, ...meses2];
console.log(mesfinal);
