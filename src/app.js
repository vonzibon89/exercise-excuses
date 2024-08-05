const sujeto = ["Mi perro", "Mi gato", "Mi hermano", "Mi primito"];
const verbo = ["rompió", "se comió", "destrozó", "tiró"];
const objeto = ["la tarea", "mi proyecto", "mis notas", "el cuaderno"];
const tiempo = ["antes de ayer", "ayer", "hoy", "recién"];
const emoji = ["😅", "😭", "🥲", "😔"];

function generarExcusa() {
  const sujetoAleatorio = sujeto[Math.floor(Math.random() * sujeto.length)];
  const verboAleatorio = verbo[Math.floor(Math.random() * verbo.length)];
  const objetoAleatorio = objeto[Math.floor(Math.random() * objeto.length)];
  const tiempoAleatorio = tiempo[Math.floor(Math.random() * tiempo.length)];
  const emojiAleatorio = emoji[Math.floor(Math.random() * emoji.length)];

  return `${sujetoAleatorio} ${verboAleatorio} ${objetoAleatorio} ${tiempoAleatorio} ${emojiAleatorio}`;
}

window.onload = function() {
  const excusa = generarExcusa();
  document.getElementById("resultado").innerText = excusa;
};
