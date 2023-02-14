const arraysDeNumeros = [4, 2, 8, 1, 6, 9, 7, 10];
console.log(arraysDeNumeros);

const nomeDoArrayOriginalCopia = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("terceiro array", nomeDoArrayOriginalCopia);

const arraysDeNumerosCopia = arraysDeNumeros.slice();
console.log(arraysDeNumerosCopia);

arraysDeNumeros.push(15);

arraysDeNumerosCopia.pop();

nomeDoArrayOriginalCopia.splice(1, 1);
