let power = document.getElementById("power");
let encendido = false;

let button = document.getElementsByClassName("button");
let arraybutton = Array.from(button)           

let date = document.getElementById("date")
let hora = document.getElementById("hora")
let fecha = new Date();

let screen = document.getElementById("screen");


for (let i = 0; i < arraybutton.length; i++) {   
    arraybutton[i].addEventListener("click", () => {   

        hora.style.visibility = "visible";
        date.style.visibility = "visible"; 
        canal.style.visibility = "visible";

        if (encendido) {
            screen.classList.replace(screen.classList[0], `ch${i + 1}`);
            canal.innerHTML = `Canal ${i + 1}`                             
            hora.innerHTML = fecha.toLocaleTimeString();
            date.innerHTML = fecha.toLocaleDateString();

            setTimeout(function () {
                hora.style.visibility = "hidden";
                date.style.visibility = "hidden"; 
                canal.style.visibility = "hidden";
            }, 10000);
        }

    })
}


power.addEventListener("click", () => { 

    canal.style.visibility = "visible"; 
    hora.style.visibility = "visible";
    date.style.visibility = "visible";

    power.classList.toggle("on")
    encendido = !encendido
    if (encendido) {      
        screen.classList.replace(screen.classList[0], "on-tv");
        hora.innerHTML = fecha.toLocaleTimeString();                    
        date.innerHTML = fecha.toLocaleDateString();                    

        setTimeout(function () {
            hora.style.visibility = "hidden";
            date.style.visibility = "hidden";
            canal.style.visibility = "hidden";
        }, 8000);

    } else {
        screen.classList.replace(screen.classList[0], "off-tv");
        hora.innerHTML = ""
        date.innerHTML = ""                                      
        canal.innerHTML = ""                                      
    }
})