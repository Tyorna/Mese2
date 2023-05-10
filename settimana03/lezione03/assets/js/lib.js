const url = 'https://striveschool-api.herokuapp.com/books';

var riga = document.getElementById('row');
var carrello = document.getElementById('carrello');

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(dato => {
        compilaCard(dato);
   }) });
/*
.catch(error => console.error('Erorre durante il recupero degli utenti: ', error));*/

function compilaCard(val){
    riga.innerHTML += `<div class=" col-6 col-lg-4 mb-2 g-2" id="card"><div class= "card"><img class= "card-img-top img" src="${val.img}"><div class="card-body"><div class="card-title spazio">${val.title}</div>
    <div class="card-text mb-2"><code>&euro;</code> ${val.price}</div><button class="bg-danger me-4" type="button" onclick= 'nascondiCard(event)'>Scarta</button><button class="bg-success" type="button" onclick = 'aggiungiCard(event)'>Compra Ora</button></div></div></div>`;
}

function nascondiCard (event){
   event.target.parentElement.parentElement.parentElement.classList.add('d-none');
}

var listaLibri= [];

function aggiungiCard (event){
   var item = document.createElement('div');
   var item2 = document.createElement('div');
   var cartaSalvata = event.target.parentElement.parentElement;
   item2 = cartaSalvata;
   cartaSalvata.classList.add('w-25', 'ms-3', 'mt-4');
   carrello.appendChild(item);
   item.appendChild(item2);
   var del = document.createElement('button');
   del.setAttribute('onclick', 'cancella(event)');
   del.classList.add('bg-warning', 'ms-3', 'p-2');
   del.innerHTML= 'elimina prodotto';
   item.appendChild(del);
   localStorage.setItem('libri', cartaSalvata);
}

function cancella(event) {
   event.target.parentElement.classList.add('d-none');
}

/*window.addEventListener("load", function () {
    if (localStorage.getItem('libri')){
       item = this.localStorage.getItem('libri').split(',');
    } else {
        item.innerHTML= 'Non hai libri salvati nel carrello';
    }
    });*/
  