// Funcion Reloj digital
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("hora").innerText = timeString;
}
function irWeb() {
  window.location.href = "preguntasWeb.html";
}

window.onload = paginaCargada;
function paginaCargada() {
  document.getElementById("preguntas").addEventListener("click", irWeb);
}
function irWeb() {
  window.location.href = "preguntas.html";
}
