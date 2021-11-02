"use strict"

//1 variable con nombre
let nombre = "Tania";
console.log(nombre);

//2 cambio valor variable
nombre = "numeros";
console.log(nombre);

//3 cuando se comenta la variable, la consola indica que dicha variable no está definida. 
// Ningun valor definido.

//4 creo tres variables, sumar y guardar el resultado.
// puedo poner todas la variables en una misma fila. let operador1, operador2, resultado(iniciarlo en 0)
let operador1 = 4;
let operador2 = 5;
let resultado = 0;
resultado = operador1 + operador2
console.log(resultado);


// Ejercicios para el Profesor
// Ejercicio 1. Area circulo: 2.PI.R.R
const PI = 3.1416;
// variable
let radio = 8;
let area =0; 
area = PI * radio * radio;
// mostrar por template literals
console.log(`A = π * ${radio} 2 = ${area}`); 


// ejercicio 2. Area=b*a/2
// nodos
const ej2Profe = document.querySelector(".area-triangulo");
const res2Profe = document.querySelector("#resultado2");

// funcion
const areaTriangulo = () =>{
     // variables
     let base = 5;
     let altura = 10;
     let aTriangulo = 0;
    //  los datos me los da el usuario
    base = prompt("dame la base");
    base = Number(base);
    altura = prompt("dame la altura");
    altura = Number(altura);
     aTriangulo = base * altura / 2;
     res2Profe.innerHTML = `<code>
     A(${base}*${altura}/2)= ${aTriangulo}
     </code>`; 
}

// eventos
ej2Profe.addEventListener(
    "click",
    areaTriangulo
);


// Ejercicio 3. Altura de personas.
// nodos.  Elemento del 3º ejer de profe
const altura = document.querySelector(".altura");
const res3Profe = document.querySelector("#resultado3");

// funcion
const perAlta = () =>{
     let alt = prompt("dame tu altura en cm"); 
    //  convertir string en numero
     alt = Number(alt);   
    // estructura condicional
     if(alt > 200){
         res3Profe.innerHTML= `La persona de ${alt} cm es alta`;   
    }else{
        res3Profe.innerHTML= `La persona de ${alt} cm es baja`;
    }
       
}

// evento
altura.addEventListener(
    "mouseover",   //pasar el raton por encima
    perAlta    
);

  






