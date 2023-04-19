function validarCampo(){
    if(document.fvalidacion.nombre.value.length==0){
        alert("Campo vacio, indique su nombre")
        document.fvalidacion.nombre.focus()
        return 0;
    }
    if(document.fvalidacion.correo.value.length==0){
        alert("Campo vacio, indique su correo")
        document.fvalidacion.correo.focus()
        return 0;
    }
    if(document.fvalidacion.introducir_mensaje.value.length==0){
        alert("Campo vacio, indique su mensaje")
        document.fvalidacion.introducir_mensaje.focus()
        return 0;
    }
    alert("Datos enviados correctamente");
    document.fvalidacion.submit();

    $(document).ready( function () {
        $('#tabla').DataTable();
        } );
        
}
