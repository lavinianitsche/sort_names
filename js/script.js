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
    
}

function sortearNome() {

    let resultado;
    resultado = nomes.splice(Math.floor(Math.random() * nomes.length), 1)[0];
    

    if (nomes.length < 0) {
        alert("lista vazia");
        return;

    } else {
        document.getElementById('txtSorteado').innerHTML = "resultado: " + resultado + " 🎉";
    }


}