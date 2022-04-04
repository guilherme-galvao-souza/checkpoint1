console.log('Bem vindo ao microondas, escolha a sua opção desejada: 1-Pipoca , 2-Macarrão, 3-Carne, 4-Feijão, 5 -Brigadeiro.')
function microondas(opcao,tempo)
{
    let tempoPadrao=0;
    switch(opcao){
    
        case 1:
            console.log("Pipoca");
            tempoPadrao=10;
        break
        case 2:
            console.log("Macarrão");
            tempoPadrao=8;
        break
        case 3:
            console.log("Carne");
            tempoPadrao=15;
        break
        case 4:
            console.log("Feijão");
            tempoPadrao=12;
        break
        case 5:
            console.log("Brigadeiro");
            tempoPadrao=8;
        break
        default:
            console.log("Prato Inexistente");
        
    
    }
    if(tempo>2*tempoPadrao ){
        console.log("A comida queimou")

    } else if(tempo<tempoPadrao){
        console.log("Prato frio")
    }
    else if(tempo >= 3*tempoPadrao){
        console.log("Kaaboooom")
    }
    else{
    console.log("Prato pronto, bom apetite!")
    return;
    }
}
microondas (4,8);
