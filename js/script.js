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

let equipes = [];

function listarEquipes() {
    listaDeEquipes.innerHTML = '';
    for(let i = 0; i < equipes.length; i++) {
        listaDeEquipes.innerHTML += `
            <li>
                <h4>${equipes[i].nome}</h4>
                <div>
                    <h2>${equipes[i].participante} <span>/ ${equipes[i].qtdMax}</span> </h2>
                    <button>
                        <box-icon name="plus"></box-icon>Adicionar
                    </button>
                </div>
            </li>
        `;
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
            participante: 0
        },
    );
    
    overlay.classList.remove('active');
    modal.classList.remove('active');

    listarEquipes();
};