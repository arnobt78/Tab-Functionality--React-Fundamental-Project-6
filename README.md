# Tab Functionality Display - React, Vite, JavaScript, Custom CSS Fundamental Project 6

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A React application demonstrating **tab functionality**: it displays job information fetched from an external API and lets users switch between jobs using interactive buttons. The project focuses on React fundamentals—state management, side effects, component structure, props, list keys, and working with APIs—and is suitable for learning and teaching.

- **Live Demo:** [https://tab-functionality.vercel.app/](https://tab-functionality.vercel.app/)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables (.env)](#environment-variables-env)
7. [How to Run & Use](#how-to-run--use)
8. [Walkthrough: How It Works](#walkthrough-how-it-works)
9. [Components in Detail](#components-in-detail)
10. [API & Data](#api--data)
11. [State Management](#state-management)
12. [Reusing Components in Other Projects](#reusing-components-in-other-projects)
13. [Keywords & Concepts](#keywords--concepts)
14. [Teaching & Learning Notes](#teaching--learning-notes)
15. [Conclusion](#conclusion)
16. [License](#license)

---

## Project Summary

This is a **frontend-only** React app built with **Vite**. It has no custom backend; job data comes from a public external API. The app fetches an array of job objects on load, shows a loading spinner until data is ready, then renders company names as tabs and the selected job’s title, company, dates, and duties. Clicking a tab updates the displayed job. The codebase is small and modular so you can follow the flow from `main.jsx` → `App.jsx` → `BtnContainer` / `JobInfo` → `Duties`.

---

## Features

- Fetches and displays job data from an external API.
- Interactive tab navigation (company buttons) to switch between jobs.
- Shows company name, job title, dates, and a list of duties for the selected job.
- Dynamic UI updates driven by React state.
- Loading spinner while data is being fetched.
- Responsive layout (stacked on small screens, side-by-side on larger).
- Unique list keys via the `uuid` library.
- Modular, component-based structure for learning and reuse.

---

## Technology Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **React 18**          | UI library, functional components  |
| **Vite 4**            | Build tool and dev server          |
| **JavaScript (ES6+)** | Application logic                  |
| **uuid**              | Unique keys for list items         |
| **react-icons**       | Icons (e.g. FaAngleDoubleRight)    |
| **Fetch API**         | HTTP request for job data          |
| **Custom CSS**        | Styling (variables, layout, theme) |
| **ESLint 9**          | Linting (flat config)              |

---

## Project Structure

```bash
06-tabs/
├── public/
│   └── vite.svg                 # Favicon (referenced as /vite.svg)
├── src/
│   ├── main.jsx                 # Entry: mounts App into #root
│   ├── App.jsx                  # Root component: fetch, state, layout
│   ├── BtnContainer.jsx          # Tab buttons (one per job/company)
│   ├── JobInfo.jsx              # Selected job title, company, dates, duties
│   ├── Duties.jsx               # Renders duties list with icons
│   └── index.css                # Global + project-specific styles
├── index.html                  # HTML shell, meta tags, script to main.jsx
├── vite.config.js               # Vite config (React plugin)
├── eslint.config.cjs            # ESLint 9 flat config
├── package.json
├── .gitignore
└── README.md
```

**Routes:** This is a single-page app with no client-side routing. One HTML page and one React tree.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (or yarn/pnpm)

### 1. Clone the repository

```sh
git clone <repository-url>
cd 06-tabs
```

### 2. Install dependencies

```sh
npm install
```

### 3. (Optional) Configure environment

See [Environment Variables (.env)](#environment-variables-env). The app works without a `.env` file; the API URL is hardcoded as a fallback.

### 4. Start development server

```sh
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

### 5. Lint and build

```sh
npm run lint    # Run ESLint
npm run build   # Production build to dist/
npm run preview # Preview production build locally
```

---

## Environment Variables (.env)

The app currently uses a **hardcoded** API URL in `src/App.jsx`. To make the base URL configurable (e.g. for different environments or APIs), you can use Vite env variables.

### How Vite env works

- Only variables prefixed with `VITE_` are exposed to client code.
- Create a `.env` file in the **project root** (same level as `package.json`).
- Restart the dev server after changing `.env`.

### Example .env

Create `.env` in the project root:

```env
# Optional: override API base URL (must start with VITE_ to be available in browser)
VITE_API_URL=https://www.course-api.com/react-tabs-project
```

### Using the variable in code

In `src/App.jsx` you can switch to the env variable with a fallback:

```js
const url =
  import.meta.env.VITE_API_URL ||
  "https://www.course-api.com/react-tabs-project";
```

### Required vs optional

- **Required:** None. The app runs without any `.env` file.
- **Optional:** `VITE_API_URL` — use it if you want to point to a different endpoint or mock server.

### .gitignore

The repo’s `.gitignore` already includes `.env`, so local secrets or overrides are not committed. If you add a `.env.example`, you can commit that and keep `.env` untracked.

---

## How to Run & Use

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start Vite dev server (hot reload)          |
| `npm run build`   | Build for production into `dist/`           |
| `npm run preview` | Serve the production build locally          |
| `npm run lint`    | Run ESLint on `src` (no config file linted) |

**Using the app:** After `npm run dev`, open the app in the browser. Wait for the loading spinner to finish; then use the company buttons (tabs) to switch jobs. The panel on the right (or below on small screens) shows the selected job’s details and duties.

---

## Walkthrough: How It Works

### 1. Entry point

`index.html` loads `/src/main.jsx`. `main.jsx` creates a React root on `#root` and renders `<App />` inside `<React.StrictMode>`.

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

### 2. App: data fetch and state

`App.jsx` holds all shared state and performs the API request:

- **State:** `loading`, `jobs`, `currentItem` (index of the selected job).
- **Effect:** On mount, it calls `fetchJobs()`, which `fetch`es the API, parses JSON, updates `jobs` and sets `loading` to `false`.
- **UI:** While `loading` is true, it renders only the loading spinner. Otherwise it renders `BtnContainer` (tabs) and `JobInfo` (selected job). No routing—only one “page.”

```jsx
// Simplified flow in App.jsx
const [loading, setLoading] = useState(true);
const [jobs, setJobs] = useState([]);
const [currentItem, setCurrentItem] = useState(0);

useEffect(() => {
  fetchJobs(); // fetch(url) -> setJobs(data), setLoading(false)
}, []);

if (loading)
  return (
    <section className="jobs-center">
      <div className="loading" />
    </section>
  );
return (
  <section className="jobs-center">
    <BtnContainer
      jobs={jobs}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
    <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>
);
```

---

### 3. Tab buttons (BtnContainer)

`BtnContainer` receives `jobs`, `currentItem`, and `setCurrentItem`. It maps over `jobs` and renders one button per job, using `item.id` as key and `index` to compare with `currentItem`. Clicking a button calls `setCurrentItem(index)`.

---

### 4. Selected job (JobInfo)

`JobInfo` receives `jobs` and `currentItem`, reads `jobs[currentItem]`, and displays `title`, `company`, `dates`, and passes `duties` to `Duties`.

---

### 5. Duties list (Duties)

`Duties` receives `duties` (array of strings), maps over it, and for each duty renders an icon and the text. Each item uses a key from `uuidv4()`.

---

## Components in Detail

### App.jsx

- **Role:** Root component; owns fetch and global UI state.
- **State:** `loading`, `jobs`, `currentItem`.
- **Children:** `BtnContainer`, `JobInfo`.
- **Reuse idea:** Extract “fetch on mount + loading + list + selected index” into a small hook or generic “tabs + content” layout for other list/detail UIs.

```jsx
// Key snippet: fetch and state
const url = "https://www.course-api.com/react-tabs-project";
const fetchJobs = async () => {
  const response = await fetch(url);
  const newJobs = await response.json();
  setJobs(newJobs);
  setLoading(false);
};
useEffect(() => {
  fetchJobs();
}, []);
```

---

### BtnContainer.jsx

- **Props:** `jobs` (array), `currentItem` (number), `setCurrentItem` (function).
- **Role:** Renders a button per job; highlights the active index; updates selection on click.
- **Reuse:** Use in any “tabs by index” UI: pass `items`, `activeIndex`, `onSelect(index)` and adapt the label (e.g. `item.company` → `item.name`).

```jsx
// Usage in another project (conceptual)
<BtnContainer
  items={myItems}
  currentIndex={activeIndex}
  setCurrentIndex={setActiveIndex}
  labelKey="name"
/>
```

You’d adjust the component to use `items`, `currentIndex`, `setCurrentIndex`, and optionally a `labelKey` prop.

---

### JobInfo.jsx

- **Props:** `jobs` (array), `currentItem` (number).
- **Role:** Displays the current job’s `title`, `company`, `dates`, and `Duties`.
- **Reuse:** Pass a single `job` object and a custom “detail” component for other entities (e.g. product, article).

```jsx
// Conceptual reuse: single object
<JobInfo job={selectedJob} />
```

---

### Duties.jsx

- **Props:** `duties` (array of strings).
- **Role:** Renders a list with icon + text; keys from `uuid`.
- **Reuse:** Use for any list of strings (bullets, feature list, steps). Replace the icon or style as needed.

```jsx
// Reuse example
<Duties duties={["Step one", "Step two"]} />
```

---

## API & Data

### Endpoint

- **URL:** `https://www.course-api.com/react-tabs-project`
- **Method:** GET (no auth, no request body).
- **Response:** JSON array of job objects.

### Job object shape

Each element has at least:

- `id` — unique identifier (used as key for tab buttons).
- `company` — company name (tab label).
- `title` — job title.
- `dates` — date range string.
- `duties` — array of strings (job responsibilities).

Example:

```json
{
  "id": "abc123",
  "company": "TOMMY",
  "title": "Full Stack Developer",
  "dates": "December 2015 - Present",
  "duties": [
    "Build and maintain UI components.",
    "Collaborate with designers and backend."
  ]
}
```

There is **no custom backend** in this repo; the app is a consumer of this external API.

---

## State Management

All state is in `App.jsx` and passed down via props (no Redux, Context, or global store).

| State         | Type    | Purpose                               |
| ------------- | ------- | ------------------------------------- |
| `loading`     | boolean | True until the first fetch completes. |
| `jobs`        | array   | List of job objects from API.         |
| `currentItem` | number  | Index of the selected job (0-based).  |

Updating the tab (e.g. clicking a company) only changes `currentItem`; `JobInfo` and `Duties` derive their content from `jobs[currentItem]`.

---

## Reusing Components in Other Projects

1. **Copy components**  
   Copy `BtnContainer.jsx`, `JobInfo.jsx`, and `Duties.jsx` into your project (and adjust imports/paths).

2. **Match props**
   - `BtnContainer`: array of items + current index + setter (and optionally a label key).
   - `JobInfo`: either `(jobs, currentItem)` or a single `job` object if you refactor.
   - `Duties`: `duties` array of strings.

3. **Styling**  
   Copy the relevant parts of `index.css` (e.g. `.btn-container`, `.job-btn`, `.job-info`, `.job-desc`) or replace with your own CSS/styled-components.

4. **Icons**  
   `Duties` uses `react-icons`; install it or swap the icon for another library/component.

5. **Keys**  
   `Duties` uses `uuid`; install `uuid` or use a stable id from your data (e.g. `duty.id` or index if the list is static).

---

## Keywords & Concepts

- **React** — functional components, JSX.
- **Hooks** — `useState`, `useEffect`.
- **Props** — passing data and callbacks into components.
- **Conditional rendering** — loading vs content.
- **List rendering** — `.map()` and keys (`item.id`, `uuidv4()`).
- **Fetch API** — GET request, `.json()`, async/await.
- **Single-page app (SPA)** — no router; one view driven by state.
- **Component composition** — App → BtnContainer / JobInfo → Duties.
- **Controlled “tabs”** — selection stored in parent state, passed down.

---

## Teaching & Learning Notes

- Good for **beginners**: one API, one list, one selected index, no routing.
- **Patterns:** fetch in `useEffect`, loading state, derived current item from index.
- **Keys:** Demonstrates why list keys matter (stable, unique) and compares `item.id` vs `uuid` for different list types.
- **Modularity:** Each component has a clear responsibility; you can replace or restyle one without touching others.
- **Extending:** Add error handling (try/catch, error state), retry, or a different API using the same structure and optional `.env` for `VITE_API_URL`.

---

## Conclusion

This project is a small, focused example of **React + Vite**: fetching data, storing it in state, and driving a tabbed UI from that state. You see how `useState` and `useEffect` work together, how props flow down, and how to structure a minimal tabbed layout. Use it as a template for similar “list + selected item” UIs or as a teaching base for React fundamentals.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
