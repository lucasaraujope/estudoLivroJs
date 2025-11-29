const frm = document.querySelector('form');
const promo = document.querySelector('.promo');
const entrada = document.querySelector('.entrada');
const parcela = document.querySelector('.parcelas');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const veiculo = frm.veiculo.value;
    const preco = Number(frm.preco.value);

    promo.innerText = `Promoção: ${veiculo}`;
    entrada.innerText = `Entrada de R$: ${preco / 2}`;
    parcela.innerText = `+12x de R$ ${((preco / 2) / 12).toFixed(2)}`;
})