const title = document.querySelector("h1")
const input1 = document.querySelector ("#calculo1")
const input2 = document.querySelector ("#calculo2")
const btn = document.querySelector("#btnCalcular")
const resultP =  document.querySelector("#resultado")
const form =  document.querySelector("#formulario")

form.addEventListener("submit", btnOnClick)

function btnOnClick (event) {
    event.preventDefault()
    const totalinput =  parseInt(input1.value) + parseInt (input2.value);

    resultP.innerText = `Resultado es: ${totalinput}`;
}