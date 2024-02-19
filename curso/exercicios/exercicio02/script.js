function verificar(){
    var data  = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("[Erro] Verifique os dados e tente novamente!")
    }else{
       var fsex = document.getElementsByName('sexo')
       var idade = ano - Number(fano.value)
       var gen = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        gen = 'Homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/crianca-h.png')
        }else if(idade < 21){
            img.setAttribute('src', 'imagens/jovem-h.png')
        }else if (idade < 50){
            img.setAttribute('src', 'imagens/adulto-h.png')
        }else{
            img.setAttribute('src', 'imagens/idoso-h.png')
        }
       }else {
        gen = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagens/crianca-m.png')
        }else if(idade < 21){
            img.setAttribute('src', 'imagens/jovem-m.png')
        }else if (idade < 50){
            img.setAttribute('src', 'imagens/adulto-m.png')
        }else{
            img.setAttribute('src', 'imagens/idoso-m.png')
        }
       }
       res.innerHTML = `Detectamos ${gen} com ${idade} anos. `
       res.appendChild(img)
    }

}