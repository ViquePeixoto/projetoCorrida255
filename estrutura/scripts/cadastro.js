
var caraterEspecial = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', ',', '.'];

validarNome() {
var nome = inputNome.value;
var tamanhoNome = nome.length;



if (tamanhoNome > 50) {
    console.log('Nome muito longo!'); }
}



validarEmail() {
var email = inputEmail.value;
var temArroba = email.includes('@');

if (temArroba == false) {
    console.log('E-mail inválido!') }
}



validarSenha() {
var senha = inputEmail.value;
var tamanhoSenha = senha.length;
var senhaContemCaraterEspecial = senha.includes(caraterEspecial);

if (tamanhoSenha > 50) {
    console.log('Senha muito longa!'); }

if (senhaContemCaraterEspecial == false) {
    console.log('Sua senha não contém nenhum carater especial.'); }
}

validarConfirmarSenha() {
var confirmarSenha = inputConfirmarSenha.value;
var confirmarSenhaTamanho = confirmarSenha.length;
var confirmarSenhaContemCaraterEspecial = confirmarSenha.includes(caraterEspecial);

if (confirmarSenhaTamanho > 50) {
    console.log('Senha muito longa!'); }

if (senhaContemCaraterEspecial == false) {
    console.log('Sua senha não contém nenhum carater especial.'); }
}

validarApelido() {
var apelido = inputApelido.value;
var apelidoTamanho = apelido.length;
var apelidoContemCaraterEspecial = apelido.includes(caraterEspecial); }