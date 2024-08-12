let listaSuc;
let iS = 0;
let i = 0;

function cargarCatalogo() {
    listaSuc = {sucursales: [

            {"id": 1, "nombre": "Río Mayo", "direccion": "Río Mayo 7, Col. Vista Hermosa",
                "horario": "07:00 - 20:00", "latitud": 21.07423, "longitud": -101.62586, "estatus": 1,
             "foto": "data:image/png;base64,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"},
            {"id": 2, "nombre": "Las Torres", "direccion": "Blvd. Las Torres 1072, Col. Lomas",
                "horario": "07:00 - 20:00", "latitud": 21.14697, "longitud": -101.65316, "estatus": 1,
            "foto": "data:image/png;base64,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"},
            {"id": 3, "nombre": "Plaza Mayor", "direccion": "Plaza Mayor Loc. 70, Col. Valle del Campestre",
                "horario": "12:00 - 20:00", "latitud": 21.15817, "longitud": -101.69528, "estatus": 1,
            "foto": "data:image/png;base64,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"}
        ]};
    imprimirTablaSuc();
}



function imprimirTablaSuc() {
    let contenido = "";
    let renglon = "";
    for (let i = 0; i < listaSuc.sucursales.length; i++) {
        renglon = "";
        renglon += "<tr>";
        renglon += "<td>" + listaSuc.sucursales[i].id + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].nombre + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].direccion + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].horario + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].latitud + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].longitud + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].estatus + "</td>";
        renglon += "<td> <img src= " + listaSuc.sucursales[i].foto + " alt='alt' height='100' width='100'></td>";
        renglon += "<td><button type='button' onClick='modificarSuc(" + i + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "<td><button type='button' onClick='eliminarSuc(" + i + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        renglon += "</tr>";

        contenido += renglon;
    }

    document.getElementById("tbCatSuc").innerHTML = contenido;
}

function modificarSuc(i) {
    document.getElementById("txtIdSuc").value = listaSuc.sucursales[i].id;
    document.getElementById("txtNomSuc").value = listaSuc.sucursales[i].nombre;
    document.getElementById("txtDirSuc").value = listaSuc.sucursales[i].direccion;
    document.getElementById("txtHorSuc").value = listaSuc.sucursales[i].horario;
    document.getElementById("txtLatSuc").value = listaSuc.sucursales[i].latitud;
    document.getElementById("txtLngSuc").value = listaSuc.sucursales[i].longitud;
    document.getElementById("txtEstSuc").value = listaSuc.sucursales[i].estatus;
    document.getElementById("txtFotoSuc").value = listaSuc.sucursales[i].foto;

    iS = i;
    return iS;
}

function modSuc(iS) {
    listaSuc.sucursales[iS].id = document.getElementById("txtIdSuc").value;
    listaSuc.sucursales[iS].nom = document.getElementById("txtNomSuc").value;
    listaSuc.sucursales[iS].dir = document.getElementById("txtDirSuc").value;
    listaSuc.sucursales[iS].hor = document.getElementById("txtHorSuc").value;
    listaSuc.sucursales[iS].lat = document.getElementById("txtLatSuc").value;
    listaSuc.sucursales[iS].lng = document.getElementById("txtLngSuc").value;
    listaSuc.sucursales[iS].est = document.getElementById("txtEstSuc").value;
    listaSuc.sucursales[iS].foto = document.getElementById("txtFotoSuc").value;

    let sucursal = {"id": listaSuc.sucursales[iS].id, "nombre": listaSuc.sucursales[iS].nom,
        "direccion": listaSuc.sucursales[iS].dir, "horario": listaSuc.sucursales[iS].hor,
        "latitud": listaSuc.sucursales[iS].lat, "longitud": listaSuc.sucursales[iS].lng,
        "estatus": listaSuc.sucursales[iS].est, "foto": listaSuc.sucursales[iS].foto};


    
    listaSuc.sucursales[iS] = sucursal;

    Swal.fire({
        title: "Modificación correcta",
        text: "La sucursal ha sido modificada correctamente",
        icon: "success"
    });

    cancelarSuc();

    imprimirTablaSuc();
}

function cancelarSuc() {
    document.getElementById("txtIdSuc").value = "";
    document.getElementById("txtNomSuc").value = "";
    document.getElementById("txtDirSuc").value = "";
    document.getElementById("txtHorSuc").value = "";
    document.getElementById("txtLatSuc").value = "";
    document.getElementById("txtLngSuc").value = "";
    document.getElementById("txtEstSuc").value = "";
    document.getElementById("txtFotoSuc").value = "";
}

function agregarSuc() {
    let ultimoId = listaSuc.sucursales[listaSuc.sucursales.length - 1].id;
    let id = ultimoId + 1;
    let nom = document.getElementById("txtNomSuc").value;
    let dir = document.getElementById("txtDirSuc").value;
    let hor = document.getElementById("txtHorSuc").value;
    let lat = parseFloat(document.getElementById("txtLatSuc").value); // Asegúrate de que la latitud sea un número
    let lng = parseFloat(document.getElementById("txtLngSuc").value); // Asegúrate de que la longitud sea un número
    let est = parseInt(document.getElementById("txtEstSuc").value, 10); // Asegúrate de que el estatus sea un número
    let foto = document.getElementById("txtFotoSuc").value;
    let sucursal = {
        "id": id,
        "nombre": nom,
        "direccion": dir,
        "horario": hor,
        "latitud": lat,
        "longitud": lng,
        "estatus": est,
        "foto": foto
    };

    listaSuc.sucursales.push(sucursal);

    Swal.fire({
        title: "Inserción correcta",
        text: "La sucursal ha sido insertada correctamente",
        icon: "success"
    });

    cancelarSuc();

    imprimirTablaSuc();
}

function eliminarSuc(i) {

    Swal.fire({
        title: "¿Realmente quieres eliminar esta sucursal?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: No
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            listaSuc.sucursales.splice(i, 1);
            Swal.fire({
                title: "Eliminación correcta",
                text: "La sucursal ha sido eliminada correctamente",
                icon: "success"
            });
            imprimirTablaSuc();

        } else if (result.isDenied) {
            Swal.fire({
                title: "Eliminación incorrecta",
                text: "La sucursal no pudo ser eliminada",
                icon: "error"
            });
        }
    });

}

function buscarSuc() {

    let buscar = document.getElementById("txtBusqSuc").value;


    let posEncontrado = -1;

    for (let i = 0; i < listaSuc.sucursales.length; i++) {
        if (listaSuc.sucursales[i].id == buscar ||
                listaSuc.sucursales[i].nombre == buscar ||
                listaSuc.sucursales[i].direccion == buscar)
        {
            posEncontrado = i;
            break;
        }

    }
    let textoTabla = "";

    if (posEncontrado == -1) {
        textoTabla = "<tr><ts colspan='9'>No se encontraron resultados de búsqueda</td></tr>";
    } else {

        textoTabla = "";
        textoTabla += "<tr>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].id + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].nombre + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].direccion + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].horario + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].latitud + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].longitud + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].estatus + "</td>";
        textoTabla += "<td> <img src= " + listaSuc.sucursales[posEncontrado].foto + " alt='alt' height='100' width='100'></td>";
        textoTabla += "<td><button type='button' onClick='modificarSuc(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "<td><button type='button' onClick='eliminarSuc(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "</tr>";

    }
    document.getElementById("tbCatSuc").innerHTML = textoTabla;
}

function cargarImgSuc() {
    let inputFile = document.getElementById("ifFotoSuc");
    if (inputFile.files && inputFile.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let foto = e.target.result;
            document.getElementById("fotoSuc").src = foto;
            document.getElementById("txtFotoSuc").value = foto;
        };
        reader.readAsDataURL(inputFile.files[0]);

    }
}
