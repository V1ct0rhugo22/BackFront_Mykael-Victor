const URL = 'http:localhost:8080/professor';

async function login() {
    const email = document.querySelector('#emailLogin');
    const password = document.querySelector('#passwordLogin');

    // fetch(`http:localhost:8080/professor/login`, {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     data.sucess ? window.location.href = 'html/principal.html' : alert(data.message);
    // }).catch(error => {
    //     alert("Erro ao fazer login");
    //     console.log(error);
    // });



    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
    }

    const data = await response.text();
    console.log(data); // Ex: "Login bem-sucedido! Bem-vindo, email@exemplo.com"
    return data;



    
}