function graficarFuncionBase(exprFuncion, x0, x1) {
  const canvas = document.getElementById('graficoBase');
  canvas.style.display = 'block';

  const ctx = canvas.getContext('2d');
  const f = math.compile(exprFuncion);

  const puntos = [];
  for (let x = x0 - 2; x <= x1 + 2; x += 0.1) {
    puntos.push({ x: x, y: f.evaluate({ x }) });
  }

  if (window.chartBase) window.chartBase.destroy();

  window.chartBase = new Chart(ctx, {
    type: 'scatter', // Importante para manejar puntos (x, y)
    data: {
      datasets: [
        {
          label: 'f(x)',
          data: puntos,
          borderColor: 'cyan',
          borderWidth: 2,
          showLine: true,
          fill: false,
          tension: 0.1,
          pointRadius: 0
        },
        {
          label: 'x₀',
          data: [{ x: x0, y: 0 }],
          backgroundColor: 'yellow',
          type: 'scatter',
          pointRadius: 5,
          pointStyle: 'rectRot'
        },
        {
          label: 'x₁',
          data: [{ x: x1, y: 0 }],
          backgroundColor: 'orange',
          type: 'scatter',
          pointRadius: 5,
          pointStyle: 'rect'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#fff' } }
      },
      scales: {
        x: {
          title: { display: true, text: 'x', color: '#fff' },
          ticks: { color: '#fff' }
        },
        y: {
          title: { display: true, text: 'f(x)', color: '#fff' },
          ticks: { color: '#fff' }
        }
      }
    }
  });
}
