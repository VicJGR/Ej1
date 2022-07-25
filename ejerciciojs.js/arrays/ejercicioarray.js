// ejercicio1

function motocara (m1,m2){
  if(m1.eur>m2.eur){
    return 1;
 }
  else if (m2.eur>m1.eur){
    return -1;
  }
  else 
    return 0;
}



motos.sort(motocara);
console.log(motos)
console.log("La moto mas barata es ",motos.at(0))
console.log("La moto mas cara es ",motos.at(-1))


// ejercicio2

function kmHonda (motos){
  if (motos.marca == "HONDA" && motos.km<30000){
    return true
  }
  else return false
}

motos.filter(kmHonda)
console.log(motos.filter(kmHonda).length)


// ejercicio3

function cilindro(motos){
  if(motos.km<30000 && motos.cc>240){
    return true
  }
  else return false
}

motos.filter(cilindro)
console.log(motos.filter(cilindro))