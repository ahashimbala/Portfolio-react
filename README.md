# Portfolio-react

## Overview

Portfolio-react is a rebuild of my first personal portfolio, originally developed using HTML, CSS, and JavaScript.

This project also marks the beginning of my AI Intermediate Frontend Curriculum at FlexiSAF EduSoft Limited. It focuses on building a modern, responsive portfolio while learning React, reusable component architecture, and frontend development best practices.

## Technologies

- HTML5
- CSS3
- JavaScript
- React
- Vite
- React Router

## Project Structure

The project is organized into reusable components and pages.

```text
src/
├── components/
│   ├── Button/
│   ├── Feedback/
│   ├── Hero/
│   ├── Input/
│   ├── List/
│   ├── Navbar/
│   ├── PageHeader/
│   ├── ProjectCard/
│   └── Stats/
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

Each reusable component has its own JSX and CSS files.

## Design System

The project uses CSS custom properties (design tokens) to maintain consistency across the interface.

These tokens cover:

- Colours
- Spacing
- Typography
- Border radius
- Shadows
- Button colours

## Reusable Components

Some of the reusable components developed in this project include:

- **Button:** Supports variants, click events, disabled and loading states.
- **Input:** Supports controlled values, labels, placeholders, validation errors, and disabled states.
- **Feedback:** Displays informational, success, warning, and error messages.
- **List:** Renders dynamic lists and handles empty states.
- **ProjectCard:** Displays project information and technology tags.
- **PageHeader:** Provides reusable page titles and descriptions.
- **Navbar:** Provides navigation between portfolio pages.
- **Hero:** Displays the main introduction section.
- **Stats:** Displays portfolio statistics using reusable data-driven cards.

## Getting Started

Before running the project locally, ensure you have the following installed:

- Node.js (v22.0.0 or higher; tested on v22.20.0) – [Download Node.js](https://nodejs.org/)
- npm (v9.0.0 or higher, usually bundled with Node.js)
- Git – [Download Git](https://git-scm.com/)

Verify your installations:

```bash
node -v
npm -v
```

## AI Design-to-Code Evaluation

AI helped break down the reference design into smaller, reusable React components, making implementation more structured.

However, I had to guide the project architecture by requesting that each component's JSX and CSS files be grouped into the same folder. I chose this structure to improve debugging, code navigation, and maintainability.

**Key takeaway:** AI can accelerate frontend development, but human judgment remains important when making architectural and maintainability decisions.

## Installation

Clone the repository:

```bash
git clone https://github.com/ahashimbala/Portfolio-react.git
cd Portfolio-react
```

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Once the server starts, open your browser and navigate to:

http://localhost:5173

Alternatively, use the local URL displayed in your terminal.

## Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint, if configured in the project |

## Live Demo

View the deployed portfolio:

[Portfolio-react – Live Demo](https://portfolio-react-two-lovat.vercel.app/)

## Repository

[GitHub Repository](https://github.com/ahashimbala/Portfolio-react)