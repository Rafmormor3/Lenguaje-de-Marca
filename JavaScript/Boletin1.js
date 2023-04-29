//---------1--------
// let nombre = prompt("Escriba su nombre");
// let edad = prompt("Introduzca su edad");
// console.log(`Hola ${nombre}, tienes	${edad} años y el año que viene	tendrás ${parseInt(edad,10)+1} años`);

//---------2--------
// let tipo = prompt("Introduzca el tipo (triangulo/rectangulo/circulo)");
// if(tipo=="triangulo" || tipo=="rectangulo"){
//     let base=prompt("Introduzca la base");
//     let altura=prompt("Introduzca la altura");

//     if(tipo=="triangulo"){
//         console.log(base*altura/2);
//     }else{
//         console.log(base*altura);
//     }
// }else if(tipo=="circulo"){
//     let radio=prompt("Introduzca el radio");
//     console.log(Math.PI * Math.pow(radio,2));
// };

//---------3--------
// let maximo = prompt("Introduzca el numero final");
// for(var i =1; i<=maximo; i++){
//     if(i%2==0){
//         console.log(i +" es par.");
//     }else{
//         console.log(i +" es impar.");
//     }
// };

//---------4--------
// let num=0;
// let cont=1;
// let res=0;
// do{
//     num=prompt("Introduzca un numero");
// }while(num<0);

// while(cont<=num){
//     if(num%cont==0){
//         res++;
//     }
//     cont++;
// }

// if(res>2){
//     console.log("No es primo.");
// }else{
//     console.log("Es primo");
// }

//---------5--------
// let num=0;
// let res=1;
// do{
//     num=prompt("Introduzca un numero");
// }while(num<0);

// for(let i=1; i<=num ;i++){
//     res=res*i;
// }

// console.log(res);

//---------6--------
// let num=0;
// let cont=0;
// let res=0;

// num=prompt("Introduce un numero");
// while(res<50){
//     res=res+parseInt(num);
//     cont++;
//     num=prompt("Introduce un numero");
// }
// console.log("Numero acumulado: "+res+", veces que hemos introducido numeros: "+cont);

//---------7--------
// let numeros=[1,2,3,4,5];
// let par=[];
// let impar=[];


// for(let i in numeros){
//     let aleatorio=Math.round(Math.random()*(10-1)+1);

//     if(aleatorio*i%2==0){
//         par.push(i*aleatorio);
//     }else{
//         impar.push(i*aleatorio);
//     }

//     console.log(`${i}x${aleatorio}=${i*aleatorio}`);
// }
// console.log(par);
// console.log(impar);

//---------8--------
// const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

// let numero = prompt("Introduzca el numero del DNI");

// while(numero.length>8 || parseInt(numero)<0){
//      numero = prompt("Introduzca el numero del DNI");
// }

// console.log(letras[parseInt(numero)%23]);

//---------9--------
// let vocales=['a','e','i','o','u'];
// let palabra=prompt("Introduzca palabra");

// let voc=0;
// let cons=0;

// for(let i in palabra){
//     if(vocales.includes(palabra[i])){
//         voc++;
//     }else{
//         cons++;
//     }
// }

// console.log(`Numero de vocales ${voc}, numero de consonantes ${cons}, longitud de la palabra ${palabra.length}`);

//---------10--------
// let colores =  ["azul","amarillo","rojo","verde","rosa"];
// let opcion = prompt("Introduzca un color");

// if(colores.includes(opcion)){
//     console.log(true);
// }else{
//     console.log(false);
// }


















