
    var largura;
    var altura;

    function ajustaTamanhoPalcoJogo(){
        altura = window.innerHeight;
        largura = window.innerWidth;

        console.log(altura, largura)
    }

    ajustaTamanhoPalcoJogo()

    function posicaoRandomica(){

        var posicaoX = Math.floor(Math.random() * largura) - 90;
        var posicaoY = Math.floor(Math.random() * altura) - 90;

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY
    
        //criando elemento html
        var mosquito = document.createElement('img')
        mosquito.src = 'img/mosca.png'
        mosquito.className = 'mosquito1'
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
    
        document.body.appendChild(mosquito)
    }

    



    


