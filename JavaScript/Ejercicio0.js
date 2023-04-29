let num1=5;
let num2=-10;
let cadena = "Hola tengo sueño";

console.log(num1);
console.log(num2);
console.log(cadena.length);
console.log(cadena.toLowerCase());
cadena=cadena.toUpperCase();
console.log(cadena);
console.log(cadena.indexOf("o"));

let cont=0;
if(cadena.includes("o")){
    for(let i=0; i<cadena.length;i++){
        if(cadena[i]=="o"){
            cont++;
        }
    }
}else{
    cont=0;
}
console.log(cont);

console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
let resta=num1-num2;
console.log("la resta de "+num1+" menos "+num2+" es "+resta);

console.log(cadena.replace("SUEÑO","HAMBRE"));
console.log(cadena.startsWith("A"));