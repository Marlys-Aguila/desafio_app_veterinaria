const colors = require('colors');
const { registrar, leer } = require("./operaciones");

const operacion = process.argv[2];

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = process.argv.slice(3);
    registrar(nombre, edad, animal, color, enfermedad);
    console.log(`Se ha registrado a ${nombre} con éxito!`.brightYellow);
} else if (operacion === "leer") {
    leer();
} else {
    console.error(
        `${'Operación no válida. Las opciones son '.red}${'"registrar"'.brightBlue}${' o '.red}${'"leer"'.brightBlue}`
    );
}

