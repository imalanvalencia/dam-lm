// Objeto que representa los archivos y sus rutas
      const archivos = {
        "Ejercicio 1": "/ejercicio-1.html",
        "Ejercicio 2": "/ejercicio-2.html",
        "Ejercicio 3": "/ejercicio-3.html",
        "Ejercicio 4": "/ejercicio-4.html",
        "Ejercicio 5": "/ejercicio-5.html"
      };

      const lista = document.getElementById("activities-list");

      for (const [nombre, ruta] of Object.entries(archivos)) {
        const li = document.createElement("li");
        const enlace = document.createElement("a");
        enlace.href = ruta;
        enlace.textContent = nombre;
        li.appendChild(enlace);
        lista.appendChild(li);
      }
