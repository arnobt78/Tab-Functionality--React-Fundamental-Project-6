# Tabs Page Display - React, Vite, JavaScript, Custom CSS Fundamental Project 6

<img width="1159" alt="Project Screenshot" src="https://github.com/user-attachments/assets/d5c35827-cf2c-4d03-8504-65ad6e5f6f58" />

---

## Project Summary

This project is a React application demonstrating "Tab" functionality: displaying job information fetched from an external API, allowing users to switch between jobs using interactive buttons. The main learning goals are mastering React fundamentals such as state management, side effects, component structure, props, keys, and working with APIs.

- **Live-Demo:** [https://tabs-arnob.netlify.app/](https://tabs-arnob.netlify.app/)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Folder Structure](#folder-structure)
6. [Getting Started](#getting-started)
7. [Step-by-Step Walkthrough](#step-by-step-walkthrough)
8. [Components Overview](#components-overview)
9. [API & Data Handling](#api--data-handling)
10. [State Management](#state-management)
11. [Example Usage](#example-usage)
12. [Keywords & Concepts](#keywords--concepts)
13. [Learning & Teaching Notes](#learning--teaching-notes)
14. [Conclusion](#conclusion)

---

## Features

- Fetches and displays job data from an external API.
- Interactive tab navigation to switch between job entries.
- Shows company, job title, dates, and a list of duties for each job.
- Dynamic UI updates via React state.
- Loading spinner/message while fetching data.
- Clean, responsive design using modern React best practices.
- Usage of unique keys for lists with the `uuid` library.
- Modular component-based architecture for easy learning and reuse.

---

## Technology Stack

- **React** (Functional Components, Hooks)
- **JavaScript (ES6+)**
- **uuid** (for unique keys)
- **react-icons** (optional, for iconography)
- **CSS** (for styling)
- **Fetch API** (to get remote data)
- **Vite** or **Create React App** (for development server)

---

## Folder Structure

```
Tabs--React-Fundamental-Project-6/
├── public/
│   └── (static files, favicon, etc.)
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── BtnContainer.jsx
│   │   ├── JobInfo.jsx
│   │   └── Duties.jsx
│   ├── assets/
│   │   └── (images, styles, etc.)
│   ├── index.js
│   └── styles.css
├── package.json
├── README.md
└── ...
```

_Note: The actual structure may vary if you have additional files or folders._

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
# or, if using CRA:
npm start
```

---

## Step-by-Step Walkthrough

### 1. **Fetching Data**

- In `App.jsx`, use the `fetch` API inside a `useEffect` hook to get job information from the API when the component mounts.
- Display a loading message or spinner while data is being fetched.

### 2. **Managing State**

- Use `useState` to store:
  - The list of jobs (`jobs`)
  - The selected job index (`currentItem`)
  - Loading state (`loading`)

### 3. **Displaying Job Information**

- The `JobInfo` component receives the current job object as props and displays:
  - Company Name
  - Job Title
  - Dates
  - Duties (using the `Duties` component)

### 4. **Duties List**

- The `Duties` component maps over the `duties` array, rendering each as a list item.
- Use the `uuid` library to provide unique keys.

### 5. **Tab Navigation**

- The `BtnContainer` component receives `jobs`, `currentItem`, and `setCurrentItem`.
- Renders a button for each job/company.
- Clicking a button updates `currentItem`, changing the displayed job info.

### 6. **UUID for Keys**

- Install with:

  ```sh
  npm install uuid
  ```

- Import and use:

  ```js
  import { v4 as uuidv4 } from "uuid";
  ```

- Use `uuidv4()` to generate unique keys for list items.

---

## Components Overview

- **App.jsx**: Main logic, data fetching, and state management.
- **BtnContainer.jsx**: Renders navigation buttons for each job.
- **JobInfo.jsx**: Displays details for the selected job.
- **Duties.jsx**: Renders the list of job responsibilities.
- **styles.css**: Custom styles for the project.

---

## API & Data Handling

- The app relies on an external API for job data.
- Example structure of a fetched job object:

  ```json
  {
    "company": "Google",
    "dates": "Jan 2019 - Present",
    "title": "Frontend Developer",
    "duties": [
      "Build UI components",
      "Collaborate with designers",
      "Write unit tests"
    ]
  }
  ```

- Data is fetched once on component mount and stored in state.

---

## State Management

- **jobs**: Array of job objects fetched from API.
- **currentItem**: Index of the currently selected job.
- **loading**: Boolean indicating loading state.

Example code:

```js
const [jobs, setJobs] = useState([]);
const [currentItem, setCurrentItem] = useState(0);
const [loading, setLoading] = useState(true);
```

---

## Example Usage

```jsx
// App.jsx
useEffect(() => {
  fetch("https://course-api.com/react-tabs-project")
    .then((res) => res.json())
    .then((data) => {
      setJobs(data);
      setLoading(false);
    });
}, []);

// Render logic:
return (
  <main>
    <BtnContainer
      jobs={jobs}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
    <JobInfo {...jobs[currentItem]} />
  </main>
);
```

---

## Keywords & Concepts

- **React**, **Hooks** (`useState`, `useEffect`)
- **Props** and **Component Communication**
- **Conditional Rendering** (show loading state)
- **List Rendering** with unique keys
- **Fetch API** for async data
- **Functional Components**
- **UUID** for unique identifiers
- **Component Modularity & Reusability**

---

## Learning & Teaching Notes

- This project is perfect for beginners to intermediate React learners.
- Focuses on real-world patterns: API calls, state handling, dynamic rendering.
- Illustrates the importance of unique keys in lists and state-driven UI.
- Encourages modular design: splitting responsibilities into components.
- Shows how to use third-party libraries (`uuid`, `react-icons`) in React.

---

## Conclusion

This project provides a hands-on introduction to React fundamentals, focusing on fetching and displaying external data, managing state, and building interactive tabbed interfaces. By following this example, learners can strengthen their React skills, understand component architecture, and see best practices in action.

Feel free to contribute or fork for your own learning!

---
