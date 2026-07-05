<p align="center">
  <img src="assets/logo.png" width="120" alt="Logo Dai Montaña" />
</p>

<h1 align="center">Restaurante Dai Montaña - Carta web</h1>

<p align="center">
  Web informativa del Restaurante Dai Montaña: carta completa con precios, descarga en PDF,
  mapa de ubicación y un creador de pedido con total en vivo.
</p>

<p align="center">
  <img alt="Static Site" src="https://img.shields.io/badge/type-static%20site-1f7a4d?style=flat-square" />
  <img alt="No build step" src="https://img.shields.io/badge/build-none%20needed-e8935c?style=flat-square" />
  <img alt="Deploy" src="https://img.shields.io/badge/deploy-vercel-000000?style=flat-square&logo=vercel" />
</p>

## Qué incluye

- **Carta completa** (más de 200 platos y bebidas) organizada por categorías, con buscador y filtros.
- **Descarga del PDF** original de la carta.
- **Hacer pedido**: selecciona platos, ajusta cantidades y ve el total en vivo, con tres avisos
  siempre visibles (precios orientativos, coste de reparto a domicilio, y confirmación telefónica).
- **Mapa** de ubicación embebido + enlace directo a "Cómo llegar" en Google Maps.
- Información de contacto, horario y teléfonos en cabecera y pie de página.

## Stack

HTML, CSS y JavaScript sin build ni dependencias — se despliega tal cual como sitio estático.

## Desarrollo local

Abre `index.html` con cualquier servidor estático, por ejemplo:

```bash
python -m http.server 8080
```

## Despliegue

```bash
vercel deploy --prod --yes
```
