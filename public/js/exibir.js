document.addEventListener("DOMContentLoaded", function () {
    let btnExibir = document.getElementById("btnExibir");
    btnExibir.addEventListener("click", exibirPecas);
});

function exibirPecas() {
    console.log("Função exibirPecas() foi chamada");
    location.href = "/exibir"; // Redireciona para a rota "/exibir"

    const vendedor = document.getElementById("vendedor");

    let obj = {
        vendedor: vendedor.value
    }; 
    console.log("Dados enviados:", obj);

    console.log("Dados enviados:", obj);

      let formData = new FormData();
      let stringObj = JSON.stringify(obj);

    fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringObj,
    })
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        if (r.ok) {
          alert(r.msg);
          window.location.href = "/";
        } else {
          alert(r.msg);
        }
      })
      .catch(function (e) {
        console.error("erro no fatch" + e);
      });
  };


    



