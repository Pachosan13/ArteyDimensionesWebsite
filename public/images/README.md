# Carpeta de Imágenes - Arte y Dimensiones

Esta carpeta está destinada para almacenar las imágenes del sitio web de Arte y Dimensiones.

## Estructura Recomendada

```
public/images/
├── portfolio/          # Imágenes de proyectos del portafolio
├── services/          # Imágenes para la sección de servicios
├── hero/              # Imágenes para la sección hero
├── team/              # Fotos del equipo
├── clients/           # Logos de clientes
└── general/           # Imágenes generales
```

## Formatos Recomendados

- **JPG/JPEG**: Para fotografías de proyectos arquitectónicos
- **PNG**: Para logos, iconos y imágenes con transparencia
- **WebP**: Para mejor optimización (recomendado)

## Tamaños Recomendados

- **Hero**: 1920x1080px o superior
- **Portfolio**: 800x600px
- **Servicios**: 800x600px
- **Logos**: 200x200px (formato cuadrado)

## Uso en el Código

Para usar las imágenes en el código, utiliza rutas relativas desde la carpeta public:

```jsx
// Ejemplo:
<img src="/images/portfolio/proyecto1.jpg" alt="Proyecto 1" />
```

## Optimización

- Comprime las imágenes antes de subirlas
- Usa nombres descriptivos (ej: `torre-corporativa-obarrio.jpg`)
- Mantén los archivos bajo 1MB cuando sea posible