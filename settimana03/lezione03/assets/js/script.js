const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(response => response.json())
.then( users => {
    console.log('Utenti:');
    console.log("Dati Utente: ");
    users.forEach(user => console.log(`${user.name} (${user.email})`));
})
.catch(error => console.error('Erorre durante il recupero degli utenti: ', error));