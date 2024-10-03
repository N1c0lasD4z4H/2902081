"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante = (estudiante) => {
    var _a;
    console.log(`nombre :${estudiante.nombre}`);
    console.log(`apellido :${estudiante.apellidos}`);
    console.log(`edad :${estudiante.edad || `no definido`}`);
    console.log("Direciones");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach(function (direccion) {
        console.log(`ciudad :${direccion.ciudad}`);
        console.log(`calle :${direccion.calle}`);
        console.log(`pais :${direccion.pais}`);
        console.log("-------------------");
    });
};
exports.default = mostrarEstudiante;
