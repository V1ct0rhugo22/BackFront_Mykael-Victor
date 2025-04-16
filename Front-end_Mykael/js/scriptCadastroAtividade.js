const URL = 'http://localhost:8080/atividade';

window.onload = () => {
    document.querySelector('#reload').addEventListener('submit', event => {event.preventDefault()});
    const cadastroAtividade = document.querySelector('#loginButton');
    cadastroAtividade ? cadastroAtividade.addEventListener('click', cadastrar) : null;
}

async function cadastrar() {
    const nomeInput = document.querySelector('#emailLogin');
    const descricaoInput = document.querySelector('#descAtv')

    if(!(nomeInput) || !(descricaoInput)) {
        alert("Erro ao fazer a requisição");
        return;
    }
    const nome = nomeInput.value;
    const descricao = descricaoInput.value;
    const data = { nome : nome, descricao : descricao}; //para pegar costume

    try {
        const response = await fetch(`${URL}/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if(response.ok) { //trocar para created
            const responseData = await response.json();
            console.log(responseData);
            window.location.href = '../html/atividades.html';
        } else {
            const errorText = await response.text();
            alert("Erro: " + errorText);
            console.error("Erro do servidor:", errorText);
        }
    } catch (error) {
        alert("Erro de rede ou credenciais inválidas.");
        console.error("Erro na requisição:", error);
    }
}