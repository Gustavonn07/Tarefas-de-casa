const tentativasInput = document.getElementById('input');
const tentativasSPAN = document.getElementById('tentativas');
const placeholder = document.getElementById('placeholder');
const img = document.getElementById('img');
const arrowUp = document.getElementById('up');
const arrowDown = document.getElementById('down');
const modal = document.getElementById('modal');
const erro = document.getElementById('erro');
const x = document.getElementById('x');
let arrayTentativas = [];
let tentativas = 0;

function geradorDeNumero() {
    return numeroAleatorio = Math.floor(Math.random() * 100) + 1;
};

const numFinal = geradorDeNumero();

tentativasInput.addEventListener('keyup', function(event) {

    if(event.key === 'Enter') {
        
        if(tentativasInput.value == numFinal) {
            tentativas = 0;
            img.src = `src/images/Vencedor.png`;

            placeholder.innerHTML = 
            `
            <p class="main__paragraph main__paragraph--textChamp">
                Parabéns o número é: <span class="main__span">${numFinal}<span>
            </p>
            `
            tentativasInput.style.display= 'none';
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'none';

        } else {
            tentativas++;
            arrayTentativas.push(tentativasInput.value);

            if(arrayTentativas.includes('')) {
                arrayTentativas.splice(arrayTentativas.indexOf(''), 1, '0');
            }
            
            if(!erroModal(tentativasInput.value, arrayTentativas)) {
            
                setasAuxiliadoras();

                if(tentativas === 1) {
                    if(tentativasInput.value == '') {
                        tentativasSPAN.textContent += `0`;
    
                    } else {

                        if(arrayTentativas[tentativas - 1] === undefined) {
                            tentativasSPAN.textContent += ``;

                        } else {
                            tentativasSPAN.textContent += `${arrayTentativas[tentativas - 1]}`;

                        };
                    };
    
                } else {
                    if(arrayTentativas[tentativas - 1] === undefined) {
                        tentativasSPAN.textContent += ``;
                        
                    } else {
                        tentativasSPAN.textContent += ` - ${arrayTentativas[tentativas - 1]}`;
                        
                    };
                };
    
                tentativasInput.value = '';
    
                if(tentativas === 10) {
                    img.src = `src/images/Derrota.png`;
    
                    placeholder.innerHTML = `
                    <p class="main__paragraph main__paragraph--textLoser">
                    Você não acertou, o número era: <span id="numeroFinal" class="main__span">${numFinal}</span>
                    </p>
    
                    <button class="main__btn" id="btn">Tentar novamente</button>
                    `;
                    
                    const btn = document.getElementById('btn');
                    btn.addEventListener('click', () => {
                        location.reload();
                    });
    
                    tentativasInput.style.display= 'none';
                    arrowUp.style.display = 'none';
                    arrowDown.style.display = 'none';
                };
            };
        };
    };
});

function setasAuxiliadoras() {
    const ultimaTentativa = Number(arrayTentativas[arrayTentativas.length - 1]);

    if (ultimaTentativa > numFinal) {
        arrowUp.classList.remove('main__arrow--active');
        arrowDown.classList.add('main__arrow--active');

    } else if (ultimaTentativa < numFinal) {
        arrowUp.classList.add('main__arrow--active');
        arrowDown.classList.remove('main__arrow--active');

    } else {
        arrowUp.classList.remove('main__arrow--active');
        arrowDown.classList.remove('main__arrow--active');

    }
};

function erroModal(numeroTeste, array) {
    if(possuiValorMaiorQue100(numeroTeste, array)) {
        modal.style.display = 'flex';
        erro.textContent = 'Valor maior do que 100, tente novamente!';
        arrayTentativas.pop()

    } else if(possuiValorMenorQue0(numeroTeste, array)) {
        modal.style.display = 'flex';
        erro.textContent = 'Valor menor do que 0, tente novamente!';
        arrayTentativas.pop()

    } else if (possuiValoresRepetidos(array)) {
        modal.style.display = 'flex';
        erro.textContent = 'Valor repetido, tente novamente!';

    };
};

function possuiValorMaiorQue100(numeroTeste) {
    return numeroTeste > 100;
};

function possuiValorMenorQue0(numeroTeste) {
    return numeroTeste < 0;
};

function possuiValoresRepetidos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] === array[j]) {
            array.pop();
            return true;
          };
        };
      };

    return false;
};

x.addEventListener('click', () => {
    modal.style.display = 'none';
    erro.textContent = '';

    tentativas--;
});