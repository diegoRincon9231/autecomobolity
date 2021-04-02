
# Documentación inicialización proyecto

AUTECO MOBILITY


Esta es una documentación que permite entender la forma de trabajo del proyecto y como inicializar y solucionar posibles errores dentro del mismo.

PASOS MÍNIMOS :

- instalar los paquetes de Node -> *NPM INSTALL*
- si se presentan archivos por auditar o mejorar -> *NPM AUDIT FIX*

AMBIENTES:

Existe un ambiente local de desarrollo en el cual vamos a trabajar inicializando -> *NPM START*
el cual nos abrira un localhost en el puerto 9000, aunque se puede modificar al deseado.
aquí podemos visualizar nuestros archivos y realizar pruebas de los desarrollos en el proyecto.

al verificar funcionalidades y demás en nuestro ambiente local y querer pasar a producción los archivos debemos usar
*NPM RUN BUILD*
El cual nos arrojará el compilado de nuestro código CSS y Javascript minificado para mejorar rendimiento, listo para montar al ambiente productivo.


