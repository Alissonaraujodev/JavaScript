function tabuada(){
    let numero = document.getElementById('inumero')
    let tabu = document.getElementById('itabuada')
    if(numero.value.length == 0){
        alert('Por favoe, digite um  número!')
    }else{
        let n = Number(numero.value)
        tabu.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
        }
    }
}