document.addEventListener("DOMContentLoaded", function () {
  const showForm = document.getElementById("showForm");
  const showChart = document.getElementById("showChart");
  const formSection = document.getElementById("formSection");
  const chartSection = document.getElementById("chartSection");

  showForm.addEventListener("click", function () {
      formSection.style.display = "block";
      chartSection.style.display = "none";
  });

  showChart.addEventListener("click", function () {
      formSection.style.display = "none";
      chartSection.style.display = "block";
      renderChart();
  });

  function renderChart() {
      const ctx = document.getElementById('salesChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
              datasets: [{
                  label: 'Ventas por Mes',
                  data: [50, 75, 40, 90, 120, 60],
                  borderColor: '#28A745',
                  backgroundColor: 'rgba(40, 167, 69, 0.2)',
                  borderWidth: 2
              }]
          },
          options: {
              responsive: true,
              animation: {
                  duration: 2000
              }
          }
      });
  }
});
