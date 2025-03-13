document.addEventListener("DOMContentLoaded", function () {
    let btnExibir = document.getElementById("btnExibir");
    btnExibir.addEventListener("click", exibirPecas);
});

function exibirPecas() {
    console.log("Função exibirPecas() foi chamada");
    location.href = "/exibir"; // Redireciona para a rota "/exibir"
}

