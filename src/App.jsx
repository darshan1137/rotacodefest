import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="p-6 max-w-sm mx-auto my-7 bg-green-500 rounded-xl shadow-lg flex items-center space-x-4">
        Hello world...!
      </h1>
    </>
  );
}

export default App;
