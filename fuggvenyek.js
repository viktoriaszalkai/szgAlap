function gombok() {
  let txt = "";
  for (let i = 0; i < 10; i++) {
    txt += `<button id = i${i}>${i}</button>`;
  }
  /* console.log(txt); */
  return txt;
}
gombok();
const SELECTION = document.getElementsByClassName("szamok");

SELECTION[0].innerHTML = gombok();

const SECTONGOMBOK = document.querySelectorAll(".szamok button");
const KIFEJEZES = document.getElementsByClassName("kifejezes");

for (let index = 0; index < SECTONGOMBOK.length; index++) {
  SECTONGOMBOK[index].addEventListener("click", gombKattintas);
}
function gombKattintas(event) {
console.log(event.target)
/* event.target = kiírja azt az elemet, ami kiváltotta az eseményt */
  for (let index = 0; index < 10; index++) {
    KIFEJEZES[index].innerHTML += event.target.innerHTML;
  }
}

const OSSZEADASGOMB = document.getElementById("osszeadas")
const KIVONASGOMB = document.getElementById("kivonas")

OSSZEADASGOMB.addEventListener("click", gombKattintasMuveletek);
KIVONASGOMB.addEventListener("click", gombKattintasMuveletek);

const EREDMENY = document.getElementsByClassName("eredmeny")
function gombKattintasMuveletek(event){
    KIFEJEZES[0].innerHTML += event.target.innerHTML;
  
}