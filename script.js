
let pratoselecionado=0;
let bebidaselecionado=0;
let sobremesaselecionado=0;
let pedidofechado=0;

function SelecionarPrato(PratoN){
    pratoselecionado = document.querySelector('.Pratos .selecionado');

    if(pratoselecionado !== null) {pratoselecionado.classList.remove('selecionado');}
    PratoN.classList.add('selecionado');

    if(pratoselecionado !== 0 && bebidaselecionado !== 0 && sobremesaselecionado !== 0){
        pedidofechado = document.querySelector('.selecione');
        pedidofechado.classList.add('pedidocompleto');
        pedidofechado.innerHTML = "Fechar pedido";
    }
}

function SelecionarBebida(BebidaN){
    bebidaselecionado = document.querySelector('.Bebidas .selecionado');
    if(bebidaselecionado !== null){bebidaselecionado.classList.remove('selecionado');}
    BebidaN.classList.add('selecionado');
    if(pratoselecionado !== 0 && bebidaselecionado !== 0 && sobremesaselecionado !== 0){
        pedidofechado = document.querySelector('.selecione');
        pedidofechado.classList.add('pedidocompleto');
        pedidofechado.innerHTML = "Fechar pedido";
    }
}

function SelecionarSobremesa(SobremesaN){
    sobremesaselecionado = document.querySelector('.Sobremesas .selecionado');
    if(sobremesaselecionado !== null){sobremesaselecionado.classList.remove('selecionado');}
    SobremesaN.classList.add('selecionado');
    if(pratoselecionado !== 0 && bebidaselecionado !== 0 && sobremesaselecionado !== 0){
        pedidofechado = document.querySelector('.selecione');
        pedidofechado.classList.add('pedidocompleto');
        pedidofechado.innerHTML = "Fechar pedido";
    }
}

function fecharpedido(){

    let precoprato = Number(document.querySelector('.Pratos .selecionado .descricao .preco').innerHTML.replace(',','.'));
    let precobebida = Number(document.querySelector('.Bebidas .selecionado .descricao .preco').innerHTML.replace(',','.'));
    let precosobremesa = Number(document.querySelector('.Sobremesas .selecionado .descricao .preco').innerHTML.replace(',','.'));
    let soma = precobebida + precoprato + precosobremesa;
    alert(soma.toFixed(2));
    
    let prato = document.querySelector('.Pratos .selecionado .descricao .itemsolicitado').innerHTML;
    let bebida = document.querySelector('.Bebidas .selecionado .descricao .itemsolicitado').innerHTML;
    let sobremesa = document.querySelector('.Sobremesas .selecionado .descricao .itemsolicitado').innerHTML;
    
    alert(prato+bebida+sobremesa);
    const fechado = document.querySelector('.pedidocompleto');
    if (fechado == null){
        alert('Por favor, selecione 3 pedidos para prosseguir.');
    } else {
        let trala = 'https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp';
        let encode = encodeURIComponent(trala);
        alert(trala);
    }
}


