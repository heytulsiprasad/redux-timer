import React from 'react';
import Timer from "./containers/Timer/Timer";
import "./tailwind.generated.css";

function App() {
  return (
    <div>
      <h1 className="text-5xl md:text-4xl text-center font-thin pt-8 px-6">Redux Stopwatch</h1>
      <Timer />
    </div>
  );
}

export default App;