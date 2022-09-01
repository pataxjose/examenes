var elementos = [1, 1, 3, 5, 6, 4, 9, 5, 3, 5, 7, 9, 0, 1];
var repetidos = [];
var temporal = [];

elementos.forEach((value, index) => {
    temporal = Object.assign([], elementos); //Copiado de elemento
    temporal.splice(index, 1); //Se elimina el elemnto q se compara
    /**
     * Se busca en temporal el elemento, y en repetido para 
     * ver si esta ingresado al array. indexOf returna
     * -1 si el elemento no se encuetra
     **/
    if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1) repetidos.push(value);
});

console.log(repetidos);


//y para obtener la salida de ejerccio solo con imprimir la longitud del arreglo 
console.log('la salida es ', repetidos.length)