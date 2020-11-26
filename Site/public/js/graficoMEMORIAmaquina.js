atualizarMemoria();

function plotarMemoria(tempoLeitura, leituraUsoPorc) {
  var ctx = document.getElementById("r_grafico").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: tempoLeitura,
      datasets: [
        {
          label: "% de utilização memória",
          data: leituraUsoPorc,
          fill: true,
          backgroundColor: "rgba(170, 120, 166, 0.30)",
          borderColor: "rgba(170, 120, 166, 0.69)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

window.onload = atualizarMemoria();
function atualizarMemoria() {
  fetch("http://localhost:3000/leituras/dadosMemoriaUsoPerc", { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          let leitura = resposta;
          console.log(leitura);
          console.log(rs.Fields.Count);
          let leituraUsoPorc = [];
          let tempoLeitura = [];

          for (n = leitura.length - 1; n >= 0; n--) {
            leituraUsoPorc.push(leitura[n].consumoComponente);
            tempoLeitura.push(leitura[n].registro);
          }
          console.log(leituraUsoPorc);

          plotarMemoria(tempoLeitura, leituraUsoPorc);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na leituras");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });

  setTimeout(() => {
 //   atualizarMemoria();
  }, 5000);
}