
const form = document.getElementById("form");
const username = document.getElementById("username");
const sobreNome = document.getElementById("sobreNome");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const tel = document.getElementById("tel");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    checkForm();
    
})

username.addEventListener("blur", () => {
    Event.preventDefault();
    checkForm();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {

        errorInput(username, "Informe o seu Nome")
    }
    else {
        const formItem = username.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputSobrenome() {
    const sobreNomeValue = sobreNome.value;

    if (sobreNomeValue === "") {
        errorInput(sobreNome, "Informe o Sobrenome")
    }
    else {
        const formItem = sobreNome.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputRua() {
    const ruaValue = rua.value;

    if (ruaValue === "") {
        errorInput(rua, "Informe o Nome da Rua")
    } else {
        const formItem = rua.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputNumero() {
    const numeroValue = numero.value;

    if (numeroValue === "") {
        errorInput(numero, "Informe o Número da Rua")
    } else {
        const formItem = numero.parentElement;
        formItem.className = "form_content"
    }
}

function checkBairro() {
    const bairroValue = bairro.value;

    if (bairroValue === "") {
        errorInput(bairro, "Informe o Bairro")
    } else {
        const formItem = bairro.parentElement;
        formItem.className = "form_content"
    }
}


function checkCidade() {
    const cidadeValue = cidade.value;

    if (cidadeValue === "") {
        errorInput(cidade, "Informe o Bairro")
    } else {
        const formItem = cidade.parentElement;
        formItem.className = "form_content"
    }
}

function checkTel() {
    const telValue = tel.value;

    if (telValue === "") {
        errorInput(tel, "Informe o Telefone")
    } else if (telValue.length < 11) {
        errorInput(tel, "Informe os os 11 Números")
    }
    else {
        const formItem = tel.parentElement;
        formItem.className = "form_content"
    }

}

function checkForm() {

    checkInputUsername();
    checkInputSobrenome();
    checkInputRua();
    checkInputNumero();
    checkBairro();
    checkCidade();
    checkTel();

    const formItens = form.querySelectorAll(".form_content")

    const isValid = [...formItens].every((item) => {
        return item.className === "form_content"
    });
    if(isValid){
        alert("FORMULARIO CADASTRADO COM SUCESSO")

    }

}


function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form_content error"
}
