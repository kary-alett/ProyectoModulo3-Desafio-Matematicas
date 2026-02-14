# 🎮 Math Trainer - Desafío de Matemáticas

Aplicación interactiva de consola desarrollada en JavaScript que permite practicar operaciones matemáticas básicas con sistema de puntos y progresión por niveles.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Descripción

Math Trainer es un juego educativo que desafía tus habilidades matemáticas a través de 4 tipos de operaciones con 3 niveles de dificultad cada una. Ideal para practicar cálculo mental de forma divertida.

## ✨ Características

- ✅ **4 operaciones matemáticas:** Suma, Resta, Multiplicación y División
- ✅ **3 niveles de dificultad** por operación con rangos numéricos progresivos
- ✅ **Sistema de puntos** con recompensas y penalizaciones
- ✅ **Números aleatorios** en cada partida para mayor variedad
- ✅ **Estadísticas en tiempo real:** puntos totales, respuestas correctas y porcentaje de aciertos
- ✅ **División exacta:** garantiza resultados sin decimales
- ✅ **Menú interactivo** con navegación por consola
- ✅ **Progresión automática:** avanza de nivel al completar 3 respuestas correctas

## 🚀 Demo

🔗 [Ver demo en vivo](https://kary-alett.github.io/ProyectoModulo3-Desafio-Matematicas/)

## 📸 Capturas de pantalla

*La aplicación funciona completamente en la consola del navegador*

## 🎯 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Abre la consola del navegador:
   - **Windows/Linux:** Presiona `F12` o `Ctrl + Shift + J`
   - **Mac:** Presiona `Cmd + Option + J`
   - O click derecho → Inspeccionar → pestaña Console
3. Ingresa tu nombre cuando se solicite
4. Sigue las instrucciones del menú interactivo

## 🏆 Sistema de Puntos

### Recompensas por aciertos:
| Nivel | Rango de números | Puntos |
|-------|------------------|--------|
| **Nivel 1** | 0-100 (Suma/Resta)<br>1-10 (Multiplicación/División) | +10 puntos |
| **Nivel 2** | 100-1,000 (Suma/Resta)<br>10-50 (Multiplicación/División) | +20 puntos |
| **Nivel 3** | 1,000-10,000 (Suma/Resta)<br>50-200 (Multiplicación/División) | +30 puntos |

### Penalizaciones por errores:
- **Nivel 1:** Sin penalización
- **Nivel 2:** -5 puntos
- **Nivel 3:** -10 puntos

## 🎲 Mecánicas de juego

- Debes completar **3 respuestas correctas consecutivas** para avanzar de nivel
- Si fallas en nivel 2 o 3, se resetea el contador de respuestas consecutivas
- Puedes reiniciar tus estadísticas en cualquier momento desde el menú
- El juego se puede jugar infinitas veces

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura de la página
- **JavaScript (ES6+)** - Lógica del juego
  - Variables `let` y `const`
  - Funciones y arrow functions
  - Objetos y arrays
  - Ciclos `while` y `for`
  - Condicionales `if/else` y `switch`
  - `Math.random()` para números aleatorios
  - `prompt()` y `console.log()` para interacción

## 📁 Estructura del proyecto
```
ProyectoModulo3-Desafio-Matematicas/
├── index.html          # Página principal con instrucciones
├── script.js           # Lógica completa del juego
└── README.md          # Documentación del proyecto
```

## 💻 Instalación local

1. Clona el repositorio:
```bash
git clone https://github.com/kary-alett/ProyectoModulo3-Desafio-Matematicas.git
```

2. Navega a la carpeta del proyecto:
```bash
cd ProyectoModulo3-Desafio-Matematicas
```

3. Abre `index.html` en tu navegador preferido

## 🎓 Contexto del proyecto

Este proyecto fue desarrollado como parte de la **evaluación del Módulo 3: Fundamentos de programación en JavaScript** del Bootcamp **Desarrollo de Aplicaciones Full Stack JavaScript Trainee** de Talento Digital.

### Requisitos cumplidos:
- ✅ Operaciones matemáticas básicas
- ✅ Implementación de funciones para modularizar el código
- ✅ Uso de estructuras condicionales (`if`, `else`, `switch`)
- ✅ Uso de estructuras de repetición (`while`)
- ✅ Uso de arreglos y objetos para almacenar datos
- ✅ Validación de entradas del usuario
- ✅ Interfaz interactiva mediante `prompt()` y `console.log()`

## 🔮 Mejoras futuras

- [ ] Interfaz gráfica con HTML y CSS
- [ ] Temporizador para cada pregunta
- [ ] Tabla de clasificación (leaderboard)
- [ ] Modo de práctica sin penalizaciones
- [ ] Sonidos y animaciones
- [ ] Guardado de progreso en localStorage

## 👩‍💻 Autora

**Karina Trujillo**

Estudiante del Bootcamp Full Stack JavaScript Trainee

- GitHub: [@kary-alett](https://github.com/kary-alett)
- Proyecto: [Math Trainer](https://github.com/kary-alett/ProyectoModulo3-Desafio-Matematicas)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub

**Desarrollado con ❤️ y JavaScript**