
function login(){
    let usr=document.getElementById("txtUsr").value;
    let psw=document.getElementById("txtPsw").value;
    
    if(usr == "admin" && psw == "admin"){
        location.href="https://ozkarutl.github.io/elzarape/html/principal.html";
    }
    else{
        Swal.fire({
            title:"Acceso DENEGADO",
            text:"Usuario o contraseña incorrectas",
            icon:"error"
        });
    document.getElementById("txtUsr").value = "";
    document.getElementById("txtPsw").value = "";
    
    }
}

