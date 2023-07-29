const tentativasInput = document.getElementById('input');
const tentativasSPAN = document.getElementById('tentativas');
const placeholder = document.getElementById('placeholder');
const img = document.getElementById('img');
const arrowUp = document.getElementById('up');
const arrowDown = document.getElementById('down');
let tentativas = 0;

function geradorDeNumero() {
    return numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

const numFinal = geradorDeNumero();

tentativasInput.addEventListener('keydown', function(event) {

    if(event.key === 'Enter') {
        setasAuxiliadoras();
        
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

            if(tentativas === 1) {
                if(tentativasInput.value == '') {
                    tentativasSPAN.textContent += `0`;

                } else {
                    tentativasSPAN.textContent += `${tentativasInput.value}`;
                    
                }

            } else {
                if(tentativasInput.value == '') {
                    tentativasSPAN.textContent += `- 0 `;

                } else {
                    tentativasSPAN.textContent += ` - ${tentativasInput.value}`;
                    
                }

            }

            tentativasInput.value = ''

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
});

function setasAuxiliadoras() {
    if(tentativasInput.value > numFinal ) {
        arrowUp.classList.remove('main__arrow--active');
        arrowDown.classList.add('main__arrow--active');

    } else if(tentativasInput.value < numFinal) {
        arrowUp.classList.add('main__arrow--active');
        arrowDown.classList.remove('main__arrow--active');

    } else {
        arrowUp.classList.remove('main__arrow--active');
        arrowDown.classList.remove('main__arrow--active');
        
    }
}
