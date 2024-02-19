
function carregar(){
    var msg = document.getElementById("msg")
    var foto = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        foto.src = 'imagens/foto-manha.png'
        document.body.style.background ='#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        foto.src = 'imagens/foto-tarde.png'
        document.body.style.background ='#b9846f'
    }else{
        foto.src = 'imagens/foto-noite.png'
        document.body.style.background ='#515154'
    }
}
