const frm = document.querySelector('form');
const result = document.querySelector('.resultado')

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const valorQuilo = Number(frm.quilo.value);
    const consumoCliente = Number(frm.consumo.value);

    const valorAPagar = Number(valorQuilo * (consumoCliente / 1000));

    result.innerText = `Valor a pagar R$: ${valorAPagar.toFixed(2)}`
})