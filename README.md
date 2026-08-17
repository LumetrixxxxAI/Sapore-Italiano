# Sapore Italiano — Web

Web one-page para el restaurante italiano **Sapore Italiano**, en Coín (Málaga).

HTML, CSS y JS puros (sin build ni dependencias de instalación). Anima con GSAP + ScrollTrigger cargados por CDN.

## Estructura

```
index.html
css/style.css
js/main.js
img/              -> fotos reales del restaurante, optimizadas en .jpg
legal/            -> aviso legal, privacidad, cookies
```

## Fotos

Todas las fotos son reales, tomadas en Sapore Italiano y optimizadas para web (JPG, calidad ~80%):

- `hero-pizza-estrella.jpg` — pizza con burrata y prosciutto (hero)
- `cocina-horno-lena.jpg` — pizza con burrata (sección "Nuestra cocina")
- `especialidad-pizza-bbq.jpg` — pizza especial BBQ de la casa
- `especialidad-spaghetti-mare.jpg` — spaghetti frutti di mare
- `especialidad-carpaccio-atun.jpg` — carpaccio de atún
- `especialidad-tiramisu.jpg` — tiramisú casero
- `ambiente-interior-trattoria.jpg` — interior/barra del local
- `ambiente-terraza.jpg` — fachada exterior de noche
- `og-image.jpg` — imagen para compartir en redes (recorte 1200x630 del hero)

Si en el futuro se quieren añadir más fotos (horno en acción, comensales, terraza de día, etc.) o cambiar alguna, basta con sustituir el archivo correspondiente manteniendo el nombre, o actualizar la ruta en `index.html`.

## Datos a confirmar

- Horario exacto de cierre (actualmente "desde las 16:00", sin hora de cierre confirmada)
- Enlace real de reserva en TheFork (actualmente apunta a `https://www.thefork.es/`)
- Enlace real de Facebook en el footer
- Carta completa en PDF (el botón "Ver carta completa" está sin enlazar)
- NIF/CIF y email para el Aviso Legal y Política de Privacidad

## Publicar con GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `sapore-italiano-web`).
2. Sube este proyecto:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/sapore-italiano-web.git
   git branch -M main
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages**.
4. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. En unos minutos la web estará disponible en `https://TU_USUARIO.github.io/sapore-italiano-web/`.

## Diseñado por

Lumetrix AI
