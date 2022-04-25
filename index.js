const fechaEstreno = new Date("April 25, 2022 19:00:00 GMT-3")

let conteo = setInterval(() =>{
    const fechaActual = new Date().getTime()

    let faltaTiempo = fechaEstreno - fechaActual

    // calcular tiempo
    let horas = Math.floor((faltaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutos = Math.floor((faltaTiempo % (1000 * 60 * 60)) / (1000 * 60))
    let segundos = Math.floor((faltaTiempo % (1000 * 60)) / 1000)

    // dom
    const counter = document.getElementById("counter")

    counter.innerText = `Falta ${horas}:${minutos}:${segundos} pa que se active ese #23 en lobby`
})

const hero = document.getElementById("main-img")
hero.onclick = () => open("https://www.youtube.com/watch?v=dsriJ0lNRSI")

console.log("Doxeadooooo santi")