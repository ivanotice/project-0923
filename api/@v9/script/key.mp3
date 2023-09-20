const translateButton = document.getElementById('translate-btn');
const inputText = document.getElementById('input-text');
const sourceLang = document.getElementById('source-lang');
const targetLang = document.getElementById('target-lang');
const translatedText = document.getElementById('translated-text');

// Array con las 4 claves
const keys = ["eae90859027dda2a08da", "2020e849398dfd968380", "b0c3f971fabca46866c0", "685c32424219e8068141"];

// Función para obtener una clave aleatoria
function getRandomKey() {
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomKey = keys[randomIndex];

  // Remover la clave utilizada para que no se repita inmediatamente
  keys.splice(randomIndex, 1);

  // Agregar la clave utilizada al final del array
  keys.push(randomKey);

  return randomKey;
}

// Event listener para el botón de traducción
translateButton.addEventListener('click', () => {
  const apiKey = getRandomKey();

  const sourceLanguage = sourceLang.value;
  const targetLanguage = targetLang.value;
  const textToTranslate = inputText.value;

  // Construir la URL de la API con los parámetros necesarios
  const apiUrl = `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${sourceLanguage}|${targetLanguage}&key=${apiKey}`;

  // Realizar la solicitud a la API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.responseStatus === 200) {
        // Obtener la traducción del objeto de respuesta
        const translation = data.responseData.translatedText;

        // Mostrar la traducción en la página
        translatedText.textContent = `Traducción: ${translation}`;
      } else {
        // Mostrar el error en la consola
        console.error('Ha ocurrido un error:', data.responseStatus);
      }
    })
    .catch(error => {
      console.error('Ha ocurrido un error:', error);
      translatedText.textContent = 'Error al realizar la traducción, por favor póngase en contacto con nosotros +15092936276';
    });
});
