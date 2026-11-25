window.onload=function(){
    let boton = document.querySelector("nav input");
    let solucion = document.querySelector(".solucion");

    boton.onclick=function(){
        let filas = prompt("Dime el numero de filas de la tabla");
        while(filas <= 0 || filas > 10){
            filas = prompt("Tiene que estar entre 1 y 10");
        }
        let celdas = prompt("Dime el numero de celdas de la tabla");
        while(celdas <= 0 || celdas > 10){
            celdas = prompt("Tiene que estar entre 1 y 10");
        }
        let crearTabla = document.createElement("table");
        for (let i = 1; i <= filas; i++) {
            let fila = document.createElement("tr");
            for (let j = 1; j <= celdas; j++) {
                let celda = document.createElement("td");
                let texto = document.createTextNode(i);
                celda.appendChild(texto);
                fila.appendChild(celda);
                
            }
            crearTabla.appendChild(fila);
        }
        
        crearTabla.setAttribute("class","tabla");
        solucion.appendChild(crearTabla);
    }
}