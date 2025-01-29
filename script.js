document.addEventListener("DOMContentLoaded", function () {
    const showForm = document.getElementById("showForm");
    const showCharts = document.getElementById("showCharts");
    const showReminders = document.getElementById("showReminders");
    const formContainer = document.getElementById("formContainer");
    const chartContainer = document.getElementById("chartContainer");
    const remindersContainer = document.getElementById("remindersContainer");
  
    showForm.addEventListener("click", () => {
        formContainer.style.display = "block";
        chartContainer.style.display = "none";
        remindersContainer.style.display = "none";
    });
  
    showCharts.addEventListener("click", () => {
        formContainer.style.display = "none";
        chartContainer.style.display = "block";
        remindersContainer.style.display = "none";
    });
  
    showReminders.addEventListener("click", () => {
        formContainer.style.display = "none";
        chartContainer.style.display = "none";
        remindersContainer.style.display = "block";
    });
  
    document.getElementById("toggleMode").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
  });
  
  