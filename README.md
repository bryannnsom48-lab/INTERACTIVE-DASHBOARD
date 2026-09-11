# Pulse — Interactive Dashboard

A responsive, single-page dashboard built for daily tasks/activity management. It's built with plain HTML, Tailwind CSS, and vanilla JavaScript — to demonstrate DOM selection, event handling, and state-driven UI updates.

## Features

- Responsive layout with a slide-in mobile navigation menu
- Tabbed content (Overview / Tasks / Activity) that switches without reloading the page
- A notifications dropdown that closes when you click outside it
- A modal dialog with an explicit close button and Escape-to-close
- A live search filter over the Recent Activity list, without deleting anything from the page
- An activity list rendered from data at runtime, rather than hardcoded in the HTML

# Built with

HTML, Tailwind CSS (CLI build), vanilla JavaScript — no frameworks or libraries, no backend.

## Public links
1. GitHub: [https://github.com/bryannnsom48-lab/INTERACTIVE-DASHBOARD.git]
2. Netlify: [https://bryann-pulse-dashboard.netlify.app]

## Running it locally
1. Rebuild the CSS: `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`
2. Open with LiveServer using VS Code OR Serve the folder with any static server (for example `npx serve`) in a second terminal
3. Open the printed local URL in your browser