# Registro de Errores

Completar una fila por cada error detectado.

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada |
| 1 | src/ejemplo.js | El token no se verificaba | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |
| 2 | app.js | Dice loginn en authRoutes | Leyendo el codigo | Le saqué una n |
| 3 | app.js | Falta el middleware de express para poder interpretar el body escrito en JSON | Al probar POST /api/login/register, el controller necesita acceder a req.body | Le agrego app.use(express.json()) |
| 4 | src/utils/token.js | No se exporta el modulo | Al probar POST /api/login/register, aparece error al intentar llamar a signToken | Decía Module.export en vez de module.exports, lo cambié a como deberia estar|
| 5 | src/routes/authRoutes.js | La ruta para el login es http://localhost:3000/api/login/login | Al probar http://localhost:3000/api/login me tiraba que era una ruta inexistente| Saco el login de authRoutes.js |
| 6 | src/controller/authController.js | Compara mal la contraseña ingresada con la guardada | Al probar http://localhost:3000/api/login tira el error de credenciales inválidas | Se uso jwt.verify con manejo de excepcion |
| 7 | app.js | Falta el middleware para poder interpretar json | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |
| 8 | app.js | Falta el middleware para poder interpretar json | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |
| 9 | app.js | Falta el middleware para poder interpretar json | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |

## Guia de calidad para el informe

No alcanza con escribir "habia un error y lo arreglamos".

En cada caso expliquen:

1. Que ocurria.
2. Por que ocurria.
3. Como se soluciono.
4. Como validaron que quedo funcionando.
