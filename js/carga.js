function cargarMSuc() {
    fetch("sucursal.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
                cargarCatalogo();
            });
}

function cargarMUsu() {
    fetch("usuario.html")
            .then(response => response.text())
            .then(data => document.getElementById("contenedorPrincipal").innerHTML = data);
}

function cargarMAli() {
    fetch("alimentos.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
                cargarCatAli();
            });
}

function cargarMBeb(){
    fetch("bebidas.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
        cargarCatBeb();
    });
}


function cargarMCom() {
    console.log("Cargando combos.html");
    fetch("combos.html")
        .then(response => response.text())
        .then(data => {
            console.log("combos.html cargado");
            document.getElementById("contenedorPrincipal").innerHTML = data;
            cargarCatalogoCom();
        })
        .catch(error => {
            console.error("Error al cargar combos.html:", error);
        });
}

function cargarMUsr() {
    fetch("usuario.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedorPrincipal").innerHTML = data;
                cargarCatalogoUsr();
            });
}

function cargarMMen() {
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