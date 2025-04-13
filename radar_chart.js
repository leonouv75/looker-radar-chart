const radarChart = {
  render: function (data, config, element) {
    element.innerHTML = `<canvas id="radarCanvas"></canvas>`;

    // Extraer etiquetas y datos
    const labels = data.fields.dimensions.map((d, i) => data.rows.map(r => r[i])).flat();
    const values = data.fields.metrics.map((m, i) => data.rows.map(r => r[i + data.fields.dimensions.length])).flat();

    const ctx = document.getElementById("radarCanvas").getContext("2d");

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [{
          label: "Datos",
          data: values,
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          pointBackgroundColor: "rgba(54, 162, 235, 1)"
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }
};

dscc.subscribeToData(radarChart.render);