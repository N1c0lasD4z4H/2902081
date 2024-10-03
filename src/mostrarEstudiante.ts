import { Address,Estudiante } from "./tipos";
 const mostrarEstudiante =(estudiante :Estudiante)=>{
    console.log(`nombre :${estudiante .nombre}`);
    console.log(`apellido :${estudiante .apellidos}`);
    console.log(`edad :${estudiante .edad || `no definido`}`);
    console.log("Direciones")
    estudiante.addresses?.forEach(function(direccion:Address) {
    console.log(`ciudad :${direccion.ciudad}`);
    console.log(`calle :${direccion.calle}`);
    console.log(`pais :${direccion.pais}`);
    console.log("-------------------")

})  

}

export default mostrarEstudiante;