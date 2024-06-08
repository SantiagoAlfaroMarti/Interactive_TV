let power = document.getElementById("power");
let encendido = false;

let button = document.getElementsByClassName("button");
let arrayBoton = Array.from(button)

let date = document.getElementById("date")
let hour = document.getElementById("hour")
let fecha = new Date();

let screen = document.getElementById("screen");


for (let i = 0; i < arrayBoton.length; i++) {
    arrayBoton[i].addEventListener("click", () => {

        hour.style.visibility = "visible";
        date.style.visibility = "visible";
        channel.style.visibility = "visible";

        if (encendido) {
            screen.classList.replace(screen.classList[0], `ch${i + 1}`);
            channel.innerHTML = `channel ${i + 1}`
            hour.innerHTML = date.toLocaleTimeString();
            date.innerHTML = date.toLocaleDateString();

            setTimeout(function () {
                hour.style.visibility = "hidden";
                date.style.visibility = "hidden";
                channel.style.visibility = "hidden";
            }, 7000);
        }

    })
}


power.addEventListener("click", () => {

    channel.style.visibility = "visible";
    hour.style.visibility = "visible";
    date.style.visibility = "visible";

    power.classList.toggle("ON")
    encendido = !encendido
    if (encendido) {
        screen.classList.replace(pantalla.classList[0], "ONtele");
        hora.innerHTML = fecha.toLocaleTimeString();
        date.innerHTML = fecha.toLocaleDateString();

        setTimeout(function () {
            hour.style.visibility = "hidden";
            date.style.visibility = "hidden";
            channel.style.visibility = "hidden";
        }, 5500);

    } else {
        screen.classList.replace(screen.classList[0], "OFFTV");
        hour.innerHTML = ""
        date.innerHTML = ""
        channel.innerHTML = ""
    }
})