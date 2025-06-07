function selecionarRota(nomeRota) {
    const display = document.getElementById('rota-selecionada');
    if (display) {
        display.textContent = `Você selecionou: ${nomeRota}. Siga as instruções de evacuação.`;
    }
}

function mostrarAlerta(risco) {
    const mensagemAlerta = document.getElementById('mensagem-alerta');
    let mensagem = '';
    let cor = '';

    switch (risco) {
        case 'alto':
            mensagem = 'Risco ALTO, Evacue Imediatamente! Evacuação imediata recomendada. Risco extremo detectado na região. Escolha rapidamente a rota segura mais próxima e dirija-se ao ponto de abrigo. Evite áreas alagadas, vias bloqueadas ou regiões indicadas como perigosas.';
            cor = '#ff4d4d'; 
            break;
        case 'medio':
            mensagem = 'Risco MÉDIO, Fique atento e prepare-se! Há indícios de risco iminente (alagamento, deslizamento ou outro evento). Fique em alerta. Prepare um kit de emergência com documentos, água e mantimentos. Planeje sua evacuação usando uma das rotas seguras indicadas abaixo.';
            cor = '#ffb84d'; 
            break;
        case 'baixo':
            mensagem = 'Risco BAIXO, Mantenha-se informado! A situação está sob controle, Use esta ferramenta para conhecer as rotas disponíveis e se preparar preventivamente.';
            cor = '#4da64d'; 
            break;
        default:
            mensagem = 'Status desconhecido.';
            cor = '#999';
    }

    if (mensagemAlerta) {
        mensagemAlerta.textContent = mensagem;
        mensagemAlerta.style.color = cor;
        
        document.body.style.backgroundColor = cor + '33'; 
        setTimeout(() => {
            document.body.style.backgroundColor = '#f9f9f9';
            mensagemAlerta.textContent = '';
        }, 7000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('area[data-rota]');
    areas.forEach(area => {
        area.addEventListener('click', (e) => {
            e.preventDefault();
            const nomeRota = area.getAttribute('data-rota');
            selecionarRota(nomeRota);
        });
    });
});
