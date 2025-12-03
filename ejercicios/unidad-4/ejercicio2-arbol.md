# Ejercicio 2 - Arbol

## Pregunta

- Realizar el análisis del siguiente documento XML, generando el árbol que representa su estructura:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<libro>
    <titulo>El Ingenioso Hidalgo Don Quijote De La Mancha</titulo>
    <autor>Miguel de Ceervantes Saavedra</autor>
    <fecha>
        <publicacion>1605</publicacion>
        <edicion>2009</edicion>
    </fecha>
    <localizacion>
        <estanteria>B</estanteria>
        <fila>7</fila>
    </localizacion>
</libro>
```

## Solucion
```
    Libro
    │── Titulo: El Ingenioso Hidalgo Don Quijote De La Mancha
    │ 
    │── Autor: Miguel de Ceervantes Saavedra
    │ 
    ├── Fecha
    │ ├── Publicacion: 1605
    │ └── Edicion: 2009
    │ 
    └── Localizacion
      ├── Estanteria: B
      └── Fila: 7
```
