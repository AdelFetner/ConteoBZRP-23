// para el confetti
const start = () =>{
    confetti.start()
}
start()

const stop = () => {
    confetti.stop()
}

const confettiTime = () =>{
    setTimeout(() => {
        stop()
    }, 4500)
}

const fechaEstreno = new Date("April 25, 2022 18:13:00 GMT-3")

let conteo = setInterval(() =>{
    const counter = document.getElementById("counter")
    
    const fechaActual = new Date().getTime()

    let faltaTiempo = fechaEstreno - fechaActual

    // calcular tiempo
    let horas = Math.floor((faltaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutos = Math.floor((faltaTiempo % (1000 * 60 * 60)) / (1000 * 60))
    minutos = minutos.toString().padStart(2, "0")
    let segundos = Math.floor((faltaTiempo % (1000 * 60)) / 1000)
    segundos = segundos.toString().padStart(2, "0")

    if(horas <= 0 && minutos <= 0 && segundos <= 0){
        counter.innerText = `YA SE ESTRENÓ VAMOOO YA MISMO`
        counter.onclick= () => open("https://www.youtube.com/c/Bizarrap/videos")
        counter.style.cursor = "pointer"
        counter.style.backgroundColor = "red"
        confettiTime()
    }else{
        counter.innerText = `Falta ${horas}:${minutos}:${segundos} pa que se active ese #23 en lobby`
        stop()
    }
})

const hero = document.getElementById("main-img")
// hero.onclick = () => open("https://www.youtube.com/watch?v=dsriJ0lNRSI")

console.log("Doxeadooooo santi")