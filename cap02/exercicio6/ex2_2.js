const frm = document.querySelector('form');
const info_promo = document.querySelector('.info_promo');
const desconto_promo = document.querySelector('.desconto_promo');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const info = frm.produto.value;
    const preco = frm.preco.value;

    const descontoDoProduto = preco * 0.5;

    info_promo.innerText = `${info} - Promoção: Leve 3 por R$: ${(preco * 2 + descontoDoProduto).toFixed(2)}`
    desconto_promo.innerText = `O 3º produto custa apenas R$: ${descontoDoProduto.toFixed(2)} `
})