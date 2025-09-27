Question1::.What is JSX, and why is it used?
*JSX stands for JavaScript XML.
It’s a syntax extension for JavaScript that looks similar to HTML but is used inside React to describe what the UI should look like.
##Why is JSX used?

*It makes the code easier to read and write.

*It allows you to combine HTML-like structure with JavaScript logic.

*It helps in building complex user interfaces in a clear and structured way.

*It improves developer productivity while still being compiled into optimized JavaScript for performance.

Question2::.What is the difference between State and Props?


***State

State is managed within a component (internal).

It represents data that can change over time.

A component can update its own state.

Used to handle dynamic and interactive behavior.

***Props

Props are passed to a component from outside (external).

They are read-only and cannot be modified by the receiving component.

Used to pass data from a parent component to a child component.

Help make components reusable and flexible.

Question3::What is the useState hook, and how does it work?
**What is useState?

useState is a React Hook that lets you add state (data that changes) to functional components.

Before hooks, only class components could use state, but now functional components can too.

**How does it work?

You call useState inside a component and give it an initial value.

1.It returns two things:

2.The current state value.

A function to update that value.

When you update the state using this function, React re-renders the component to show the latest data.

Question4::How can you share state between components in React?

1..Lift State Up

Move the state to the nearest common parent component.

Pass the state down as props to child components.

Pass functions as props if children need to update the state.

2..Using Context API

Useful when many components need the same state.

Provides a way to create a global state that can be accessed without passing props manually at every level.

3..State Management Libraries

For large applications, libraries like Redux, Zustand, or Recoil can manage shared state more efficiently.


Question5::How is event handling done in React?

1..CamelCase Naming

React events are written in camelCase (e.g., onClick, onChange, onSubmit) instead of lowercase like in plain HTML.

2..Passing Functions

Instead of writing event handlers as strings, you pass a function reference.

3..Synthetic Events

React wraps native browser events inside a system called Synthetic Events, making them consistent across different browsers.

4..Event Object

The event handler function automatically receives an event object that contains details about the event (like target, type, etc.).

5..Updating State with Events

Event handlers are often used to update state (using useState) to make the UI respond to user actions









<<<<<<< HEAD
=======
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> a95af55 (added a layout)



>>>>>>> 70155dd (added README.md file)
