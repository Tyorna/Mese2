var btnSalva = document.getElementById("salva");
var btnRimuovi = document.getElementById("rimuovi");
var user = document.getElementById("user");
var form = document.getElementById("form");
var titolo = document.getElementById("p");
const salvato = document.createElement("p");
const cancellato = document.createElement("p");
const valore = document.createElement("p");
const valoreSaved = document.createElement("p");
var userSaved = localStorage.getItem("user");

window.addEventListener("load", function () {
  btnRimuovi.setAttribute("disabled", "true");
  if (userSaved) {
    titolo.append(valoreSaved);
    valoreSaved.innerHTML = `<p>Il tuo nome utente è ${userSaved}</p>`;
  } else {
    valoreSaved.classList.add("none");
  }
});

btnSalva.addEventListener("click", function () {
  if (user.value == "") {
    alert("Write a user name");
  } else {
    localStorage.setItem("user", user.value);
    btnSalva.setAttribute("disabled", "true");
    user.classList.add("off");
    cancellato.classList.add("none");
    salvato.classList.remove("none");
    form.appendChild(salvato);
    salvato.innerHTML = `<p>Il tuo nome utente è stato salvato!</p>`;
    titolo.append(valore);
    valore.innerHTML = `<p>Il tuo nome utente è ${user.value}</p>`;
    btnRimuovi.removeAttribute("disabled");
    valoreSaved.classList.add("none");
    user.value = "";
  }
});

btnRimuovi.addEventListener("click", function () {
  localStorage.removeItem("user", user.value);
  btnRimuovi.setAttribute("disabled", "true");
  user.classList.remove("off");
  salvato.classList.add("none");
  cancellato.classList.remove("none");
  form.appendChild(cancellato);
  cancellato.innerHTML = `<p>Il tuo nome utente è stato cancellato!</p>`;
  btnSalva.removeAttribute("disabled");
  valore.classList.add("none");
  valoreSaved.classList.add("none");
});

//timer in sessionStorage;

/*window.addEventListener("load", function () {
    if(sessionStorage.getItem("tempo")){ 
        totalSeconds = sessionStorage.getItem("tempo")}
        else{
            totalSeconds = 0;}
})*/

var totalSeconds = 0;
var minutes;
var seconds;
var total;
var totale;

/*
if(sessionStorage.getItem("tempo")){ 
    totalSeconds = Number(sessionStorage.getItem("tempo"))}
    else{
        totalSeconds = 0;
    }})*/

setInterval(Time, 1000);

function Time() {
  totalSeconds++;
  seconds = min(totalSeconds % 60);
  minutes = min(parseInt(totalSeconds / 60));
  total = `${minutes}:${seconds}`;
  return totale = sessionStorage.setItem("tempo", total);
}

function min(sec) {
    var zero = "" + sec;
  if (zero.length < 2) {
    return "0" + sec;
  } else {
    return sec;
  }
}