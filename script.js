
function SelecionarPrato(PratoN){
    const pratoselecionado = document.querySelector('.selecionado');

    if(pratoselecionado !== null){
        pratoselecionado.classList.remove('selecionado');
    }

    const selecionouPN = '.'+PratoN;
    const botaoPN = document.querySelector(selecionouPN);
    botaoPN.classList.add('selecionado');
}






function SelecionarBebida(BebidaN){
    const bebidaselecionado = document.querySelector('.selecionado');

    if(bebidaselecionado !== null){
        bebidaselecionado.classList.remove('selecionado');
    }

    const selecionouBN = '.'+BebidaN;
    const botaoBN = document.querySelector(selecionouBN);
    botaoBN.classList.add('selecionado');
}






function SelecionarSobremesa(SobremesaN){
    const sobremesaselecionado = document.querySelector('.selecionado');

    if(sobremesaselecionado !== null){
        sobremesaselecionado.classList.remove('selecionado');
    }

    const selecionouSN = '.'+SobremesaN;
    const botaoSN = document.querySelector(selecionouSN);
    botaoSN.classList.add('selecionado');
}

