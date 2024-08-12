let listaCom;
let filaCombo = 0;
let infoBeb;
let infoAli;
let v = 0;

function cargarCatalogoCom() {
    console.log("Cargando catálogo de combos");
    listaCom = {
        combos: [
            {
                "id": 1,
                "nombre": "La Guadalupana",
                "descripcion": "Tamal de salsa verde con queso y un café de olla de 300ml",
                "precio": "$60.00",
                "bebida": {
                    "idBeb": 2,
                    "cantidadBeb": "1",
                    "precioBeb": "$40.00"
                },
                "alimento": {
                    "idAli": 1,
                    "cantidadAli": "1",
                    "precioAli": "$30.99"
                }
            },
            {
                "id": 2,
                "nombre": "Taquitos",
                "descripcion": "3 Tacos al vapor y una Coca-Cola",
                "precio": "$75.00",
                "bebida": {
                    "idBeb": 1,
                    "cantidadBeb": "1",
                    "precioBeb": "$20.50"
                },
                "alimento": {
                    "idAli": 2,
                    "cantidadAli": "1",
                    "precioAli": "$20.50"
                }
            },
            {
                "id": 3,
                "nombre": "Desayuno mexicano",
                "descripcion": "Huevos a la mexicana y un café de olla de 300ml",
                "precio": "$80.00",
                "bebida": {
                    "idBeb": 2,
                    "cantidadBeb": "1",
                    "precioBeb": "$40.00"
                },
                "alimento": {
                    "idAli": 3,
                    "cantidadAli": "1",
                    "precioAli": "$50.99"
                }
            }
        ]
    };

    imprimirTablaCom();
}

function imprimirTablaCom() {
    console.log("Imprimiendo tabla de combos");
    document.getElementById("tabCatCom").innerHTML = "";
    let contenido = "";
    let renglon = "";
    for (let v = 0; v < listaCom.combos.length; v++) {
        renglon = "";
        renglon += "<tr>";
        renglon += "<td>" + listaCom.combos[v].id + "</td>";
        renglon += "<td>" + listaCom.combos[v].nombre + "</td>";
        renglon += "<td>" + listaCom.combos[v].descripcion + "</td>";
        renglon += "<td>" + listaCom.combos[v].precio + "</td>";
        renglon += "<td>" + listaCom.combos[v].bebida.idBeb + "</td>";
        renglon += "<td>" + listaCom.combos[v].bebida.cantidadBeb + "</td>";
        renglon += "<td>" + listaCom.combos[v].bebida.precioBeb + "</td>";
        renglon += "<td>" + listaCom.combos[v].alimento.idAli + "</td>";
        renglon += "<td>" + listaCom.combos[v].alimento.cantidadAli + "</td>";
        renglon += "<td>" + listaCom.combos[v].alimento.precioAli + "</td>";
        renglon += "<td><button type='button' onClick='modificarCom(" + v + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "<td><button type='button' onClick='eliminarCom(" + v + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }

    document.getElementById("tabCatCom").innerHTML = contenido;
}

function modificarCom(v) {
    document.getElementById("txtIdCom").value = listaCom.combos[v].id;
    document.getElementById("txtNomCom").value = listaCom.combos[v].nombre;
    document.getElementById("txtDesCom").value = listaCom.combos[v].descripcion;
    document.getElementById("txtPreCom").value = listaCom.combos[v].precio;
    document.getElementById("txtIdBebCom").value = listaCom.combos[v].bebida.idBeb;
    document.getElementById("txtCanBebCom").value = listaCom.combos[v].bebida.cantidadBeb;
    document.getElementById("txtPreBebCom").value = listaCom.combos[v].bebida.precioBeb;
    document.getElementById("txtIdAliCom").value = listaCom.combos[v].alimento.idAli;
    document.getElementById("txtCanAliCom").value = listaCom.combos[v].alimento.cantidadAli;
    document.getElementById("txtPreAliCom").value = listaCom.combos[v].alimento.precioAli;

    filaCombo = v;
}

function modCom(v) {
    let combo = {
        id: document.getElementById("txtIdCom").value,
        nombre: document.getElementById("txtNomCom").value,
        descripcion: document.getElementById("txtDesCom").value,
        precio: document.getElementById("txtPreCom").value,
        bebida: {
            idBeb: document.getElementById("txtIdBebCom").value,
            cantidadBeb: document.getElementById("txtCanBebCom").value,
            precioBeb: document.getElementById("txtPreBebCom").value
        },
        alimento: {
            idAli: document.getElementById("txtIdAliCom").value,
            cantidadAli: document.getElementById("txtCanAliCom").value,
            precioAli: document.getElementById("txtPreAliCom").value
        }
    };
    
    v = filaCombo;

    listaCom.combos[filaCombo] = combo;

    Swal.fire({
        title: "Modificación correcta",
        text: "La modificación ha sido realizada correctamente",
        icon: "success"
    });

    cancelarCom();
    imprimirTablaCom();
}

function cancelarCom() {
    document.getElementById("txtIdCom").value = "";
    document.getElementById("txtNomCom").value = "";
    document.getElementById("txtDesCom").value = "";
    document.getElementById("txtPreCom").value = "";
    document.getElementById("txtIdBebCom").value = "";
    document.getElementById("txtCanBebCom").value = "";
    document.getElementById("txtPreBebCom").value = "";
    document.getElementById("txtIdAliCom").value = "";
    document.getElementById("txtCanAliCom").value = "";
    document.getElementById("txtPreAliCom").value = "";
}

function agregarCom() {
    
    let ultimoId = listaCom.combos[listaCom.combos.length - 1].id;
    let id = ultimoId + 1;
    let nom = document.getElementById("txtNomCom").value;
    let des = document.getElementById("txtDesCom").value;
    let pre = document.getElementById("txtPreCom").value;
    let idBebida = document.getElementById("txtIdBebCom").value;
    let canBeb = document.getElementById("txtCanBebCom").value;
    let preBeb = document.getElementById("txtPreBebCom").value;
    let idAlimento = document.getElementById("txtIdAliCom").value;
    let canAli = document.getElementById("txtCanAliCom").value;
    let preAli = document.getElementById("txtPreAliCom").value;
    

let infoBeb = {
    beb: [{"idBeb": idBebida, "cantidadBeb": canBeb,"precioBeb": preBeb}
    ]};

let infoAli = {
    ali: [{"idAli": idAlimento, "cantidadAli": canAli,"precioAli": preAli}
    ]};

    let combo = {
        "id": id,
        "nombre": nom,
        "descripcion": des,
        "precio": pre,
        "bebida": infoBeb.beb[v],
        "alimento": infoAli.ali[v]};

    listaCom.combos.push(combo);

    Swal.fire({
        title: "Inserción correcta",
        text: "El combo ha sido insertado correctamente",
        icon: "success"
    });

    cancelarCom();
    imprimirTablaCom();
}

function eliminarCom(v) {
    Swal.fire({
        title: "¿Está seguro de que quiere eliminar este combo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            listaCom.combos.splice(v, 1);
            Swal.fire({
                title: "Eliminación correcta",
                text: "El combo ha sido eliminado correctamente",
                icon: "error"
            });
            imprimirTablaCom();
        } else if (result.isDenied) {
            Swal.fire("No se ha eliminado", "", "info");
        }
    });
}

function buscarCom() {
    let buscar = document.getElementById("txtBusqCom").value;
    let posEncontrado = -1;

    for (let v = 0; v < listaCom.combos.length; v++) {
        let combo = listaCom.combos[v];
        if (
            combo.id == buscar ||
            combo.nombre == buscar ||
            combo.descripcion == buscar ||
            combo.precio == buscar ||
            combo.bebida.idBeb == buscar ||
            combo.bebida.cantidadBeb == buscar ||
            combo.bebida.precioBeb == buscar ||
            combo.alimento.idAli == buscar ||
            combo.alimento.cantidadAli == buscar ||
            combo.alimento.precioAli == buscar
        ) {
            posEncontrado = v;
            break;
        }
    }

    if (posEncontrado == -1) {
        Swal.fire({
            title: "Combo no encontrado",
            text: "No se encontró el combo con los datos proporcionados",
            icon: "warning"
        });
    } else {
        let combo = listaCom.combos[posEncontrado];
        let textoTabla = "<tr>";
        textoTabla += "<td>" + combo.id + "</td>";
        textoTabla += "<td>" + combo.nombre + "</td>";
        textoTabla += "<td>" + combo.descripcion + "</td>";
        textoTabla += "<td>" + combo.precio + "</td>";
        textoTabla += "<td>" + combo.bebida.idBeb + "</td>";
        textoTabla += "<td>" + combo.bebida.cantidadBeb + "</td>";
        textoTabla += "<td>" + combo.bebida.precioBeb + "</td>";
        textoTabla += "<td>" + combo.alimento.idAli + "</td>";
        textoTabla += "<td>" + combo.alimento.cantidadAli + "</td>";
        textoTabla += "<td>" + combo.alimento.precioAli + "</td>";
        textoTabla += "<td><button type='button' onClick='modificarCom(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "<td><button type='button' onClick='eliminarCom(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "</tr>";

        document.getElementById("tabCatCom").innerHTML = textoTabla;
    }
}
