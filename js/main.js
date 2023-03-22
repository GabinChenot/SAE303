const canvas = document.getElementById("myChart");

const myChart = new Chart(canvas, {
  type: "line",
  data: {
    labels: [2012, 2014, 2016, 2018, 2020, 2022],
    datasets: [
      {
        label: "Ecoulement visible",
        data: [20, 25, 27, 27, 24, 20, 18, 15, 16, 28, 21],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Ecoulement non visible",
        data: [10, 5, 3, 3, 6, 10, 12, 15, 14, 2, 9],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Nombre d'écoulements",
          color: "white",
        },
        min: 0,
        max: 30,
        ticks: {
          color: "white", // couleur du texte de l'axe y
        },
      },
      x: {
        title: {
          display: true,
          text: "Années",
          color: "white",
        },
        ticks: {
          color: "white", // couleur du texte de l'axe x
        },
      },
    },
  },
});
