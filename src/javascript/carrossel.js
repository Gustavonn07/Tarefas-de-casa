const anteriores = document.querySelectorAll('.anterior');
const proximos = document.querySelectorAll('.proximo');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');
const slide5 = document.getElementById('slide5');
let pos = 1;

proximos.forEach(proximo => {
    proximo.addEventListener("click", function() {
        pos++;
        posicaoAtual()
    
        if(pos < 1) {
            pos = 1;
        }
    
        else if(pos > 5) {
            pos = 5
        }
    });
})

anteriores.forEach(anterior => {
    anterior.addEventListener("click", function() {
        pos--;
        posicaoAtual()
    
        if(pos < 1) {
            pos = 1;
        }
    
        else if(pos > 5) {
            pos = 5
        }
    });
})

function posicaoAtual() {
    slide1.classList.add('hidden');
    slide2.classList.add('hidden');
    slide3.classList.add('hidden');
    slide4.classList.add('hidden');
    slide5.classList.add('hidden');

    switch(pos) {
        case 1:
            slide1.classList.remove('hidden');
            slide1.classList.add('flex');
            break
        
        case 2:
            slide2.classList.remove('hidden');
            slide2.classList.add('flex');
            break
            
        case 3:
            slide3.classList.remove('hidden');
            slide3.classList.add('flex');
            break

        case 4:
            slide4.classList.remove('hidden');
            slide4.classList.add('flex');
            break

        case 5:
            slide5.classList.remove('hidden');
            slide5.classList.add('flex');
            break

        default:
            slide1.classList.remove('hidden');
            slide1.classList.add('flex');
            break
    };
};
