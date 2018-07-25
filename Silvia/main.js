let razon= document.getElementById("inputAddress");
let rfc= document.getElementById("inputAddress2");
let ciudad= document.getElementById("inputState");
let calle= document.getElementById("inputZip");
let cp= document.getElementById("inputZip2");

let datos = {
  razon: "",
  rfc: "",
  ciudad: "",
  calle:"",
  cp: 0,
}

console.log(datos);

boton.addEventListener("click", ()=>{
  event.preventDefault()

  datos.razon = razon.value;
  datos.rfc = rfc.value;
  datos.ciudad = ciudad.value;
  datos.calle= calle.value;
  datos.cp= cp.value;
  console.log(datos);
})

function myFunction(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Seleccionar uno o más archivos.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
    else {
        if (x.value == "") {
            txt += "Seleccionar uno o más archivos.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("demo").innerHTML = txt;
}