const numero = Number(prompt('Zadej číslo od 0 do 36:')); 

let barva = '';
let sudost = '';

if (numero === 0) {
  barva = 'zelené';
  document.body.innerHTML += `Číslo ${numero} je ${barva}.`;
} else if ((numero >= 1 && numero <= 10) || (numero >= 19 && numero <= 28)) {

  if (numero % 2 === 0) {
    barva = 'černé'; 
    sudost = 'sudé'
  } else {
    barva = 'červené'
    sudost = 'liché';
  }
  document.body.innerHTML += `Číslo ${numero} je ${barva} a ${sudost}.`;

} else if (numero >= 11 && numero <= 36) {
  
  if (numero % 2 === 0) {
    barva = 'červené'
    sudost = 'sudé';
  } else {
    barva = 'černé'
    sudost = 'liché'; 
  }
  document.body.innerHTML += `Číslo ${numero} je ${barva} a ${sudost}.`;
  
} else {
  document.body.innerHTML += "Zadej číslo v rozmezí 0-36.";
}
