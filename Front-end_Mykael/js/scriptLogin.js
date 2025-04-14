const URL = 'http://localhost:8080/professor';

async function login() {
    const email = document.querySelector('#emailLogin');
    const password = document.querySelector('#passwordLogin');

    fetch(`${URL}/login`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        data.sucess ? window.location.href = 'html/principal.html' : alert(data.message);
    }).catch(error => {
        alert("Erro ao fazer login");
        console.log(error);
    });
}