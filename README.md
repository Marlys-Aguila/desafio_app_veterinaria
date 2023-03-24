# Desafio App Veterinaria 

Este proyecto desarrolla una pequeña aplicación backend que registra las horas de atención en una veterinaria para el primer módulo del curso `Backend con Node y Express` de la academia `Desafío Latam`.

Además, utiliza el paquete `colors` de Node.js para agregar color y estilo a la salida de la consola. 

### Instalación 

Asegúrese de tener Node.js instalado en su máquina. Luego, clone el repositorio y desde su directorio raíz, ejecute `npm install` para instalar las dependencias necesarias. 

```
$ git clone https://github.com/Marlys-Aguila/desafio_app_veterinaria.git
$ cd desafio_app_veterinaria
$ npm install
``` 

### Uso 

Ejecute el archivo `index.js` desde la terminal escribiendo `node index.js`, seguido de los comandos `leer` o `registrar` según lo que desea hacer:

```
$ node index.js [leer / registrar]
```


* `leer`  - Muestra en consola todos los registros de citas almacenadas. 

```
node index.js leer
```

* `registrar` - Le pedirá que ingrese los datos para registrar una nueva hora de atención en la veterinaria. Deberá ingresar los datos separados por espacios, de la siguiente manera:

```
node index.js registrar nombre_mascota edad_mascota tipo_de_animal color_mascota enfermedad_o_sintoma
```

### Dependencias 

- colors@1.4.0 

### Licencia 

Este proyecto está licenciado bajo la Licencia MIT. 