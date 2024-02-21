function calcular() {
    let vel1 = document.getElementById("vel1").value
    let vel2 = document.getElementById("vel2").value
    let resposta = document.getElementById("paragrafo-resposta")

    console.log("olá,mundo")
    if (vel1 > vel2) {
        resposta.innerText = `A velocidade do Carro 1: ${vel1}Km/h é maior que a do Carro 2: ${vel2}Km/h`
    } else if (vel2 > vel1) {
        resposta.innerText = `A velocidade do Carro 2: ${vel2}Km/h é maior que a do Carro 1: ${vel1}Km/h`
    } else if (vel2 = vel1) {
        resposta.innerText = `A velocidade dos Carros são iguais. Carro 1: ${vel1}Km/h, Carro 2: ${vel2}Km/h`
    } else {
        resposta.innerText = Error("Insira os valores aceitos")
    }
}