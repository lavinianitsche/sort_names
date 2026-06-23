let nomes = [];

function adicionarNome() {
    const nome = document.getElementById('inputNome');
    let name = nome.value.toLowerCase().trim();
    name = name.replaceAll(" ", "");
    
    if (name === "" || name.length < 3) {
        alert("nome precisa conter mais que tres caracteres");
        nome.value = "";
        
        return;
        
    } else if (nomes.includes(name)) {
        alert("esse nome ja foi cadastrado");
        return;
    } else {
        nomes.push(name);
        // alert("nome cadastrado com sucesso");
        console.log(`nome: ${name}`);
        nome.value = "";
        lista();

        return;
    }
}

function sortearNome() {
    let nome = document.getElementById("inputNome").value;
    let resultado;
    

}

function lista() {
    const lista = document.getElementById("listaDeParticipantes");
    lista.innerHTML = "";

    if (nomes.length === 0) {
        lista.innerHTML = '<div style="text-align: center; color: #999;">Nenhum ingrediente cadastrado</div>';
        return;
    }
    
    nomes.forEach((nome, indice) => {
        const item = document.createElement('div');
        item.innerHTML = `<span>${indice}. ${nome}</span>`;
        lista.appendChild(item);
    })

}

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