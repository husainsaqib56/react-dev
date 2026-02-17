# react-dev

[![GitHub stars](https://img.shields.io/github/stars/husainsaqib56/react-dev?style=flat-square)](https://github.com/husainsaqib56/react-dev/stargazers) [![Issues](https://img.shields.io/github/issues/husainsaqib56/react-dev?style=flat-square)](https://github.com/husainsaqib56/react-dev/issues) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A collection of small React practice projects and challenges. This workspace contains various learning exercises covering React fundamentals, state management, UI components, and interactive applications.

## Prerequisites

- Node.js (recommended >= 16)
- npm (or yarn)

## Projects Overview

### 1. [01-react-random-advice](./01-react-random-advice/)
**Random Advice Generator** - A Vite + React project that fetches and displays random advice quotes. Built with modern tooling using Vite for fast development and Hot Module Replacement (HMR).

**Stack**: React, Vite, JavaScript  
**Features**: API integration, dynamic content rendering  
**Run Commands**:
```bash
cd 01-react-random-advice
npm install
npm run dev
```

---

### 2. [02-JS-review](./02-JS-review/)
**JavaScript Review & Practice** - A collection of JavaScript practice snippets and code examples for reviewing core JavaScript concepts and features.

**Stack**: Vanilla JavaScript  
**Features**: ES6+ syntax, fundamentals practice  
**How to Use**: Open `script.js` in an editor and run with Node.js or in a browser console.

---

### 3. [03-pizza-menu](./03-pizza-menu/)
**Pizza Menu Application** - A Create React App project showcasing a pizza restaurant menu with dynamic data rendering. Demonstrates component composition and data handling.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Component-based UI, data mapping, product listing  
**Run Commands**:
```bash
cd 03-pizza-menu
npm install
npm start
```

---

### 4. [04-travel-list](./04-travel-list/)
**Travel Packing List** - A Create React App project for managing travel packing items. Features adding, removing, and marking items as packed. Great introduction to state management and form handling.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Add/remove items, checkbox toggling, list filtering, statistics  
**Run Commands**:
```bash
cd 04-travel-list
npm install
npm start
```

---

### 5. [05-accordion-example](./05-accordion-example/)
**Accordion UI Component** - A Create React App project demonstrating an accordion (collapsible content) component. Useful for learning conditional rendering and state-based UI interactions.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Toggle states, collapsible sections, smooth interactions  
**Run Commands**:
```bash
cd 05-accordion-example
npm install
npm start
```

---

### 6. [06-steps](./06-steps/)
**Steps Navigation Component** - A Create React App project featuring a step-by-step navigation UI. Demonstrates state management and button-based navigation patterns.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Step tracking, navigation controls, visual indicators  
**Run Commands**:
```bash
cd 06-steps
npm install
npm start
```

---

### 7. [07-tip-calculator](./07-tip-calculator/)
**Tip Calculator Challenge** - A Create React App project implementing a tip calculator. Users can input bill amounts and tip percentages to calculate totals. Excellent for practicing form handling and calculations.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Dynamic calculations, input handling, reset functionality  
**Run Commands**:
```bash
cd 07-tip-calculator
npm install
npm start
```

---

### 8. [08-eat-n-split](./08-eat-n-split/)
**Eat-N-Split Expense Splitter** - A Create React App project for splitting expenses among friends. Features adding friends, tracking expenses, and calculating who owes whom.

**Stack**: React (Create React App), JavaScript, CSS  
**Features**: Friend management, expense tracking, debt calculation  
**Run Commands**:
```bash
cd 08-eat-n-split
npm install
npm start
```

---

### 9. [09-use-popcorn](./09-use-popcorn/)
**Use-Popcorn Movie App** - A Create React App project for browsing and rating movies. Features API integration with OMDb, search functionality, and user ratings. This is a more advanced project demonstrating complex state management and data fetching.

**Stack**: React (Create React App), JavaScript, CSS, API integration  
**Features**: Movie search, ratings, watchlist, local storage persistence, API calls  
**Run Commands**:
```bash
cd 09-use-popcorn
npm install
npm start
```

```

---

### 10. [10-text-expander](./10-text-expander/)
**Text Expander** - A small utility for expanding typed shortcuts into predefined text snippets. Implemented as a lightweight app to practice keyboard handling, local storage, and UI interactions.

**Stack**: JavaScript (or React)  
**Features**: Define shortcuts, expand snippets on typing or trigger, persist snippets in local storage  
**Run Commands**:
```bash
cd 10-text-expander
# If plain HTML/JS: open index.html
# If React app:
npm install
npm start
```

---

## Running Projects

### Quick Start for Any Project
Choose a project and run these commands in your terminal:

```bash
cd <project-folder>
npm install
npm start          # For Create React App projects
# OR
npm run dev        # For Vite projects (01-react-random-advice)
```

### Notes
- **Create React App Projects** (03-09): Use `npm start` to run development server
- **Vite Project** (01): Use `npm run dev` for development server
- **JavaScript File** (02): Run directly with Node.js or paste into browser console

## Project Structure

```
react-dev/
├── 01-react-random-advice/    (Vite + React)
├── 02-JS-review/              (Vanilla JavaScript)
├── 03-pizza-menu/             (Create React App)
├── 04-travel-list/            (Create React App)
├── 05-accordion-example/      (Create React App)
├── 06-steps/                  (Create React App)
├── 07-tip-calculator/         (Create React App)
├── 08-eat-n-split/            (Create React App)
├── 09-use-popcorn/            (Create React App)
└── README.md
```

Each project folder is a standalone application with its own `package.json` and dependencies.

## How to run a project

Open a terminal in the project folder you want to run, for example:

```bash
cd 07-tip-calculator
npm install
npm start
```

Notes:
- Projects using Create React App use `npm start` (found in `package.json` scripts).
- The Vite-based project (`01-react-random-advice`) uses `npm run dev`.

## Contributing

If you'd like to contribute or add explanations for individual projects, open a PR with the changes in the corresponding folder.

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to use, modify, and distribute this code with proper attribution.