// var config = {
//   type: 'line',
//   data: {
//     labels: [],
//     datasets: [{
//       label: 'CPU',
//       backgroundColor: window.chartColors.purple,
//       borderColor: window.chartColors.purple,
//       data: [],
//       fill: false,
//     }]
//   },
  
  
//    options: {
//     //  responsive: true,
//     //  title: {
//     //    display: true,
//     //    text: 'Gráfico de histórico de utilização do hardware'
//     //  },
//     //  tooltips: {
//     //    mode: 'index',
//     //    intersect: false,
//     //  },
//     //  hover: {
//     //    mode: 'nearest',
//     //    intersect: true
//     //  },
//     //  scales: {
//     //    xAxes: [{
//     //      display: true,
//     //      scaleLabel: {
//     //        display: true,
//     //        labelString: 'Horário da Leitura'
//     //      }
//     //    }],
//     //    yAxes: [{
//     //      display: true,
//     //      scaleLabel: {
//     //        display: true,
//     //        labelString: '%'
//     //      }
//     //    }]
//     //  }
//    }
// };
// var config2 ={
//     type: 'line',
//     data: {
//     labels: [],
//     datasets: [{
//     label: 'RAM',
//     backgroundColor: window.chartColors.red,
//     borderColor: window.chartColors.red,
//     data: [],
//     fill: false,
//     }]
//   }
// };

// var config3 ={
//   type: 'line',
//   data: {
//   labels: [],
//   datasets: [{
//   label: 'Disco',
//   backgroundColor: window.chartColors.yellow,
//   borderColor: window.chartColors.yellow,
//   data: [],
//   fill: false,
//   }]
// }
// };

// var config4 ={
// type: 'line',
// data: {
// labels: [],
// datasets: [{
// label: 'Rede',
// backgroundColor: window.chartColors.blue,
// borderColor: window.chartColors.blue,
// data: [],
// fill: false,
// }]
// }
// };

// // esse "sortearTemperatura()" será desnecessário quando usarmos o backend futuramente
// function sortearTemperatura() {
//   var limiteMin = 0;
//   var limiteMax = 100;
//   var minimoAbsoluto = Math.abs(limiteMin);
//   return (Math.random() * (minimoAbsoluto+limiteMax) - minimoAbsoluto).toFixed(1);
// }


// function recuperarDadosIniciais() {

//   // esse "registros" será recuperado do backend futuramente
//   var registros = [
//     {
//       momento: '00:03:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:03:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:02',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:12',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:22',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:32',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:42',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:05:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:05:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:06:02',
//       leitura: sortearTemperatura()
//     }
//   ];
// //////////////////////////////////////////////////////////////////////////////////////////////////////
//   var registros2 = [
//     {
//       momento: '00:03:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:03:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:02',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:12',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:22',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:32',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:42',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:05:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:05:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:06:02',
//       leitura: sortearTemperatura()
//     }
//   ];
// //////////////////////////////////////////////////////////////////////////////////////////////////////
//   var registros3 = [
//     {
//       momento: '00:03:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:03:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:02',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:12',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:22',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:32',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:42',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:05:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:05:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:06:02',
//       leitura: sortearTemperatura()
//     }
//   ];
// //////////////////////////////////////////////////////////////////////////////////////////////////////
//   var registros4 = [
//     {
//       momento: '00:03:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:03:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:02',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:12',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:22',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:32',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:04:42',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:05:42',
//       leitura: sortearTemperatura()         
//     },
//     {
//       momento: '00:05:52',
//       leitura: sortearTemperatura()
//     },
//     {
//       momento: '00:06:02',
//       leitura: sortearTemperatura()
//     }
//   ];

//   var contador = 0;
//   var contador2 = 0;
//   var contador3 = 0;
//   var contador4 = 0;

//   // registros.length é a quantidade de itens em "registros"
//   while (contador < registros.length) {

//     config.data.labels.push(registros[contador].momento);  // incluir um novo momento
//     config.data.datasets[0].data.push(registros[contador].leitura);  // incluir uma nova leitura

//     contador++;
//   }

//   // while (contador2 < registros2.length) {

//   //   config2.data.labels.push(registros2[contador2].momento);
//   //   config2.data.datasets[0].data.push(registros2[contador2].leitura);

//   //   contador2++;
//   // }

//   while (contador3 < registros3.length) {

//     config3.data.labels.push(registros3[contador3].momento);
//     config3.data.datasets[0].data.push(registros3[contador3].leitura);

//     contador3++;
//   }

//   while (contador4 < registros4.length) {

//     config4.data.labels.push(registros4[contador4].momento);
//     config4.data.datasets[0].data.push(registros4[contador4].leitura);

//     contador4++;
//   }
  

// }

// function receberNovasLeituras() {
//   setTimeout(() => {
    
//     // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
//     var agora = new Date();
//     var hora = agora.getHours();
//     var minuto = agora.getMinutes();
//     var segundo = agora.getSeconds();
//     var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

//     // esse "novoRegistro" será recuperado do backend futuramente
//     var novoRegistro = {
//       momento: momento,
//       leitura: sortearTemperatura()
//     };
    
//     // tirando e colocando valores no gráfico
//     config.data.labels.shift(); // apagar o primeiro
//     config.data.labels.push(novoRegistro.momento); // incluir um novo momento
//     config.data.datasets[0].data.shift();  // apagar o primeiro
//     config.data.datasets[0].data.push(novoRegistro.leitura); // incluir uma nova leitura

//     // Atualiza o gráfico
//     window.graficoLinha.update();	

//     // agendar a chamada da mesma função para daqui a 7 segundos
//     receberNovasLeituras();	

//   }, 1000); // 7000 ms -> 7 segundos
// }


// //////////////////////////////////////////////////////////////////////////////////////


// function receberNovasLeituras2() {
//   setTimeout(() => {
    
//     // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
//     var agora = new Date();
//     var hora = agora.getHours();
//     var minuto = agora.getMinutes();
//     var segundo = agora.getSeconds();
//     var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

//     // esse "novoRegistro" será recuperado do backend futuramente

//     var novoRegistro2 = {
//       momento: momento,
//       leitura: sortearTemperatura()
//     };

//     // tirando e colocando valores no gráfico
//     // config2.data.labels.shift();
//     // config2.data.labels.push(novoRegistro2.momento);
//     // config2.data.datasets[0].data.shift();
//     // config2.data.datasets[0].data.push(novoRegistro2.leitura);


//     // Atualiza o gráfico
//     window.graficoLinha2.update();	

//     // agendar a chamada da mesma função para daqui a 7 segundos
//     receberNovasLeituras2();	

//   }, 1000); // 7000 ms -> 7 segundos
// }


// ///////////////////////////////////////////////////////////////////////


// function receberNovasLeituras3() {
//   setTimeout(() => {
    
//     // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
//     var agora = new Date();
//     var hora = agora.getHours();
//     var minuto = agora.getMinutes();
//     var segundo = agora.getSeconds();
//     var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

//     // esse "novoRegistro" será recuperado do backend futuramente

//     var novoRegistro3 = {
//       momento: momento,
//       leitura: sortearTemperatura()
//     };

//     // tirando e colocando valores no gráfico
//     config3.data.labels.shift();
//     config3.data.labels.push(novoRegistro3.momento);
//     config3.data.datasets[0].data.shift();
//     config3.data.datasets[0].data.push(novoRegistro3.leitura);


//     // Atualiza o gráfico
//     window.graficoLinha3.update();	

//     // agendar a chamada da mesma função para daqui a 7 segundos
//     receberNovasLeituras3();	

//   }, 1000); // 7000 ms -> 7 segundos
// }


// ////////////////////////////////////////////////////////////////////////

// function receberNovasLeituras4() {
// setTimeout(() => {

// // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
// var agora = new Date();
// var hora = agora.getHours();
// var minuto = agora.getMinutes();
// var segundo = agora.getSeconds();
// var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

// // esse "novoRegistro" será recuperado do backend futuramente

// var novoRegistro4 = {
//   momento: momento,
//   leitura: sortearTemperatura()
// };

// // tirando e colocando valores no gráfico
// config4.data.labels.shift();
// config4.data.labels.push(novoRegistro4.momento);
// config4.data.datasets[0].data.shift();
// config4.data.datasets[0].data.push(novoRegistro4.leitura);


// // Atualiza o gráfico
// window.graficoLinha4.update();	

// // agendar a chamada da mesma função para daqui a 7 segundos
// receberNovasLeituras4();	

// }, 1000); // 7000 ms -> 7 segundos
// }


// function plotarGrafico() {
//   // chamar os 7 últimos registros de leitura
//   recuperarDadosIniciais();

//   // criação do gráfico na página
//   var ctx = document.getElementById('c_grafico').getContext('2d');
//   window.graficoLinha = new Chart(ctx, config);

//   // var ctx2 = document.getElementById('r_grafico').getContext('2d');
//   // window.graficoLinha2 = new Chart(ctx2, config2);   

//   var ctx3 = document.getElementById('h_grafico').getContext('2d');
//   window.graficoLinha3 = new Chart(ctx3, config3);   

//   var ctx4 = document.getElementById('n_grafico').getContext('2d');
//   window.graficoLinha4 = new Chart(ctx4, config4);   

//   // função que agenda a recuperação da última leitura para daqui a 7 segundos
//   receberNovasLeituras();
//   receberNovasLeituras2();
//   receberNovasLeituras3();
//   receberNovasLeituras4();
// } 

// // indicando que a função "plotarGrafico" será invocada assim que a página carregar

// window.onload =plotarGrafico;


