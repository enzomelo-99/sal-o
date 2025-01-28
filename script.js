const scriptURL = "https://script.google.com/macros/s/AKfycbw3zLXJSPRwzDuUQ8iOGlttSbFoRLYzEUWBva0flgHpe1-yWfK1mUG1leS0oVuQUonciQ/exec"; // Substitua pela URL do Apps Script.

document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nome: document.getElementById("name").value,
    email: document.getElementById("email").value,
    servico: document.getElementById("service").value,
    data: document.getElementById("date").value,
    horario: document.getElementById("time").value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("response").innerText = json.message;
      if (json.status === "success") {
        document.getElementById("booking-form").reset();
      }
    })
    .catch((error) => {
      document.getElementById("response").innerText =
        "Erro ao registrar o agendamento. Tente novamente.";
      console.error(error);
    });
});
