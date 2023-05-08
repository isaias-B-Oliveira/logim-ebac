

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('logado com susseso');
    }else{
        alert('Opcao invalida ');
    }   
};
