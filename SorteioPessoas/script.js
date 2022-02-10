let inp_text, inp_button, inp_b_sortear, inp_b_novo;
let _pessoas = [];

onload = function () {
  inp_text = document.getElementById("inp-text");
  inp_button = document.getElementById("inp-button");
  inp_b_sortear = document.getElementById("inp-button-sortear");
  inp_b_novo = document.getElementById("inp-button-novo");

  inp_button.addEventListener("click", adcPessoa);
};

function adcPessoa() {
  if (inp_text.value.trim() === "") {
    alert("Digite um nome válido");
    inp_text.value = "";
  } else {
    adciona_pessoa_list(inp_text.value);
    inp_text.value = "";
    inp_b_novo.style.display = "inline";
  }
}

function adciona_pessoa_list(pessoa) {
  _pessoas.push(pessoa);

  let ul_pessoas = document.getElementById("ul_pessoas");
  ul_pessoas.innerHTML = "";
  _pessoas.forEach(function (n) {
    item = document.createElement("li");
    item.textContent = n;
    ul_pessoas.appendChild(item);
  });
  //botao para sortear
  inp_b_sortear.style.display = "inline";
}

function sorteiaPessoa() {
  if (_pessoas.length > 0) {
    let n_sorteado = Math.floor(Math.random() * (_pessoas.length - 0) + 0);
    openForm(_pessoas[n_sorteado]);
  } else alert("Não há pessoas para sortear!");
}

function novoSorteio() {
  if (confirm("Deseja iniciar um novo Sorteio?")) {
    inp_b_novo.style.display = "none";
    inp_b_sortear.style.display = "none";
    let ul_pessoas = document.getElementById("ul_pessoas");
    ul_pessoas.innerHTML = "";
    _pessoas = [];
  }
}

function openForm(text) {
  document.querySelector(".mensagem").style.display = "block";
  document.querySelector(".mensagem").innerHTML =
    "<div class='mensagemDiv'><h1>Pessoa Sorteada:</h1><p>" +
    text +
    "</p></div>";
}
function closeForm() {
  document.querySelector(".mensagem").style.display = "none";
}
