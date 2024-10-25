function exercicio01(){
  const votos = []
  var voto
  var candidato1 = 0
  var candidato2 = 0
  var contador_branco = 0
  var contador_nulo = 0
  var contador_votos = 0
  var porcentagem1 = 0
  var porcentagem2 = 0
  var porcentagembranco = 0
  var porcentagemnulo = 0

  while(voto !=-1){
    voto = parseInt(prompt(`Digite seu voto: `))
    if
    (voto == 1 || voto == 2 || voto == 0){
      votos.push(voto)
    }
    else if (voto != -1){
      votos.push(5)
    }
  }

  for(i=0; i<=votos.length; i++){
    if(votos[i] == 1){
      candidato1++
      contador_votos++
    }
    else if (votos[i] == 2){
      candidato2++
      contador_votos++
    }
    else if (votos[i] == 0){
      contador_branco++
      contador_votos++
    }
    else if (votos[i] == 5){
      contador_nulo++
      contador_votos++
    }
  }

  porcentagem1 = ((candidato1*100)/contador_votos)
  porcentagem2 = ((candidato2*100)/contador_votos)
  porcentagembranco = ((contador_branco*100)/contador_votos)
  porcentagemnulo = ((contador_nulo*100)/contador_votos)

  if
  (porcentagem1 > porcentagem2){
    alert(`O Candidato 1 Venceu!`)
  }
  else if
  (porcentagem1 < porcentagem2){
    alert(`O Candidato 2 Venceu!`)
  }
  else{
    alert(`Algum erro ocorreu...`)
  }
  
  alert(`Votos do candidato 1: ${candidato1} // Porcentagem: ${porcentagem1}%` + `Votos do candidato 2: ${candidato2} // Porcentagem: ${porcentagem2}%` + `Votos em branco: ${contador_branco} // Porcentagem: ${porcentagembranco}%` + `Votos em nulo: ${contador_nulo} // Porcentagem: ${porcentagemnulo}%`)
}