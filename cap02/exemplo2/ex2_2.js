const input = document.querySelector('.movie_name');
const time = document.querySelector('.time')
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');

btn.addEventListener('click', () => {
    const titulo = input.value;
    const tempo = time.value;

    const valorConvertido = duracaoEmHoras(tempo);

    
})

function duracaoEmHoras(time) {
    return (time / 60).toFixed(2)
}