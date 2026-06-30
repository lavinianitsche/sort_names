// codigo incompleto

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
    alert("nome cadastrado com sucesso");
    console.log(`nome: ${name}`);
    nome.value = "";

    // adicionar na lista de modo correto


    

    console.log("Chegou onde eu queria");

    let participantes = document.getElementById('listaDeParticipantes');
    
    console.log(participantes);
    
    participantes.value = "";
    // 5. Criar um laço de repetição (for) para percorrer todos os elementos do array 'listaNomes':
    // -> A cada repetição, concatenar uma nova tag <li> contendo o nome atual dentro da lista HTML

}

function sortearNome() {

    if (nomes.length > 0) {
        alert("teste");
    } else {
        alert("teste 2");
    }



    let nome = document.getElementById("inputNome").value;
    let resultado;
    resultado = nomes.splice(Math.floor(Math.random() * nomes.length), 1)[0];

}

// function lista() {
//     const lista = document.getElementById("listaDeParticipantes");
//     lista.innerHTML = "";

//     if (nomes.length === 0) {
//         lista.innerHTML = '<div style="text-align: center; color: #999;">Nenhum ingrediente cadastrado</div>';
//         return;
//     }
    
//     nomes.forEach((nome, indice) => {
//         const item = document.createElement('div');
//         item.innerHTML = `<span>${indice}. ${nome}</span>`;
//         lista.appendChild(item);
//     })

// }

// function sortear() {

// let texto = document.getElementById("entrada").value;
// let tipo = document.getElementById("tipo").value;
// let resultado;

// if (tipo == "nomes") {

//     let nomes = texto.split(",");
//     resultado = nomes[Math.floor(Math.random() * nomes.length)];

// } else {

//     let n = texto.split("-");
//     resultado = Math.floor(Math.random() * (n[1] - n[0] + 1)) + Number(n[0]);
// }

// document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
// }