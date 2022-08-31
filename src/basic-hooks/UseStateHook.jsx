import { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

function UseStateHook() {
  return (
    <div>
      <h2>UseStateHook</h2>
      <Counter initialCount={0} />
    </div>
  );
}

export default UseStateHook;
