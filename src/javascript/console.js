const input = document.getElementById('slide4__input-text');
const output = document.getElementById('console');
const btn = document.getElementById('submit');

btn.addEventListener("click", function() {
    try {
        output.style.color = 'white';
        output.innerText = coletarEval();

    } catch(error) {
        output.style.color = 'red';
        output.innerHTML = 'Ocorreu um erro no seu código, tente novamente!';
    };
});

function coletarEval() {
    let codigo = eval(input.value);
    return codigo;
};