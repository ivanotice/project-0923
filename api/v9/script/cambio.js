$(document).ready(function() {
  // Event listener para el elemento de intercambio de idiomas
  $('#swp-language').click(function() {
    // Obtener los valores seleccionados
    const sourceValue = $('#source-lang').val();
    const targetValue = $('#target-lang').val();

    // Verificar si la opción "Autodetect" está seleccionada
    if (sourceValue === 'Autodetect') {
      $('#translated-text').text('Error: Seleccione un idioma válido. Lamentamos informarle que ha ocurrido un error... Por favor, asegúrese de seleccionar un idioma válido antes de continuar.');
      return;
    }

    // Intercambiar las selecciones
    $('#source-lang').val(targetValue);
    $('#target-lang').val(sourceValue);

    // Limpiar el mensaje de error
    $('#translated-text').text('');
  });
});
