function factorial(x) {
  let total = 1;
  for (let i = x; i > 1; i--) {
    total = total * i;
  }
  return total;
}
let res = factorial(5);
console.log(res);

function mayor(a, b, c) {
  return Math.max(a, b, c);
}

let max = mayor(1, 3, 4);
console.log(max);

let suma, resta, mult, div;

function calcula(a, b) {
  suma = a + b;
  resta = a - b;
  mult = a * b;
  div = a / b;
}

calcula(10, 5);
console.log("este es el resultado de suma", suma);
console.log("este es el resultado de resta", resta);
console.log("este es el resultado de multiplicar", mult);
console.log("este es el resultado de dividir", div);

let porcentajechicas;

function xx(chicos, chicas) {
  porcentajechicas = (chicas / (chicas + chicos)) * 100;
}

xx(80, 47);
console.log("este es el porcentaje de chicas", porcentajechicas);

function compara(a, b) {
  if (a < b) {
    console.log("el mayor numero es", b);
  } else if (a == b) {
    console.log("los numeros son iguales");
  } else {
    console.log("el mayor numero es", a);
  }
}

compara(7, 7);

function prob() {
  let num1 = prompt("Pon aquí el primer número");
  let num2 = prompt("Pon aquí el segundo numero");
  let equacion = prompt("Escribe aqui s para suma o m para multiplpicar");
  let suma, multiplicación;

  if (equacion == "s") {
    suma = num1 * 1 + num2 * 1;
    console.log("La suma es", suma);
  } else if (equacion == "m") {
    multiplicación = num1 * 1 * (num2 * 1);
    console.log("La multiplicacion es", multiplicación);
  } else {
    console.log("Operacion desconocida");
  }
}

prob();

function anyo(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log(num, "es un año bisiesto");
  } else {
    console.log(num, "NO es un año bisiesto");
  }
}
anyo(2022);


function a(numero) {
  for (i = 0; i < 10; i++) {
    let election = prompt("Entra numero");
    if (election * 1 > 0 && election * 1 < 11) {
      console.log(election * election);
      return;
    }
  }
}





// ejercicio dni

function comprobar (){

  let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","Q","S","V","H","L","C","K","E","T"]
  let dni = prompt("Pon ,aqui el numero de DNI")
  let letra = prompt("Pon aqui la letra del DNI")
  let final = dni%23;

  if(dni<0 || dni>99999999){
    confirm("No es correcto")
    console.log("No es correcto")
  }
  

  else{letras.at(final)
    console.log(letras.at(final))
  }
  
  if(letras.at(final)===letra){
    confirm("Es correcto")
    console.log("Las letras coinciden")
  }
  else{
    confirm("NO coinciden las letras")
    console.log("No coinciden")
  }


}
comprobar()

