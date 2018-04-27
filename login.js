function Login() {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
    if (usuario == "homersimpson" && senha == "123456") {
        document.getElementsByName('calculadora').innerHTML= "calculadora.html";
        done = 1;
    }
    if (done == 0) { alert("Dados incorretos, tente novamente"); }
}
console.log ('usuario');
console.log ('senha');
