document.addEventListener("DOMContentLoaded", function () {
  const showForm = document.getElementById("showForm");
  const showChart = document.getElementById("showChart");
  const showReminders = document.getElementById("showReminders");
  const formSection = document.getElementById("formSection");
  const chartSection = document.getElementById("chartSection");
  const remindersSection = document.getElementById("remindersSection");

  // Cambiar entre secciones
  showForm.addEventListener("click", function () {
      formSection.style.display = "block";
      chartSection.style.display = "none";
      remindersSection.style.display = "none";
  });

  showChart.addEventListener("click", function () {
      formSection.style.display = "none";
      chartSection.style.display = "block";
      remindersSection.style.display = "none";
      renderChart();
  });

  showReminders.addEventListener("click", function () {
      formSection.style.display = "none";
      chartSection.style.display = "none";
      remindersSection.style.display = "block";
  });

  // Renderizar gráfico
  function renderChart() {
      const ctx = document.getElementById('salesChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
              datasets: [{
                  label: 'Ventas',
                  data: [50, 60, 70, 80, 90, 100],
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderWidth: 2
              }]
          },
          options: {
              responsive: true,
              plugins: {
                  legend: {
                      display: true,
                      labels: {
                          color: "#fff"
                      }
                  }
              }
          }
      });
  }
});
