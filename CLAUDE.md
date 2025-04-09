# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build commands
- `zola serve` - Run the site locally with live reloading
- `zola build` - Build the site for production
- `zola check` - Check for broken links

## Code style guidelines
- HTML: Use semantic HTML5 elements
- CSS/SCSS: Follow BEM naming convention for classes
- JavaScript: 
  - Use ES6+ features
  - Prefer const/let over var
  - Use descriptive variable names
  - Use addEventListener for events
  - Handle errors with proper error messages to console
- SCSS organization:
  - Use partials (_filename.scss) for component styles
  - Import partials in main.scss
  - Use variables from _variables.scss

## Project structure
- `/templates` - HTML templates
- `/static` - Static assets (JS, images)
- `/sass` - SCSS source files
- `/content` - Markdown content
- `/public` - Generated site (don't edit directly)