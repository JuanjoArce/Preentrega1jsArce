function realizarConsultasYReclamos() {
  do {
    alert("Buenas tardes, que deseas realizar? Consulta (1) o reclamo (2)");

    let introdujo = parseInt(prompt('Ingrese "1" para consulta o "2" para reclamo: '));

    if (introdujo === 1) {
      let tipoConsulta = prompt("Por favor, ingresa tu consulta:");
      alert(`Has elegido consulta. Tu consulta es: ${tipoConsulta}`);
    } else if (introdujo === 2) {
      let tipoReclamo = prompt("Por favor, ingresa tu reclamo:");
      alert(`Has elegido reclamo. Tu reclamo es: ${tipoReclamo}`);
    } else {
      alert("Opcion no valida. Debes ingresar 1 para consulta o 2 para reclamo.");
    }

    // Preguntar al usuario si desea realizar otra consulta o reclamo
    let continuar = prompt("¿Deseas realizar otra consulta o reclamo? (si/no)").toLowerCase();

    // continua si la respuesta es "si" sino va a seguir
    if (continuar !== "si") {
      break;
    }
    // repetir indefinidamente hasta que se salga del bucle
 } while (true); 
}

realizarConsultasYReclamos();