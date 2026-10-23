
export const reactTopics = [
  {
    id: "home",
    title: "React Home",
    heading: "Learn React",
    sections: [
      {
        heading: "Welcome to React",
        text: "React is a JavaScript library for building interactive user interfaces. It helps developers create reusable UI components.",
        note: "React is commonly used to build single-page applications and complex web interfaces.",
      },
      {
        heading: "Your First React Component",
        text: "A component is a reusable piece of your user interface.",
        code: `function Welcome() {
  return <h1>Hello React!</h1>;
}

export default Welcome;`,
      },
    ],
  },
  {
    id: "intro",
    title: "React Intro",
    heading: "What is React?",
    sections: [
      {
        heading: "React Introduction",
        text: "React is a JavaScript library for building user interfaces. It was originally developed at Facebook and is maintained by Meta and the open-source community.",
      },
      {
        heading: "How does React work?",
        text: "React lets you describe what the user interface should look like for a given state. When that state changes, React renders the updated components and commits necessary changes to the DOM.",
        note: "React helps you build UI from independent, reusable components.",
      },
      {
        heading: "React Example",
        text: "Here is a simple React component:",
        code: `function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}

export default App;`,
        output: "Hello World!\nWelcome to React.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "React Get Started",
    heading: "Getting Started with React",
    sections: [
      {
        heading: "Create a React Application",
        text: "You can use Vite to create a modern React application. Make sure Node.js is installed first.",
        code: `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`,
      },
      {
        heading: "Project Structure",
        text: "Most of your application code lives inside the src folder. App.jsx usually contains your main application component, and main.jsx mounts your app.",
      },
    ],
  },
  {
    id: "first-app",
    title: "React First App",
    heading: "Your First React App",
    sections: [
      {
        heading: "Create Your Component",
        text: "Open App.jsx and write your first component.",
        code: `function App() {
  return (
    <main>
      <h1>My First React App</h1>
      <p>I am learning React!</p>
    </main>
  );
}

export default App;`,
      },
    ],
  },
  {
    id: "jsx",
    title: "React JSX",
    heading: "React JSX",
    sections: [
      {
        heading: "What is JSX?",
        text: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files.",
        code: `const title = "Unlocked React";

function App() {
  return <h1>Welcome to {title}</h1>;
}`,
        note: "JSX expressions can use JavaScript values inside curly braces.",
      },
      {
        heading: "JSX Rules",
        text: "Return one parent element or fragment, close every tag, and use className instead of class for CSS classes.",
      },
    ],
  },
  {
    id: "components",
    title: "React Components",
    heading: "React Components",
    sections: [
      {
        heading: "What is a Component?",
        text: "A component is a reusable function that returns JSX. Component names must begin with a capital letter.",
        code: `function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}`,
      },
    ],
  },
  {
    id: "props",
    title: "React Props",
    heading: "React Props",
    sections: [
      {
        heading: "What are Props?",
        text: "Props are values passed from a parent component to a child component. They allow components to receive different data.",
        code: `function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return <Greeting name="Developer" />;
}`,
        output: "Hello, Developer!",
      },
    ],
  },
  {
    id: "events",
    title: "React Events",
    heading: "React Events",
    sections: [
      {
        heading: "Handling Events",
        text: "React uses event handler props such as onClick and onChange to respond to user actions.",
        code: `function App() {
  function sayHello() {
    alert("Hello!");
  }

  return (
    <button onClick={sayHello}>
      Click Me
    </button>
  );
}`,
      },
    ],
  },
  {
    id: "conditionals",
    title: "React Conditionals",
    heading: "Conditional Rendering",
    sections: [
      {
        heading: "Display Content Conditionally",
        text: "You can render different JSX based on a condition using JavaScript expressions.",
        code: `function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? "Welcome Back!" : "Please Login"}
    </h1>
  );
}`,
      },
    ],
  },
  {
    id: "lists",
    title: "React Lists",
    heading: "Lists and Keys",
    sections: [
      {
        heading: "Rendering Arrays",
        text: "Use the JavaScript map() method to render a list of React elements. Each element needs a stable unique key.",
        code: `const languages = ["HTML", "CSS", "React"];

function App() {
  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
  );
}`,
      },
    ],
  },
  {
    id: "forms",
    title: "React Forms",
    heading: "React Forms",
    sections: [
      {
        heading: "Controlled Inputs",
        text: "A controlled input receives its current value from React state and updates state when the user types.",
        code: `import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`,
      },
    ],
  },
  {
    id: "hooks",
    title: "React Hooks",
    heading: "Introduction to Hooks",
    sections: [
      {
        heading: "What are Hooks?",
        text: "Hooks are React functions that let components use features such as state, effects, context and refs.",
        note: "Call Hooks at the top level of React function components or custom Hooks.",
      },
    ],
  },
  {
    id: "usestate",
    title: "React useState",
    heading: "useState Hook",
    sections: [
      {
        heading: "What is useState?",
        text: "useState lets a component remember information between renders and update its user interface.",
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
    ],
  },
  {
    id: "useeffect",
    title: "React useEffect",
    heading: "useEffect Hook",
    sections: [
      {
        heading: "What is useEffect?",
        text: "useEffect synchronizes your component with external systems, such as timers, subscriptions, or browser APIs.",
        code: `import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`,
      },
    ],
  },
  {
    id: "useref",
    title: "React useRef",
    heading: "useRef Hook",
    sections: [
      {
        heading: "What is useRef?",
        text: "useRef stores a value between renders without triggering a re-render when its current property changes. It can also reference a DOM element.",
        code: `import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </>
  );
}`,
      },
    ],
  },
  {
    id: "context",
    title: "React Context",
    heading: "React Context API",
    sections: [
      {
        heading: "What is Context?",
        text: "Context allows components to access shared values without manually passing props through every level of the component tree.",
      },
    ],
  },
  {
    id: "router",
    title: "React Router",
    heading: "React Router",
    sections: [
      {
        heading: "Client-Side Routing",
        text: "React Router is a library for creating navigation between pages and views in a React application.",
        code: `import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`,
      },
    ],
  },
];

export default reactTopics;
