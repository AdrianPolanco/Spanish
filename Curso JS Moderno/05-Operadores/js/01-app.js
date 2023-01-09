console.log(3 > 1);

//Retorna true porque == en Javascript es una comparacion no estricta, por tanto retorna true si el contenido es igual sin tomar en cuenta el tipo de dato
console.log(3 == "3");

//Retorna false porque === en Javascript es una comparacion estricta, por tanto retorna false ya que toma en cuenta el contenido y el tipo de dato
console.log(3 === "3");

//La misma logica solo que en vez de igual, chequea la diferencia
console.log(3 !== "3"); //Retorna true ya que estrictamente hablando el numero 3 es diferente al string 3

console.log(3 != "3"); //Retorna false ya que en principio, sin tomar en cuenta el tipo de dato, son iguales
