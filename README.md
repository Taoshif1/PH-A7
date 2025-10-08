# Project: Customer Support Zone (Assignment-007)

This project is a React-based web application designed to manage customer support tickets. It allows users to view available tickets, move them to an "In Progress" status, and finally mark them as "Resolved". The application is fully responsive and uses `react-toastify` for user notifications.

# Live Site - ![Customer Support Zone](https://customersupportzonee.netlify.app/)

---

### Q1: What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that looks very similar to HTML. It's used with React to describe what the UI should look like. Instead of separating markup (HTML) and logic (JavaScript) into different files, React combines them into components using JSX.

**Why it's used:**
- **Readability:** It makes the code more declarative and easier to visualize, as the UI structure is written directly within the JavaScript logic that controls it.
- **Component-Based:** JSX allows you to write HTML-like structures inside your JavaScript components, making it intuitive to build reusable UI elements.
- **Performance:** Babel (a JavaScript compiler) transpiles JSX into optimized `React.createElement()` calls, which create JavaScript objects describing the UI. React then uses these objects to efficiently update the DOM.

### Q2: What is the difference between State and Props?

**Props (Properties):**
- **Purpose:** Props are used to pass data *down* from a parent component to a child component.
- **Immutability:** Props are **read-only**. A child component should never modify the props it receives from its parent.
- **Analogy:** Think of them as function arguments. The parent calls the child component with certain arguments (props), and the child uses them to render.

**State:**
- **Purpose:** State is used for data that is managed *within* a component and can change over time in response to user actions or network responses.
- **Mutability:** State is **mutable** but can only be modified using a special function provided by React hooks (like the setter function from `useState`).
- **Analogy:** Think of state as a component's private, internal memory. When the state changes, React automatically re-renders the component to reflect the new data.

| Feature | Props | State |
| :--- | :--- | :--- |
| **Data Flow** | Parent to Child (One-way) | Managed within a component |
| **Mutability** | Immutable (Read-only) | Mutable (Can be changed) |
| **Owner** | Passed by the parent component | Owned and controlled by the component itself |

### Q3: What is the useState hook, and how does it work?

The **`useState` hook** is a special function in React that allows you to add state to functional components. Before hooks, state was only possible in class components.

**How it works:**
1.  **Declaration:** You call `useState` inside a functional component, passing the initial value of the state as an argument. For example: `useState(0)`.
2.  **Return Value:** It returns an array containing two elements:
    - The current state value (e.g., `count`).
    - A function to update that state value (e.g., `setCount`).
3.  **Destructuring:** We typically use array destructuring to get these two elements into separate variables: `const [count, setCount] = useState(0);`.
4.  **Re-rendering:** When you call the update function (e.g., `setCount(1)`), React does two things:
    - It schedules an update to the component's state.
    - It re-renders the component (and its children) with the new state value.

### Q4: How can you share state between components in React?

The most common way to share state between components is through a technique called **"lifting state up."**

The process is as follows:
1.  **Identify a Common Ancestor:** Find the closest common parent component of all the components that need to access the shared state.
2.  **Move State Up:** Move the `useState` declaration from the child component to that common parent component.
3.  **Pass State Down as Props:** The parent component passes the state value down to the child components that need to read it (as props).
4.  **Pass Update Function Down as Props:** The parent component also passes the state *update function* (e.g., `setCount`) down to the child components that need to modify the state (also as props).

This ensures there is a single "source of truth" for the shared data, preventing inconsistencies.

### Q5: How is event handling done in React?

Event handling in React is very similar to handling events on DOM elements, but with a few key differences:

1.  **CamelCase Naming:** React event names are written in camelCase. For example, `onclick` becomes `onClick`, and `onchange` becomes `onChange`.
2.  **Function as Handler:** Instead of passing a string, you pass a function as the event handler. For example: `onClick={handleClick}`.
3.  **Preventing Default:** To prevent the default behavior of an event (like a form submission), you must call `event.preventDefault()` explicitly. Returning `false` from the handler does not work as it does in HTML.

**Example:**
```jsx
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}