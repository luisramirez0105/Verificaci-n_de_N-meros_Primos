// Función para verificar si un número es primo
function esPrimo(numero) {
    // Casos especiales: negativos, 0 y 1 no son primos
    if (numero <= 1) return false;
    // Verificar divisores desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por i, no es primo
        if (numero % i === 0) return false;
    }
    // Si no encontró divisores, el número es primo
    return true;
}

// Manejo del evento de envío del formulario
document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const numero = parseInt(document.getElementById('numberInput').value); // Obtener el valor ingresado
    const resultado = esPrimo(numero); // Verificar si el número es primo

    // Mostrar el resultado en el div con id "result"
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultado ? `El número ${numero} es primo.` : `El número ${numero} no es primo.`;
});
