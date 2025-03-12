# Eleventy Tailwind Template

A starter template combining [Eleventy](https://www.11ty.dev/) (11ty) static site generator with [Tailwind CSS](https://tailwindcss.com/) for creating fast, modern websites with minimal effort.

## Features

- **Eleventy** - A simpler static site generator
- **Tailwind CSS** - A utility-first CSS framework
- **PostCSS** - For processing Tailwind and other CSS needs
- **Nunjucks Templates** - Powerful templating engine
- **Fast Development** - Hot reloading during development
- **Optimized Production Build** - Minified assets for production

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or newer)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd eleventy_tailwind_template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run start
```

This will start Eleventy with hot-reloading and serve your site at `http://localhost:8080`.

### Production Build

Build the site for production:

```bash
npm run build
```

The output will be in the `_site` directory.

## Project Structure

```
eleventy_tailwind_template/
├── .eleventy.js          # Eleventy configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
├── package.json          # Project dependencies and scripts
├── src/                  # Source files
│   ├── _includes/        # Template partials and layouts
│   │   └── header.njk    # Header component
│   ├── css/              # CSS files
│   │   └── style.css     # Main CSS file with Tailwind imports
│   ├── js/               # JavaScript files
│   ├── about/            # About page directory
│   └── index.njk         # Homepage template
└── _site/                # Generated site (not in version control)
```

## Template Usage

The project uses Nunjucks for templating. Example from index.njk:

```html
<!--

{% include "header.njk" %}


{% set assetsPath = "" %}
{% if page.url and page.url != "/" %}
  {% set assetsPath = "../" %}
{% endif %} 


<a href="{{ assetsPath }}about/" 


-->
```

This demonstrates:
- Including components (header.njk)
- Dynamic path handling based on page location
- Relative linking between pages

## Customization

### Tailwind Configuration

Modify `tailwind.config.js` to customize your design system including colors, fonts, and more.

### Eleventy Configuration

Adjust `.eleventy.js` to configure template languages, directories, and plugins.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Eleventy](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)