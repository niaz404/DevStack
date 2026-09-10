# DevStack

DevStack is a web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category and select one technology from each category to create a personalized stack.

## 🚀 Technologies Used

* React
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify
* JSON
* Vite

## ✨ Features

### 1. Explore Technologies

Browse different frontend, backend, database, and other development technologies with useful information such as difficulty, category, rating, and description.

### 2. Build Your Stack

Add technologies to your personal stack while selecting only one technology from each category.

### 3. Interactive UI

Selected technologies are highlighted with a different border, and their buttons change to show that they have already been added. Technologies can also be removed individually or all at once.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage changing data inside a React component.

I used it to manage the **technology data**, **loading state**, and the user's **selected stack** in the `ExploreTech` component.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders.

I used it to fetch the JSON data when the `ExploreTech` component loads, so the technology cards can be displayed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which items changed, were added, or were removed.

For example:

```jsx
data.map((card) => (
  <div key={card.id}>
    ...
  </div>
))
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show an empty-stack message when the user has not selected any technology:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  // Show selected technologies
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send something back by calling a **function passed to it through props**.

For example:

```jsx
<Child data={data} onSelect={handleSelect} />
```

Here, `data` is sent to the child, and the child can call `onSelect()` to send information back to the parent.
