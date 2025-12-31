import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [advice, setAdvice] = useState("Hello World!");
  const [count, setCount] = useState(0);

  useEffect(function () {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>

      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

