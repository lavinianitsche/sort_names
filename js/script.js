let nomes = [];

function adicionarNome() {
    const nome = document.getElementById('inputNome');
    let name = nome.value.trim();
    
    if (name === "" || name.length < 3) {
        alert("erro: nome precisa conter mais que tres caracteres");
        nome.value = "";
        return;       
    } 
    
    if (nomes.includes(name)) {
        alert("erro: esse nome ja foi cadastrado");
        return;
    } 
    
    nomes.push(name);
    console.log(nomes);
    console.log(`nome: ${name}`);
    nome.value = "";
    
    let participantes = "";
    participantes = document.getElementById('listaDeParticipantes');
    participantes.innerHTML += `<li>${name}</li>`;

    for (let i = 0; i < nomes.length; i++) {
        name = nomes[i];

    }

    console.log(nomes);
    nome.focus();
}

function sortearNome() {

    let resultado;

    let num = Math.floor(Math.random() * nomes.length, 1);
    
    let numeros_sorteados = [];
    numeros_sorteados.push(num);

    resultado = nomes.splice(Math.floor(Math.random() * nomes.length), 1)[0];

    console.log(resultado);
    
    if (nomes.length < 0) {
        alert("erro: lista está vazia");
        return;

    } else {
        // document.getElementById('txtSorteado').innerHTML = "resultado: " + resultado + " 🎉";
        document.getElementById('txtSorteado').innerHTML = "resultado: " + resultado + " 🎉";
    }

}