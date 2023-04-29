const numero = document.getElementById('numero');
const solucion = document.getElementById('solucion');

let A = prompt("introduce un numero A",0);
let B = prompt("introduce un numero B",0);
let C = prompt("introduce un numero C",0);
A=parseInt(A);
B=parseInt(B);
C=parseInt(C);
let resultado="";

if(A>=B && B>=C){
    resultado=`${A}, ${B}, ${C}`;
}else if(A>=C && C>=B){
    resultado=`${A}, ${C}, ${B}`;
}else if(C>=A && A>=B){
    resultado=`${C}, ${A}, ${B}`;
}else if(C>=B && B>= A){
    resultado=`${C}, ${B}, ${A}`;
}else if(B>=A && A>=C){
    resultado=`${B}, ${A}, ${C}`;
}else{
    resultado=`${B}, ${C}, ${A}`;
}

solucion.textContent="Números ordenados "+resultado;