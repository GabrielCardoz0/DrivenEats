
let pratoselecionado=0;
let bebidaselecionado=0;
let sobremesaselecionado=0;
let pedidofechado=0;

let prato;
let precoprato;
let bebida;
let precobebida;
let sobremesa;
let precosobremesa;
let soma;


function SelecionarPrato(PratoN){
    pratoselecionado = document.querySelector('.Pratos .selecionado');
    if(pratoselecionado !== null) {pratoselecionado.classList.remove('selecionado');
}
    PratoN.classList.add('selecionado');
    if(pratoselecionado !== 0 && bebidaselecionado !== 0 && sobremesaselecionado !== 0){
        pedidofechado = document.querySelector('.selecione');
        pedidofechado.classList.add('pedidocompleto');
        pedidofechado.innerHTML = "Fechar pedido";
    }
    let checkhidden = document.querySelector('.Pratos .aparece');
    if(checkhidden !== null){
        checkhidden.classList.remove('aparece');
    }
    let checkblock = document.querySelector('.Pratos .selecionado .esconde');
    checkblock.classList.add('aparece');
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
    let checkhidden2 = document.querySelector('.Bebidas .aparece');
    if(checkhidden2 !== null){
        checkhidden2.classList.remove('aparece');
    }
    let checkblock2 = document.querySelector('.Bebidas .selecionado .esconde');
    checkblock2.classList.add('aparece');
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
    let checkhidden3 = document.querySelector('.Sobremesas .aparece');
    if(checkhidden3 !== null){
        checkhidden3.classList.remove('aparece');
    }
    let checkblock3 = document.querySelector('.Sobremesas .selecionado .esconde');
    checkblock3.classList.add('aparece');
}

function fecharpedido(){

    const fechado = document.querySelector('.bottom-bar .pedidocompleto');
    if (fechado == null){
        alert('Por favor, selecione 3 pedidos para prosseguir.');
    } 



    precoprato = Number(document.querySelector('.Pratos .selecionado .descricao .preco').innerHTML.replace(',','.'));
    precobebida = Number(document.querySelector('.Bebidas .selecionado .descricao .preco').innerHTML.replace(',','.'));
    precosobremesa = Number(document.querySelector('.Sobremesas .selecionado .descricao .preco').innerHTML.replace(',','.'));
    soma = precobebida + precoprato + precosobremesa;

    prato = document.querySelector('.Pratos .selecionado .descricao .itemsolicitado').innerHTML;
    bebida = document.querySelector('.Bebidas .selecionado .descricao .itemsolicitado').innerHTML;
    sobremesa = document.querySelector('.Sobremesas .selecionado .descricao .itemsolicitado').innerHTML;
    
    let pratinho = document.querySelector('.precopratoselecionado');
    pratinho.innerHTML = 'R$ '+precoprato.toFixed(2);
    let bebidinha = document.querySelector('.precobebidaselecionada');
    bebidinha.innerHTML = 'R$ '+precobebida.toFixed(2);
    let sobremesinha = document.querySelector('.precosobremesaselecionada');
    sobremesinha.innerHTML ='R$ '+precosobremesa.toFixed(2);


    let n1 = document.querySelector('.pratoselecionado');
    n1.innerHTML = prato;
    let n2 = document.querySelector('.bebidaselecionada');
    n2.innerHTML = bebida;
    let n3 = document.querySelector('.sobremesaselecionada');
    n3.innerHTML = sobremesa;

    let n4 = document.querySelector('.precototal');
    n4.innerHTML = 'R$ '+soma.toFixed(2);

    let hidden = document.querySelector('.teladeenvio');
    hidden.classList.remove('esconde');
}

    function cancelar (){
        let cancelar = document.querySelector('.teladeenvio');
        cancelar.classList.add('esconde');
    }

    function podepedir(){
        let pedido = encodeURIComponent( `Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${soma.toFixed(2)}`);

        let link = document.querySelector('.trocarlink');
        link.href = (`https://wa.me/5511994703386?text=${pedido}`);
    }

