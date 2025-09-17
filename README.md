# Propuesta de Mejora de UX: Gestión de Cola en Spotify

Este proyecto es una demostración interactiva creada para el talle de clase de **Ingeniería de Software 2**. Su objetivo es identificar un problema común de experiencia de usuario (UX) en la aplicación de Spotify y proponer una solución de diseño concreta y funcional.

##Autor:
Bryan Arias Rios
##Asignatura:
Ingeniería de software 2

## 🚀 El Desafío: Un Problema Común de UX

Una frustración recurrente al usar Spotify es la gestión de la **"Cola de reproducción"**. Al seleccionar una nueva canción mientras se escucha una playlist, la acción predeterminada interrumpe y reemplaza la cola actual sin una advertencia clara. Esto provoca que el usuario pierda su sesión de escucha de forma accidental, lo cual es especialmente molesto si había preparado una secuencia específica de canciones.

## ✨ La Solución Propuesta

Para resolver este problema, se propone una solución de diseño que empodera al usuario, dándole control total sobre sus acciones.

Al intentar reproducir una nueva canción cuando ya hay una cola activa, la aplicación presenta un **diálogo modal no intrusivo**. Este diálogo ofrece al usuario opciones claras y directas:

1.  **✅ Añadir a la cola (Acción principal):** Agrega la canción al final de la cola actual, sin interrumpir la música.
2.  **▶️ Reproducir a continuación (Acción secundaria):** Inserta la canción justo después de la que se está reproduciendo.
3.  **🗑️ Limpiar y reproducir (Acción explícita):** Reemplaza la cola actual con la nueva canción, pero solo después de que el usuario lo confirme explícitamente.

> **Justificación:** *Esta solución mejora la experiencia al dar al usuario un control explícito sobre la cola de reproducción, evitando interrupciones accidentales y haciendo la gestión de la música más intuitiva.*

## 🕹️ Demostración Interactiva

**Puedes probar la aplicación desplegada aquí: [https://punto4-is-2.vercel.app/](https://punto4-is-2.vercel.app/)**

Este repositorio contiene una aplicación web funcional que simula la solución propuesta.

1.  **Inicia la reproducción:** Haz clic en el botón de reproducir en cualquier canción de la lista.
2.  **Activa la solución:** Mientras la primera canción está "sonando", intenta reproducir una canción diferente.
3.  **Explora las opciones:** Aparecerá el modal con las tres opciones. Puedes probar cómo cada una afecta a la "Cola de reproducción" en el panel de la derecha.

## 🔧 Tecnologías Utilizadas

Este prototipo fue construido utilizando tecnologías modernas de desarrollo frontend:

*   **React:** Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
*   **TypeScript:** Un superconjunto de JavaScript que añade tipado estático para un código más robusto y mantenible.
*   **Tailwind CSS:** Un framework de CSS "utility-first" para un diseño rápido y responsivo directamente en el marcado.

## 📁 Estructura del Proyecto

El código está organizado de manera modular para facilitar su comprensión y mantenimiento:

```
/
├── components/         # Componentes reutilizables de React (Player, SongList, Modal, etc.)
├── hooks/              # Hooks personalizados de React (useMusicQueue.ts)
├── App.tsx             # Componente principal de la aplicación
├── index.tsx           # Punto de entrada de la aplicación React
├── index.html          # Archivo HTML raíz
└── types.ts            # Definiciones de tipos de TypeScript (interfaces)
```



## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
