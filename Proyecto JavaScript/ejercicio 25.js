window.onload=function(){
    let tareaInicio = document.querySelector("button");
    let tareaFinal = document.querySelector("button+button");
    let eliminarUltTarea = document.querySelector("button+button+button");
    let eliminarPriTarea = document.querySelector("button+button+button+button");
    let padre = document.querySelector("ul");
    

    tareaInicio.onclick=function(){
        let nuevaTarea = prompt("Dime una nueva tarea");
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = nuevaTarea;
        padre.insertBefore(nuevoLi , padre.firstChild);
    }

    tareaFinal.onclick=function(){
        let nuevaTarea = prompt("Dime una nueva tarea");
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = nuevaTarea;
        padre.appendChild(nuevoLi);
    }

    eliminarUltTarea.onclick=function(){
      padre.removeChild(padre.lastChild);
    }

    eliminarPriTarea.onclick=function(){
        padre.removeChild(padre.firstChild);
    }
}