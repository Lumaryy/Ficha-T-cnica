function enviar() {
    let nombre, linea, veranterior, veractual, modulo, descprincipal, objetivo, descrip, hardware, software, otros, hardware1, software1, otros1, generales, adicionales, clienproduc, actdoc, fechaprob, fechavalid, actdoc1, fechaprob1, fechavalid1, firma, fecha, firma2, fecha2, firma3, fecha3

    nombre=document.getElementById("nombre").value
    document.getElementById("respuesta").innerHTML="<h2>Nombre:"+nombre+"<h2>"

    linea=document.getElementById("linea").value
    document.getElementById("respuesta2").innerHTML="<h2>Línea de producción:"+linea+"<h2>"

    veranterior=document.getElementById("veranterior").value
    document.getElementById("respuesta3").innerHTML="<h2>Versión anterior:"+veranterior+"<h2>"

    veractual=document.getElementById("veractual").value
    document.getElementById("respuesta4").innerHTML="<h2>Versión actual:"+veractual+"<h2>"

    modulo=document.getElementById("modulo").value
    document.getElementById("respuesta5").innerHTML="<h2>Módulo:"+modulo+"<h2>"

    descprincipal=document.getElementById("descprincipal").value
    document.getElementById("respuesta6").innerHTML="<h2>Descripción general:"+descprincipal+"<h2>"

    objetivo=document.getElementById("objetivo").value
    document.getElementById("respuesta7").innerHTML="<h2>Objetivo:"+objetivo+"<h2>"

    descrip=document.getElementById("descrip").value
    document.getElementById("respuesta8").innerHTML="<h2>Descripción:"+descrip+"<h2>"

    hardware=document.getElementById("hardware").value
    document.getElementById("respuesta9").innerHTML="<h2>Hardware:"+hardware+"<h2>"

    software=document.getElementById("software").value
    document.getElementById("respuesta10").innerHTML="<h2>Software:"+software+"<h2>"

    otros=document.getElementById("otros").value
    document.getElementById("respuesta11").innerHTML="<h2>Otros:"+otros+"<h2>"

    hardware1=document.getElementById("hardware1").value
    document.getElementById("respuesta12").innerHTML="<h2>hardware:"+hardware1+"<h2>"

    software1=document.getElementById("software1").value
    document.getElementById("respuesta13").innerHTML="<h2>Software:"+software1+"<h2>"

    otros1=document.getElementById("otros1").value
    document.getElementById("respuesta14").innerHTML="<h2>otros:"+otros1+"<h2>"

    generales=document.getElementById("generales").value
    document.getElementById("respuesta15").innerHTML="<h2>generales:"+generales+"<h2>"

    adicionales=document.getElementById("adicionales").value
    document.getElementById("respuesta16").innerHTML="<h2>adicionales:"+adicionales+"<h2>"

    clienproduc=document.getElementById("clienproduc").value
    document.getElementById("respuesta17").innerHTML="<h2>clientes del producto:"+clienproduc+"<h2>"

    actdoc=document.getElementById("actdoc").value
    document.getElementById("respuesta18").innerHTML="<h2>actualización documento:"+actdoc+"<h2>"

    fechaprob=document.getElementById("fechaprob").value
    document.getElementById("respuesta19").innerHTML="<h2>fecha de aprobación:"+fechaprob+"<h2>"

    fechavalid=document.getElementById("fechavalid").value
    document.getElementById("respuesta20").innerHTML="<h2>fecha de validación:"+fechavalid+"<h2>"

    actdoc1=document.getElementById("actdoc1").value
    document.getElementById("respuesta21").innerHTML="<h2>actualización documento:"+actdoc1+"<h2>"

    fechaprob1=document.getElementById("fechaprob1").value
    document.getElementById("respuesta22").innerHTML="<h2>fecha de aprobación:"+fechaprob1+"<h2>"

    fechavalid1=document.getElementById("fechavalid1").value
    document.getElementById("respuesta23").innerHTML="<h2>fecha de validación:"+fechavalid1+"<h2>"

    firma=document.getElementById("firma").value
    document.getElementById("respuesta24").innerHTML="<h2>firma:"+firma+"<h2>"

    fecha=document.getElementById("fecha").value
    document.getElementById("respuesta25").innerHTML="<h2>fecha:"+fecha+"<h2>"

    firma2=document.getElementById("firma2").value
    document.getElementById("respuesta26").innerHTML="<h2>firma:"+firma2+"<h2>"

    fecha2=document.getElementById("fecha2").value
    document.getElementById("respuesta27").innerHTML="<h2>fecha:"+fecha2+"<h2>"

    firma3=document.getElementById("firma3").value
    document.getElementById("respuesta28").innerHTML="<h2>firma:"+firma3+"<h2>"

    fecha3=document.getElementById("fecha3").value
    document.getElementById("respuesta29").innerHTML="<h2>fecha:"+fecha3+"<h2>"
}