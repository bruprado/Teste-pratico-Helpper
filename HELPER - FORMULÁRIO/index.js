function preencheNome(){
    let input = document.getElementsByTagName("input")[0];

    if (input.value == ""){
        alert("Por favor preencha o campo.");
        input.style.backgroundColor = "red";
    } else if (input.value != "") {
        input.style.backgroundColor = "white";
    }
}

function preencheEmail(){
    let input = document.getElementsByTagName("input")[1];

    if (input.value == ""){
        alert("Por favor preencha o campo.");
        input.style.backgroundColor = "red";
    } else if (input.value != "") {
        input.style.backgroundColor = "white";
    }
}

function enviarDados(){
    alert("Dados cadastrados com sucesso!")
}

