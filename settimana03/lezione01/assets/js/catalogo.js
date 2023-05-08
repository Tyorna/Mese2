// 1. Creazione della classe Prodotto
class Prodotto {
    constructor(id, nome, descrizione, prezzo, quantita) {
      this.id = id;
      this.nome = nome;
      this.descrizione = descrizione;
      this.prezzo = prezzo;
      this.quantita = quantita;
    }
  }
  
  // 2. Creazione della classe Catalogo
  class Catalogo {
    constructor() {
      this.prodotti = [];
    }
  
    // 3a. Metodo per aggiungere un prodotto
    aggiungiProdotto(prodotto) {
      this.prodotti.push(prodotto);
    }
  
    // 3b. Metodo per rimuovere un prodotto
    rimuoviProdotto(id) {
      // this.prodotti = this.prodotti.filter(prodotto => prodotto.id !== id);  METODO 1
      //METODO 2
      const index = this.prodotti.findIndex(prodotto => prodotto.id === id);
      
      if (index !== -1) {
        this.prodotti.splice(index, 1);
      }
    }
  
    // 3c. Metodo per cercare un prodotto
    cercaProdotto(id) {
      // return this.prodotti.find(prodotto => prodotto.id === id); METODO 1
      console.log("ID",id);
      //METODO 2
      for (const prodotto of this.prodotti) {
          console.log("prod",prodotto);
        if (prodotto.id === id) {
          return prodotto;
        }
      }
  
      return null;
  
    }
  }
  
  
  // Aggiungi questo codice dopo aver definito le classi Catalogo e Prodotto
  
  const inputRicerca = document.getElementById('inputRicerca');
  const bottoneRicerca = document.getElementById('bottoneRicerca');
  
  bottoneRicerca.addEventListener('click', () => {
    //const id = parseInt(inputRicerca.value);
    const id = inputRicerca.value;
    /*if (isNaN(id)) {
      alert('Inserisci un ID valido.');
      return;
    }*/
    
    const prodottoTrovato = catalogo.cercaProdotto(id);
  
    if (prodottoTrovato) {
      alert(`Prodotto trovato:\nID: ${prodottoTrovato.id}\nNome: ${prodottoTrovato.nome}\nDescrizione: ${prodottoTrovato.descrizione}\nPrezzo: €${prodottoTrovato.prezzo.toFixed(2)}\nQuantità: ${prodottoTrovato.quantita}`);
    } else {
      alert('Nessun prodotto trovato con l\'ID specificato.');
    }
  });
  
  
  
  
  // Collegamento dell'interfaccia utente agli oggetti JavaScript
  const aggiungiForm = document.getElementById('aggiungiForm');
  const listaProdotti = document.getElementById('listaProdotti');
  const catalogo = new Catalogo();
  
  aggiungiForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const descrizione = document.getElementById('descrizione').value;
  const prezzo = parseFloat(document.getElementById('prezzo').value);
  const quantita = parseInt(document.getElementById('quantita').value);
  
  const prodotto = new Prodotto(id, nome, descrizione, prezzo, quantita);
  catalogo.aggiungiProdotto(prodotto);
  
  aggiornaListaProdotti();
  aggiungiForm.reset();
  });
  
  function aggiornaListaProdotti() {
    listaProdotti.innerHTML = '';
  
    for (const prodotto of catalogo.prodotti) {
      const prodottoDiv = document.createElement('div');
      prodottoDiv.innerHTML = `
        <strong>ID:</strong> ${prodotto.id}<br>
        <strong>Nome:</strong> ${prodotto.nome}<br>
        <strong>Descrizione:</strong> ${prodotto.descrizione}<br>
        <strong>Prezzo:</strong> €${prodotto.prezzo.toFixed(2)}<br>
        <strong>Quantità:</strong> ${prodotto.quantita}<br>
      `;
      
      const rimuoviButton = document.createElement('button');
      rimuoviButton.textContent = 'Rimuovi';
      rimuoviButton.addEventListener('click', () => {
        catalogo.rimuoviProdotto(prodotto.id);
        aggiornaListaProdotti();
      });
  
      prodottoDiv.appendChild(rimuoviButton);
      listaProdotti.appendChild(prodottoDiv);
    }
  }