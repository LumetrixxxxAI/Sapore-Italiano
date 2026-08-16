# Sapore Italiano — Web

Web one-page para el restaurante italiano **Sapore Italiano**, en Coín (Málaga).

HTML, CSS y JS puros (sin build ni dependencias de instalación). Anima con GSAP + ScrollTrigger cargados por CDN.

## Estructura

```
index.html
css/style.css
js/main.js
img/              -> fotos (algunas son placeholders, ver abajo)
legal/            -> aviso legal, privacidad, cookies
```

## Fotos pendientes

Los siguientes archivos en `img/` son **placeholders** (SVG con el texto "FOTO PENDIENTE") y deben sustituirse por fotografías reales del restaurante, manteniendo el mismo nombre de archivo o actualizando la ruta en `index.html`:

- `hero-pizza-estrella.svg` — pizza o pasta estrella para el hero (plano cenital, muy apetitosa)
- `cocina-horno-lena.svg` — horno de leña o cocina en acción
- `especialidad-pizza-quattro-formaggi.svg` — pizza cuatro quesos
- `especialidad-spaghetti-vongole.svg` — spaghetti alle vongole
- `especialidad-pasta-fresca.svg` — pasta fresca hecha a mano
- `especialidad-tiramisu.svg` — tiramisú casero
- `ambiente-interior-trattoria.svg` — interior del local
- `ambiente-terraza.svg` — fachada o terraza exterior
- `og-image.svg` — imagen para compartir en redes sociales (recomendado: JPG/PNG 1200x630 real)

Recomendación: exportar las fotos reales en `.jpg` optimizado (calidad 75-80%, ancho máx. 1920px para el hero, 1000px para el resto) y actualizar las extensiones `.svg` por `.jpg` en `index.html`.

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
