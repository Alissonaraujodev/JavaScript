function contar(){
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i < f){
             for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
             }
            
        }else{
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
         res.innerHTML += `\u{1f3c1}`
    }
}