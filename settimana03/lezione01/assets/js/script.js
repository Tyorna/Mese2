class user { 
    constructor (Name, Surname, age, location){
    this.firstName = Name;
    this.lastName =  Surname;
    this.age =  age;
    this.location = location;}

    anziano(){
        if(this.age <= user2.age){
            return `${this.firstName} is younger than ${user2.firstName}`;
        } else{
            return `${this.firstName} is older than ${user2.firstName}`;
        }
    };
    }

const user1 = new user ("jo", "Me", "68", "Al");
const user2 = new user ("Sam", "Tony", "25", "To");
console.log(user1);
console.log(user1.anziano);
console.log(user2);
console.log(user2.anziano);

const listaVecchi = document.getElementById("listaVecchi");

    const anziano = document.createElement("p");
    anziano.textContent = user1.anziano();
    listaVecchi.appendChild(anziano);

class Pet {
  constructor(namePet, nameOwner, specie, razza) {
    this.namePet = namePet;
    this.Owner = nameOwner;
    this.species = specie;
    this.breed = razza;
  }
  padrone(){
    if (this.Owner == animale2.Owner){
        return true
    } else{
        return false;
    }
  }
}

const animale1 = new Pet ("raul", "Ty", "Cane", "P.Tedescp");
const animale2 = new Pet ("elams", "Clary", "cane", "P-Belga");
const animale3 = new Pet ("sammy", "Ty", "gatto", "Siamese");
const animale4 = new Pet ("fluffy", "Ale", "gatto", "Unknown");


const listaAnimali = document.getElementById("listaAnimali");

    const animale = document.createElement("p");
    animale.textContent = animale1.padrone();
    listaAnimali.appendChild(animale);


class PetList {
  constructor() {
    this.animali = [];
  }
  aggiungiAnimale(animale) {
    this.animali.push(animale);
    
  }
}

const aggiungiAnimale = document.getElementById("btnAdd");
const listaPet = new PetList();
const aggiungiForm = document.getElementById("aggiungiForm");


aggiungiAnimale.addEventListener("click", (event) => {
const namePet = document.getElementById("namePet").value;
const nameOwner = document.getElementById("nameOwner").value;
const specie = document.getElementById("specie").value;
const razza = document.getElementById("razza").value;
console.log(namePet);
console.log(nameOwner);
console.log(specie);
console.log(razza);

const animale = new Pet(namePet, nameOwner, specie, razza);
  listaPet.aggiungiAnimale(animale);
  aggiornaListaAnimali();
  aggiungiForm.reset();

});

function aggiornaListaAnimali() {
  listaAnimali.innerHTML = "";

  for (const animale of listaPet.animali) {
    const animaleDiv = document.createElement("div");
    animaleDiv.innerHTML = `
        <strong>namePet:</strong> ${animale.namePet}<br>
        <strong>NameOwner:</strong> ${animale.Owner}<br>
        <strong>specie:</strong> ${animale.species}<br>
        <strong>Razza:</strong> ${animale.breed}<br>
      `;
    listaAnimali.appendChild(animaleDiv);
  }
}










/*<h1>Catalogo Utenti</h1>

    <h2>Aggiungi Utente</h2>
    <form id="aggiungiForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" required>
      <br>
      <label for="cognome">Cognome</label>
      <input type="text" id="cognome">
      <br>
      <label for="eta">Età</label>
      <input type="number" id="eta" step="0.01" required>
      <br>
      <label for="location">Luogo</label>
      <input type="number" id="location" required>
      <br>
      <button type="submit">Aggiungi</button>
    </form>
  
    <h2>Anziantità</h2>
    <div id="anzianità"></div>

<br><br>
<br><br>
<br></br>*/
