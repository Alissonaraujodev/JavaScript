var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora(s).`)
if(hora < 6){
    console.log ('Boa madrugada!')
}else if(hora < 12){
    console.log ('Bom dia!')
}else if(hora < 18){
    console.log('Boa terde!')
}else{
    console.log('Boa noite!')
}