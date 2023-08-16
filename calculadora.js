function calculadoraInteres(inicial, tasaInteres, tiempo) {
  const interes = (inicial * tasaInteres * tiempo) / 100;
  const total = inicial + interes;
  
  return {
    interes: interes,
    total: total
  };
}

const montoInicial = parseFloat(prompt("Ingresar el monto del préstamo:"));
const tasaAnual = parseFloat(prompt("Ingresar la tasa de interés anual (%):"));
const plazoMeses = parseInt(prompt("Ingresar el plazo a pagar en meses:"));

const resultado = calculadoraInteres(montoInicial, tasaAnual, plazoMeses);

alert(`Monto de interés: $${resultado.interes.toFixed(2)}\nMonto total a pagar: $${resultado.total.toFixed(2)}`);
