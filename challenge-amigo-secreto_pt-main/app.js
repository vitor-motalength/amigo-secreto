//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];


function validarentrada(nome) {
    if (nome.trim() === '') {
        alert('Campo vazio. Escreva um nome');
        return false;
    }
    if (nomes.includes(nome)) {
        alert('Esse nome já está na lista');
        return false;
    }
    return true;
}


function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (validarentrada(nome)) {
        nomes.push(nome);
        console.log(nomes);
        escreverlista();
        document.querySelector('input').value = ''; 
    }
}


function escreverlista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ''; 
    for (let i = 0; i < nomes.length; i++) {
        listaDeAmigos.innerHTML += `<p>${nomes[i]}</p>`;
    }
}


function sortearAmigo() {
    if (nomes.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O sorteado foi: <strong>${nomeSorteado}</strong></p>`;
}
