let listBeb;
let g = 0;
let w = 0;

function cargarCatBeb() {
    listBeb = {bebidas: [

            {"id": 1, "nombre": "Coca-Cola", "descripcion": "Taparosca 600ml",
                "categoria": "Gaseosas", "precio": "$35", "estatus": 1,
                "foto": "data:image/jpeg;base64,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"},
            {"id": 2, "nombre": "Café de Olla ", "descripcion": "Jarrito 300ml",
                "categoria": "Calientes", "precio": "$40", "estatus": 1,
                "foto": "data:image/jpeg;base64,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"},
            {"id": 3, "nombre": "Jugo de Naranja", "descripcion": "Natural 255ml",
                "categoria": "Jugos", "precio": "$25", "estatus": 1,
                "foto": "data:image/jpeg;base64,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"}
        ]};
    imprimirTablaBeb();
}



function imprimirTablaBeb() {
    let contenido = "";
    let renglon = "";
    for (let g = 0; g < listBeb.bebidas.length; g++) {
        renglon = "";
        renglon += "<tr>";
        renglon += "<td>" + listBeb.bebidas[g].id + "</td>";
        renglon += "<td>" + listBeb.bebidas[g].nombre + "</td>";
        renglon += "<td>" + listBeb.bebidas[g].descripcion + "</td>";
        renglon += "<td>" + listBeb.bebidas[g].categoria + "</td>";
        renglon += "<td>" + listBeb.bebidas[g].precio + "</td>";
        renglon += "<td>" + listBeb.bebidas[g].estatus + "</td>";
        renglon += "<td> <img src= " + listBeb.bebidas[g].foto + " alt='alt' height='100' width='100'></td>";

        renglon += "<td><button type='button' onClick='modificarBeb(" + g + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "<td><button type='button' onClick='eliminarBeb(" + g + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "</tr>";

        contenido += renglon;
    }

    document.getElementById("tbCatBeb").innerHTML = contenido;
}

function modificarBeb(g){
    document.getElementById("txtIdBeb").value = listBeb.bebidas[g].id;
    document.getElementById("txtNomBeb").value = listBeb.bebidas[g].nombre;
    document.getElementById("txtDesBeb").value = listBeb.bebidas[g].descripcion;
    document.getElementById("txtCatBeb").value = listBeb.bebidas[g].categoria;
    document.getElementById("txtPreBeb").value = listBeb.bebidas[g].precio;
    document.getElementById("txtEstBeb").value = listBeb.bebidas[g].estatus;
    document.getElementById("txtFotoBeb").value = listBeb.bebidas[g].foto;
    
    w = g;
    return w;
}

function modBeb(w) {
    
        
        
    listBeb.bebidas[w].id = document.getElementById("txtIdBeb").value;
    listBeb.bebidas[w].nombre = document.getElementById("txtNomBeb").value;
    listBeb.bebidas[w].descripcion = document.getElementById("txtDesBeb").value;
    listBeb.bebidas[w].categoria = document.getElementById("txtCatBeb").value;
    listBeb.bebidas[w].precio = document.getElementById("txtPreBeb").value;
    listBeb.bebidas[w].estatus = document.getElementById("txtEstBeb").value;
    listBeb.bebidas[w].foto = document.getElementById("txtFotoBeb").value;
    
    let bebida = {"id": listBeb.bebidas[w].id, "nombre": listBeb.bebidas[w].nombre,
        "descripcion": listBeb.bebidas[w].descripcion, "categoria": listBeb.bebidas[w].categoria,
        "precio": listBeb.bebidas[w].precio, "estatus": listBeb.bebidas[w].estatus,
        "foto": listBeb.bebidas[w].foto};

    listBeb.bebidas[w] = bebida;

    Swal.fire({
        title: "Modificación correcta",
        text: "La bebida ha sido modificada correctamente",
        icon: "success"
    });

    cancelarBeb();

    imprimirTablaBeb();
}

function cancelarBeb() {
    document.getElementById("txtIdBeb").value = "";
    document.getElementById("txtNomBeb").value = "";
    document.getElementById("txtDesBeb").value = "";
    document.getElementById("txtCatBeb").value = "";
    document.getElementById("txtPreBeb").value = "";
    document.getElementById("txtEstBeb").value = "";
    document.getElementById("txtFotoBeb").value = "";
}

function agregarBeb() {
    let ultimoId = listBeb.bebidas[listBeb.bebidas.length - 1].id;
    let id = ultimoId + 1;
    let nom = document.getElementById("txtNomBeb").value;
    let descripcion = document.getElementById("txtDesBeb").value;
    let categoria = document.getElementById("txtCatBeb").value;
    let precio = document.getElementById("txtPreBeb").value;
    let estatus = document.getElementById("txtEstBeb").value;
    let foto = document.getElementById("txtFotoBeb").value;


    let bebida = {"id": id, "nombre": nom, "descripcion": descripcion,
        "categoria": categoria, "precio": precio, "estatus": estatus, "foto": foto};

    listBeb.bebidas.push(bebida);

    Swal.fire({
        title: "Insercion correcta",
        text: "La bebida ha sido insertada correctamente",
        icon: "success"
    });

    cancelarBeb();

    imprimirTablaBeb();
}

function eliminarBeb(g) {

    Swal.fire({
        title: "¿Realmente quieres eliminar este bebida?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            listBeb.bebidas.splice(g, 1);
            Swal.fire({
                title: "Eliminación correcta",
                text: "La bebida ha sido eliminada correctamente",
                icon: "success"
            });
            imprimirTablaBeb();

        } else if (result.isDenied) {
            Swal.fire({
                title: "Eliminación incorrecta",
                text: "El bebida no pudo ser eliminado",
                icon: "error"
            });
        }
    });

}

function buscarBeb() {

    let buscar = document.getElementById("txtBusqBeb").value;


    let posEncontrado = -1;

    for (let g = 0; g < listBeb.bebidas.length; g++) {
        if (listBeb.bebidas[g].id == buscar ||
                listBeb.bebidas[g].nombre == buscar ||
                listBeb.bebidas[g].descripcion == buscar ||
                listBeb.bebidas[g].categoria == buscar ||
                listBeb.bebidas[g].precio == buscar ||
                listBeb.bebidas[g].estatus == buscar ||
                listBeb.bebidas[g].foto == buscar)
        {
            posEncontrado = g;
            break;
        }

    }
    let textoTabla = "";

    if (posEncontrado == -1) {
        textoTabla = "<tr><ts colspan='9'>No se encontraron resultados de búsqueda</td></tr>";
    } else {

        textoTabla = "";
        textoTabla += "<tr>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].id + "</td>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].nombre + "</td>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].descripcion + "</td>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].categoria + "</td>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].precio + "</td>";
        textoTabla += "<td>" + listBeb.bebidas[posEncontrado].estatus + "</td>";
        textoTabla += "<td> <img src= " + listBeb.bebidas[posEncontrado].foto + " alt='alt' height='100' width='100'></td>";

        textoTabla += "<td><button type='button' onClick='modificarBeb(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "<td><button type='button' onClick='eliminarBeb(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "</tr>";

    }
    document.getElementById("tbCatBeb").innerHTML = textoTabla;
}

function cargarImgBeb() {
    let inputFile = document.getElementById("ifFotoBeb");
    if (inputFile.files && inputFile.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let foto = e.target.result;
            document.getElementById("fotoBeb").src = foto;
            document.getElementById("txtFotoBeb").value = foto;
        };
        reader.readAsDataURL(inputFile.files[0]);

    }
}
