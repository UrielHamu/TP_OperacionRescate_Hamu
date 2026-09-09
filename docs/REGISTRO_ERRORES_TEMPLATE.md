# Registro de Errores

Completar una fila por cada error detectado.

| N | Archivo | Problema encontrado | Como lo detectaron | Solucion aplicada |
| 1 | src/ejemplo.js | El token no se verificaba | Prueba manual de ruta protegida | Se uso jwt.verify con manejo de excepcion |
| 2 | app.js | Dice loginn en authRoutes | Leyendo el codigo | Le saqué una n |
| 3 | app.js | Falta el middleware de express para poder interpretar el body escrito en JSON | Al probar POST /api/login/register, el controller necesita acceder a req.body | Le agrego app.use(express.json()) |
| 4 | src/utils/token.js | No se exporta el modulo | Al probar POST /api/login/register, aparece error al intentar llamar a signToken | Decía Module.export en vez de module.exports, lo cambié a como deberia estar|
| 5 | src/routes/authRoutes.js | La ruta para el login es http://localhost:3000/api/login/login | Al probar http://localhost:3000/api/login me tiraba que era una ruta inexistente| Saco el login de authRoutes.js |
| 6 | src/routes/authRoutes.js | Aparece estado 200 cuando dice credenciales invalidas | Al probar http://localhost:3000/api/login tira el error de credenciales inválidas con estado 200 | Lo cambio por el error 401 que es el correcto |
| 7 | src/controller/authController.js | Compara mal la contraseña ingresada con la guardada | Al probar http://localhost:3000/api/login tira el error de credenciales inválidas | Cambio de lugar la respuesta ingresada y la guardada en el hash |

| 8 | src/controller/authController.js | Si tira el error de que ya existe ese mail, aparece que ya fue ingresado pero con el estado 200 | Releyendo el codigo | Modifico a estado 409 |
| 9 | src/routes/userRoutes.js | No trae el usuario porque intenta traer al usuario antes de obtener el id | Al intentar usar http://localhost:3000/api/users/me | Cambio de orden authMiddleware y getProfile |

## Guia de calidad para el informe

No alcanza con escribir "habia un error y lo arreglamos".

En cada caso expliquen:

1. Que ocurria.
2. Por que ocurria.
3. Como se soluciono.
4. Como validaron que quedo funcionando.
