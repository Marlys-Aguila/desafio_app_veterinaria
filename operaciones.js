const colors = require('colors');
const fs = require('fs');
const citasPath = 'citas.json';

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  const citas = leerCitas();
  citas.push(nuevaCita);
  const citasString = JSON.stringify(citas, null, 2);
  fs.writeFileSync(citasPath, citasString);
};

const leer = () => {
  const citas = leerCitas();
  let contador = 1;
  citas.forEach(cita => {
    let texto = `
    ☑️  Nombre: ${cita['nombre']}
    ☑️  Edad: ${cita['edad']}
    ☑️  Animal: ${cita['animal']}
    ☑️  Color: ${cita['color']}
    ☑️  Enfermedad: ${cita['enfermedad']}
    `;
  
    console.log(`  Animal ${contador}  `.brightCyan.underline.bold);
    console.log(texto.rainbow);
    contador++;
  });
};

// se crea una función para manejar errores en el proceso de lectura y mostrarlo como objeto (no como string)
const leerCitas = () => {
  try {
    const citasString = fs.readFileSync(citasPath, "utf-8");
    return JSON.parse(citasString);
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

module.exports = { registrar, leer };
