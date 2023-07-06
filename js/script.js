criar.onclick = function() {
    overlay.classList.add('active');
    modal.classList.add('active');
};

overlay.onclick = function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
};

fecharForm.onclick = function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
};

let equipes = JSON.parse(localStorage.getItem('equipes')) || [];

listarEquipes()

function listarEquipes() {
    listaDeEquipes.innerHTML = '';

    if(equipes.length > 0) {

        for(let i = 0; i < equipes.length; i++) {
            listaDeEquipes.innerHTML += `
                <li>
                    <h4>${equipes[i].nome}</h4>
                    <div>
                        <h2>${equipes[i].participante.length} <span>/ ${equipes[i].qtdMax}</span></h2>
                        <div class='acoes'>
                            <button>
                                <box-icon name="plus"></box-icon>Adicionar
                            </button>
    
                            <button class='trash' onclick='deletarEquipe(${i})'>
                                <box-icon name='trash'><box-icon>
                            </button>
                        </div>
                    </div>
                </li>
            `;
        }
    } else {
        listaDeEquipes.innerHTML = `
            <li class='listaVazia'>Crie sua primeira equipe!</li>
        `
    }
};

function criarEquipe() {
    // A linha de baixo serve para não usar o padrão do formulário (action):
    event.preventDefault();

    let equipeNome = document.querySelector('#equipe-nome');
    let equipeQtd = document.querySelector('#equipe-qtd');

    equipes.push(
        {
            nome: equipeNome.value,
            qtdMax: equipeQtd.value,
            participante: []
        },
    );
    
    // Salvar no storage
    if(!localStorage.getItem('equipes')) {

        // JSON é a forma de se comunicar entre aplicações.
        // Todas as linguagens entendem JSON (Tradutor de linguagens)
        localStorage.setItem('equipes', JSON.stringify(equipes));
    } else {

        // Stringify --> Transforma javascript em texto
        // Parse --> Transforma texto em javascrtipt
        let equipesSalvas = JSON.parse(localStorage.getItem('equipes'));
        equipesSalvas.push(
            {
                nome: equipeNome.value,
                qtdMax: equipeQtd.value,
                participante: []
            }
        );
        localStorage.setItem('equipes', JSON.stringify(equipesSalvas));
    }


    // Resetar form depois de criar um:
    formCriar.reset();

    overlay.classList.remove('active');
    modal.classList.remove('active');
    listarEquipes();
};

function deletarEquipe(pos) {
    let equipesRestantes = [];
    let equipesSalvas = JSON.parse(localStorage.getItem('equipes'));
    for (let i = 0; i < equipes.length; i++) {
        if(i != pos) {
            equipesRestantes.push(equipes[i]);
        };
    };

    equipesSalvas = [];
    equipesSalvas = equipesRestantes;
    equipes= [];
    equipes = equipesRestantes;
    localStorage.setItem('equipes', JSON.stringify(equipesSalvas));
    listarEquipes();
};