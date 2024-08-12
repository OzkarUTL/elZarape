
let listaUsr;
let fila = 0;
let infoPer;
let f = 0;

function cargarCatalogoUsr() {
    listaUsr = {
        usuarios: [
            {
                "id": 1,
                "contrasena": "123abc",
                "informacion": {
                    "idInfo": 1,
                    "nombre": "Oscar",
                    "apellidos": "Acosta Díaz",
                    "telefono": "477-2345678",
                    "foto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD5+fn8/Pzm5uY+Pj7b29vf39/19fWoqKjFxcWTk5Pp6ekQEBDk5OTs7OwzMzNYWFiWlpYrKyuwsLBubm7Nzc13d3eBgYFDQ0PV1dVLS0t7e3uMjIyhoaE9PT1gYGC6urocHBwiIiJmZmYLCwsXFxe+vr5RUVFISEguLi5r2l9GAAAIr0lEQVR4nO2d25aiOhCGDSAgiAgiIiqCZ/v9H3DD2M70AZAkVVRw7e9qLmZ15++QpFKnjEZ9oGuaUSTB+uPoMe/4sQ6SwtA0vZff3QOaYYZ79pt9aBoa9eAAmDnuukbeg7XrzKgHKEk6yRvlPcgnKfUgJUjd+wt9FRt3qBp9d9xBX8U49KkHK0LRVd8fjQX1cLnxbxz6Km7DmkYt5tRXEQ/o6PBDAYGMDWc1WkshgYwtLeqhd8N8dQQ2E5jUg+9CuhEWWJ6NAzga04WEQMYWykucSumrmFJLaGd6kFZ4UFqiIbMGn2wMahnNTE8AAhk7KTuLtnsGUXh2bWopDRRHEIGMHRW1w605kEDG5koaN3YAJrC8aaj4nWaAAhnLqOX8xgAVyJh6RwbMQfGPnFrQTwpggYwptp/6EMbMdzZq3YczD1yhp9RmM4U8KZ4EKhlvsCfFE4Um0cKYwnIS1bFsIhSBjEXUwp74or61VyxV2U5T+I30gaeI00YT8/92IVTDDe7LedfaWKjxmTpoAhlzqMX9Adrm/sqJWlyFhiiQMRUWokggrTsxtbySFarCJbW8kguqwgu1PIhARTv0Fwwsm/QJvW2KuwwZW1ELHPHmXPByoxZowzm665lT+4ZjPKP0wYL6RIzkQ6LtHKi3mhAmoNbMOSRWmCALZCwhVojlwPgHtd2GeXV6QHyB8nH8iF8JaO/5M+wDvzzyaTPBLfiIzE82tH7htDkPH4o1rUsx5kl1FmNMa9Q4daUisOxp/W0OtuFdmt60CuMe5pD2K33/ncbsUhQjx502M/r9T/xpDwppvW2aeF5+V3Jix/7735626Aq3xAp36F4Ml1jhBDdswdhlQqzwCpX53MSROgw8RfcIk4dmsI2aO7VA9MgM9WFRbjXICqk3mtIyRVaoQPYe8oFILa8E1zINqOWVXFEVqpDP/v4ZQyNMx74KHyluNgZ1ePSBgZVAW5rdatQG2XhR0oQ6TeETvART6nvFkxnWXhMo02IJyzalt0mfpDhXqLsiqfoVONn61HkmX0GZRJWmcDTaISjcUYv6BmCl+hPVKtbhV6JKq/AP0F7FI7WgX6TACpXaZh7ARjCooxV1+JCJJ2M1Srp+4MAtRXJXfj2AdYiK1B3+wofyf6+U/EYrTJg8vo3CfeliCNNmTp2d3wrAbqPoLvOXQlqhCj7gVjK5AoyDQq0imohk1uJcDQdpO/pVPJtvfB1Gn/ZYVOJazV20xmlriLkXbzUebnqXsDW/1A3C5ff0e3WpQfaF+KpvR+X5F9RJvPL6pu7Xup9ffgzHiHAerUfEYls3BGPHkyC939XFYOzHnTMhm8bic7ldantV6nHSNSPM28Z1e6gdfv6AgMYK0Hd/y0ePk9pN3na65WYundq7hD75awIudgSniPm1au3YEGHw09cXqlXacFeKvtq4p97vG84Pn0WTsaXNdm3f6mU3a7rs/ugfNu7ZIC9+WZ8tpZ6GOz78Pj28w95tiZ798qIf+lyMelRz3LXGa6eFuwzu6/18sVjM9+t7sHSLtgh2XVzZi3pbjHp9vHD1Kk/St1LnWlyd1HrlpZjWL9/6DQ2BJo9TDmVWxk21t/14+nW34deXljPIH1mfNFvubg+zqLVlXhxX8m5Ae9V2h07Q/YyvUkvGsskF1gtjDzsBRX8dCpUaQofcHFzzRu/SxnNRiGq0oy59RDJMiUW3dNllLKLRdrq1LzgjHv3xR6chVMaYw6vRdzrnAnygOTsMDv/LcRvxBB+m0YrDl7xGSujjrMQ75FnXgRhhzldchFSxxx3k9fZ59noi/Szfc2fDo4SIxVJmvHXWZq5Os7VYdipCso1Mu6R7cp36tm1rmq6PdF3Tyn/7xjWRCMbBN1eayRYdXO75MnGzqIgyN1nma9kyjRw4M1NrNrepcGF3G8AsBChg44yg749AUeuJFgWv27MMgPdh6PdHoIAzbdRbhA/AsvvU/EYrgL5TC7v5ozgLmJgNfuNAcUBaDvbQZEcckPY86lkzXwHoKSH1rCg+AA+X4jwhA4d0hpGp8iqsWEsGFhuCMCohGUkw8LsGyjKWs93Un0LJGj4Nv2mgPHOZq7BJPfpOyOw1+J28IJBp8EI99o6IC8R9YAUO8TjGMD5Sic90EDtphfBuesXuxQbFpS5zswvYTa7gEHzIxMfv3AnFTaxQKlLVxfabo1icBqMCHQuhYJs+nGVYLkSRKxTS86k4CD3K2kMzcjiE2ppH2L1XITmLbDWqu6C+I+CQ8vE7BEOy5T8RzeGc9xU3/msw+mNcsAg87YX5QiwG3JvpAByl3+F2myK2mcOBO3EX7TVxLLhfKZ/iPwkAS87bFdsY1mFRX2Lbykz9gMV3uIsEFE5PqIc7acEaihfqyYVX4TAiFl/hNdv+V6gevAqHErL4B6/pjduHHANev/f7K4RuEogPb+rQ++80768QoeUqLtxdXsD65/UFd5++9/divL8namQN65KfC4Rm3t6r38djxnCIPYs8pMCFWE1pD2/9QiH6ZrC6tTI/Ea2d0YYS5w6EM0yHYpxKJJgOw7CRSYPu1OmDGrlOIIA9urGQ7f2tYBH3d+RLuu0d3pNc8ng7gHJnfdK1Z0v/fAD1N3NULV/bgJXkm2pe+FeA3SL9UL0UsHMI+r6Annbr4dQfpxS8IZZSuYpCuYivCVXROEfrnzhLNvTr8bxJMB8NNLMTrQHgnTLsfrvGNaHT6CXXPl4mteOQJlFjEQr18hNBmzqrvifSWznTXl8Q0nWztc8oLIeVqZO8CzFzbx/Yc+l93NpaRvcgMlve5lgqvfltmSnwnuzsmrnbANoamAdbN7sqIO8TzXKiLAlg9thFkGSRYyn4MpltxU60DcbiO9BhHGwjJ7boXyZpwfaNmWU6WXJad1d6WJ+SzDGtmeErLe4bulZip0UW7pLVMg9uVcv5g3dmZ+9QNZ6/BflylezCrEjt6r+iHQb/ATdAuFVo1m4SAAAAAElFTkSuQmCC"
                }
            },
            {
                "id": 2,
                "contrasena": "abc123",
                "informacion": {
                    "idInfo": 2,
                    "nombre": "Martin",
                    "apellidos": "Acosta Díaz",
                    "telefono": "477-2345678",
                    "foto": "data:image/png;base64,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"
                }
            },
            {
                "id": 3,
                "contrasena": "xddmx",
                "informacion": {
                    "idInfo": 3,
                    "nombre": "Manuel",
                    "apellidos": "Acosta Díaz",
                    "telefono": "477-2345678",
                    "foto": "data:image/png;base64,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"
                }
            }
        ]
    };

    imprimirTablaUsr();
}



function imprimirTablaUsr() {
    document.getElementById("tabCatUsr").innerHTML = "";
    let contenido = "";
    let renglon = "";
    for (let f = 0; f < listaUsr.usuarios.length; f++) {
        renglon = "";
        console.log(listaUsr.usuarios[f].informacion.idInfo);
        renglon += "<tr>";
        renglon += "<td>" + listaUsr.usuarios[f].id + "</td>";
        renglon += "<td>" + listaUsr.usuarios[f].contrasena + "</td>";
        renglon += "<td>" + listaUsr.usuarios[f].informacion.idInfo + "</td>";
        renglon += "<td>" + listaUsr.usuarios[f].informacion.nombre + "</td>";
        renglon += "<td>" + listaUsr.usuarios[f].informacion.apellidos + "</td>";
        renglon += "<td>" + listaUsr.usuarios[f].informacion.telefono + "</td>";
        renglon += "<td> <img src= " + listaUsr.usuarios[j].informacion.foto + " alt='alt' height='100' width='100'></td>";

        renglon += "<td><button type='button' onClick='modificarUsr(" + f + ");' class='btn btn-lg'>\n\
        <f class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></f></button></td>";
        renglon += "<td><button type='button' onClick='eliminarUsr(" + f + ");' class='btn btn-lg'>\n\
        <f class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></f></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }

    document.getElementById("tabCatUsr").innerHTML = contenido;
}

function modificarUsr(f) {

    document.getElementById("txtIdUsr").value = listaUsr.usuarios[f].id;
    document.getElementById("txtConUsr").value = listaUsr.usuarios[f].contrasena;
    document.getElementById("txtInfUsr").value = listaUsr.usuarios[f].informacion.idInfo;
    document.getElementById("txtNomUsr").value = listaUsr.usuarios[f].informacion.nombre;
    document.getElementById("txtApeUsr").value = listaUsr.usuarios[f].informacion.apellidos;
    document.getElementById("txtTelUsr").value = listaUsr.usuarios[f].informacion.telefono;
    document.getElementById("txtFotoUsr").value = listaUsr.usuarios[j].informacion.foto;

    fila = f;

}

function modUsr(f) {

    let usuario = {
        id: document.getElementById("txtIdUsr").value,
        contrasena: document.getElementById("txtConUsr").value,
        informacion: {
            idInfo: document.getElementById("txtInfUsr").value,
            nombre: document.getElementById("txtNomUsr").value,
            apellidos: document.getElementById("txtApeUsr").value,
            telefono: document.getElementById("txtTelUsr").value,
            foto: document.getElementById("txtFotoUsr").value
        }
    };
//    alert(JSON.stringify(usuario));
    f = fila;

    listaUsr.usuarios[fila] = usuario;


    Swal.fire({
        title: "Modificación correcta",
        text: "La modificación ha sido realizada correctamente",
        icon: "success"
    });

    cancelarUsr();
    imprimirTablaUsr();

}

function cancelarUsr() {

    document.getElementById("txtIdUsr").value = "";
    document.getElementById("txtConUsr").value = "";
    document.getElementById("txtInfUsr").value = "";
    document.getElementById("txtNomUsr").value = "";
    document.getElementById("txtApeUsr").value = "";
    document.getElementById("txtTelUsr").value = "";
    document.getElementById("txtFotoUsr").value = "";
}

function agregarUsr() {
    // Obtiene el último ID de la lista de usuarios
    let ultimoId = listaUsr.usuarios[listaUsr.usuarios.length - 1].id;
    let id = ultimoId + 1; // Incrementa el ID para el nuevo usuario

    // Obtiene los valores de los campos de entrada
    let con = document.getElementById("txtConUsr").value;
    let inf = document.getElementById("txtInfUsr").value;
    let nom = document.getElementById("txtNomUsr").value;
    let ape = document.getElementById("txtApeUsr").value;
    let tel = document.getElementById("txtTelUsr").value;
    let foto = document.getElementById("txtFotoUsr").value;

    // Crea el objeto de información del usuario
    let infoPer = {
        idInfo: inf,
        nombre: nom,
        apellidos: ape,
        telefono: tel,
        foto: foto
    };

    // Crea el objeto del nuevo usuario
    let usuario = {
        id: id,
        contrasena: con,
        informacion: infoPer
    };

    // Añade el nuevo usuario a la lista
    listaUsr.usuarios.push(usuario);

    // Muestra una alerta de éxito
    Swal.fire({
        title: "Inserción correcta",
        text: "El usuario ha sido insertado correctamente",
        icon: "success"
    });

    // Limpia los campos y actualiza la tabla
    cancelarUsr();
    imprimirTablaUsr();
}


function eliminarUsr(f) {

    Swal.fire({
        title: "¿Está seguro de que quiere eliminar este usuario",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            listaUsr.usuarios.splice(f, 1);
            Swal.fire({
                title: "Eliminación correcta",
                text: "El usuario ha sido eliminado correctamente",
                icon: "error"
            });
            imprimirTablaUsr();
        } else if (result.isDenied) {
            Swal.fire("No se ha eliminado", "", "info");
        }
    });
}

function buscarUsr() {
    let buscar = document.getElementById("txtBusqUsr").value;
    let posEncontrado = -1;

    for (let f = 0; f < listaUsr.usuarios.length; f++) {
        let usuario = listaUsr.usuarios[f];
        if (
                usuario.id == buscar ||
                usuario.contrasena == buscar ||
                usuario.informacion.idInfo == buscar ||
                usuario.informacion.nombre == buscar ||
                usuario.informacion.apellidos == buscar ||
                usuario.informacion.telefono == buscar ||
                usuario.informacion.foto == buscar
                ) {
            posEncontrado = f;
            break;
        }
    }

    let textoTabla = "";
    if (posEncontrado == -1) {
        textoTabla = "<tr><td colspan='7'>No se encontraron resultados de búsqueda</td></tr>";
    } else {
        let usuario = listaUsr.usuarios[posEncontrado];
        textoTabla += "<tr>";
        textoTabla += "<td>" + usuario.id + "</td>";
        textoTabla += "<td>" + usuario.contrasena + "</td>";
        textoTabla += "<td>" + usuario.informacion.idInfo + "</td>";
        textoTabla += "<td>" + usuario.informacion.nombre + "</td>";
        textoTabla += "<td>" + usuario.informacion.apellidos + "</td>";
        textoTabla += "<td>" + usuario.informacion.telefono + "</td>";
        textoTabla += "<td> <img src='" + usuario.foto + "' alt='alt' height='100' width='100'></td>";
        textoTabla += "<td><button type='button' onClick='modificarUsr(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-arrows-spin fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "<td><button type='button' onClick='eliminarUsr(" + posEncontrado + ");' class='btn btn-lg'>\n\
        <i class='fa-solid fa-circle-xmark fa-2xl' style='color: #FAAF08'></i></button></td>";
        textoTabla += "</tr>";
    }
    document.getElementById("tabCatUsr").innerHTML = textoTabla;
}

function cargarImgUsr() {
    let inputFile = document.getElementById("ifFotoUsr");
    if (inputFile.files && inputFile.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let foto = e.target.result;
            document.getElementById("fotoUsr").src = foto;
            document.getElementById("txtFotoUsr").value = foto;
        };
        reader.readAsDataURL(inputFile.files[0]);

    }
}

