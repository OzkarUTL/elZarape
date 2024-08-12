function cargarMMSuc() {
    fetch("sucursal.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
                cargarCatalogo();
            });
}


function cargarMMMen() {
    fetch("menu.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
                decTablaMen();
            });

}

function cargarMMAli() {
    fetch("menuAlimentos.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorMenu").innerHTML = data;
                imprimirTablaMenAl();
            });

}
function cargarMMBeb() {
    fetch("menuBebidas.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorMenu").innerHTML = data;
                imprimirTablaMenBeb();
            });

}
function cargarMMCom() {
    fetch("menuCombos.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorMenu").innerHTML = data;
                imprimirTablaMenCom();
            });

}
