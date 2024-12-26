document.addEventListener("DOMContentLoaded", () => {
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");
  const calculateBtn = document.getElementById("calculate-btn");
  const resultDiv = document.getElementById("result");

  // Set default values to today
  const today = new Date().toISOString().split("T")[0];
  startDateInput.value = today;
  endDateInput.value = today;

  calculateBtn.addEventListener("click", () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (isNaN(startDate) || isNaN(endDate)) {
      resultDiv.textContent = "Please select valid dates.";
      return;
    }

    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 0) {
      resultDiv.textContent = "End date must be after or equal to the start date.";
    } else {
      resultDiv.textContent = `The difference is ${differenceInDays} days.`;
    }
  });
});
