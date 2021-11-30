function validar(){

    var vacio = document.getElementById('vacio');
    var Nombre = document.getElementById('Nombre');
    var Apellidos = document.getElementById('Apellidos');
    var Ocupacion = document.getElementById('Ocupacion');
    var Religion = document.getElementById('Religion');
    var Celular = document.getElementById('Celular');

    var campos = new RegExp(/^(([a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var nombre = new RegExp(/^(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var apellidos = new RegExp(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/);
    var celular = new RegExp(/\+55[0-9]{8}/);


    var ct1 = document.getElementById('ct1').value;
    var ct2 = document.getElementById('ct2').value;
    var ct3 = document.getElementById('ct3').value;
    var ct4 = document.getElementById('ct4').value;

    var ct5 = document.getElementById('ct5').value;
    var ct6 = document.getElementById('ct6').value;
    var ct7 = document.getElementById('ct7').value;

    if(ct1 == "" || ct2 == "" || ct3 == "" || ct4 == "" || ct5 == "" || ct6 == "" || ct7 == ""){
        var toast = new bootstrap.Toast(vacio);
        toast.show();
        return false;
    }

    else if(!nombre.test(ct1)){
        var toast = new bootstrap.Toast(Nombre);
        toast.show();
        return false;
    }

    else if(!apellidos.test(ct2) || !apellidos.test(ct3)){
        var toast = new bootstrap.Toast(Apellidos);
        toast.show();
        return false;
    }

    else if(ct4 == ""){
        alert("birth");
        return false;
    }

    else if(!campos.test(ct5)){
        var toast = new bootstrap.Toast(Ocupacion);
        toast.show();
        return false;
    }

    else if(!campos.test(ct6)){
        var toast = new bootstrap.Toast(Religion);
        toast.show();
        return false;
    }

    else if(!celular.test(ct7)){
        var toast = new bootstrap.Toast(Celular);
        toast.show();
        return false;
    }

    
}

function validarDos(){

    var Otro = document.getElementById('Otro');

    var campos = new RegExp(/^(([a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var ct12 = document.getElementById('ct12').value;

    if(!campos.test(ct12)){
        var toast = new bootstrap.Toast(Otro);
        toast.show();
        return false;
    }


}

function validarTres(){

    var selector4 = document.getElementById('selector-4');
    var selected4 = selector4.options[selector4.selectedIndex].text;

    var selector5 = document.getElementById('selector-5');
    var selected5 = selector5.options[selector5.selectedIndex].text;

    var selector6 = document.getElementById('selector-6');
    var selected6 = selector6.options[selector6.selectedIndex].text;

    var selector7 = document.getElementById('selector-7');
    var selected7 = selector7.options[selector7.selectedIndex].text;

    var selector8 = document.getElementById('selector-8');
    var selected8 = selector8.options[selector8.selectedIndex].text;

    var selector9 = document.getElementById('selector-9');
    var selected9 = selector9.options[selector9.selectedIndex].text;

    var selector11 = document.getElementById('selector-11');
    var selected11 = selector11.options[selector11.selectedIndex].text;

    var selector12 = document.getElementById('selector-12');
    var selected12 = selector12.options[selector12.selectedIndex].text;

    var selector13 = document.getElementById('selector-13');
    var selected13 = selector13.options[selector13.selectedIndex].text;

    var selector25 = document.getElementById('selector-25');
    var selected25 = selector25.options[selector25.selectedIndex].text;


    var selector14 = document.getElementById('selector-14');
    var selected14 = selector14.options[selector14.selectedIndex].text;

    var selector15 = document.getElementById('selector-15');
    var selected15 = selector15.options[selector15.selectedIndex].text;

    var selector16 = document.getElementById('selector-16');
    var selected16 = selector16.options[selector16.selectedIndex].text;

    var selector17 = document.getElementById('selector-17');
    var selected17 = selector17.options[selector17.selectedIndex].text;

    var selector18 = document.getElementById('selector-18');
    var selected18 = selector18.options[selector18.selectedIndex].text;

    var selector19 = document.getElementById('selector-19');
    var selected19 = selector19.options[selector19.selectedIndex].text;

    var selector21 = document.getElementById('selector-21');
    var selected21 = selector21.options[selector21.selectedIndex].text;

    var selector22 = document.getElementById('selector-22');
    var selected22 = selector22.options[selector22.selectedIndex].text;

    var selector23 = document.getElementById('selector-23');
    var selected23 = selector23.options[selector23.selectedIndex].text;

    var selector24 = document.getElementById('selector-24');
    var selected24 = selector24.options[selector24.selectedIndex].text;

    var invalido = document.getElementById('invalido');

    var campos = new RegExp(/^(([a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var ct13 = document.getElementById('ct13').value;

    if(!campos.test(ct13)){
        alert(selected4);
        return false;
    }
    else if(selected4 == "Ninguno" && (selected14 == "Finado" || selected14 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected5 == "Ninguno" && (selected15 == "Finado" || selected15 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected6 == "Ninguno" && (selected16 == "Finado" || selected16 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected7 == "Ninguno" && (selected17 == "Finado" || selected17 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected8 == "Ninguno" && (selected18 == "Finado" || selected18 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected9 == "Ninguno" && (selected19 == "Finado" || selected19 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected11 == "Ninguno" && (selected21 == "Finado" || selected21 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected12 == "Ninguno" && (selected22 == "Finado" || selected22 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected13 == "Ninguno" && (selected23 == "Finado" || selected23 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if(selected25 == "Ninguno" && (selected24 == "Finado" || selected24 == "Vivo")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }




    else if((selected4 == "Familiares de segundo grado" || selected4 == "Familiares de tercer grado" || selected4 == "Familiares de primer grado") && (selected14 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected5 == "Familiares de segundo grado" || selected5 == "Familiares de tercer grado" || selected5 == "Familiares de primer grado") && (selected15 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected6 == "Familiares de segundo grado" || selected6 == "Familiares de tercer grado" || selected6 == "Familiares de primer grado") && (selected16 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected7 == "Familiares de segundo grado" || selected7 == "Familiares de tercer grado" || selected7 == "Familiares de primer grado") && (selected17 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected8 == "Familiares de segundo grado" || selected8 == "Familiares de tercer grado" || selected8 == "Familiares de primer grado") && (selected18 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected9 == "Familiares de segundo grado" || selected9 == "Familiares de tercer grado" || selected9 == "Familiares de primer grado") && (selected19 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected11 == "Familiares de segundo grado" || selected11 == "Familiares de tercer grado" || selected11 == "Familiares de primer grado") && (selected21 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected12 == "Familiares de segundo grado" || selected12 == "Familiares de tercer grado" || selected12 == "Familiares de primer grado") && (selected22 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected13 == "Familiares de segundo grado" || selected13 == "Familiares de tercer grado" || selected13 == "Familiares de primer grado") && (selected23 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }
    else if((selected25 == "Familiares de segundo grado" || selected25 == "Familiares de tercer grado" || selected25 == "Familiares de primer grado") && (selected24 == "-")){
        var toast = new bootstrap.Toast(invalido);
        toast.show();
        return false;
    }


}