let power = document.getElementById("power");
let encendido = false;

let boton = document.getElementsByClassName("boton");
let arrayBoton = Array.from(boton)           

let date = document.getElementById("date")
let hora = document.getElementById("hora")
let fecha = new Date();

let pantalla = document.getElementById("pantalla");


for (let i = 0; i < arrayBoton.length; i++) {   
    arrayBoton[i].addEventListener("click", () => {   

        hora.style.visibility = "visible";
        date.style.visibility = "visible"; 
        canal.style.visibility = "visible";

        if (encendido) {
            pantalla.classList.replace(pantalla.classList[0], `ch${i + 1}`);
            canal.innerHTML = `Canal ${i + 1}`                             
            hora.innerHTML = fecha.toLocaleTimeString();
            date.innerHTML = fecha.toLocaleDateString();

            setTimeout(function () {
                hora.style.visibility = "hidden";
                date.style.visibility = "hidden"; 
                canal.style.visibility = "hidden";
            }, 8000);
        }

    })
}


power.addEventListener("click", () => { 

    canal.style.visibility = "visible"; 
    hora.style.visibility = "visible";
    date.style.visibility = "visible";

    power.classList.toggle("ON")
    encendido = !encendido
    if (encendido) {      
        pantalla.classList.replace(pantalla.classList[0], "ONtele");
        hora.innerHTML = fecha.toLocaleTimeString();                    
        date.innerHTML = fecha.toLocaleDateString();                    

        setTimeout(function () {
            hora.style.visibility = "hidden";
            date.style.visibility = "hidden";
            canal.style.visibility = "hidden";
        }, 8000);

    } else {
        pantalla.classList.replace(pantalla.classList[0], "OFFtele");
        hora.innerHTML = ""
        date.innerHTML = ""                                      
        canal.innerHTML = ""                                      
    }
})