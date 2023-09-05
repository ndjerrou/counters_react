import { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleKey = e => {
    if (e.key === 'Enter') {
      setCount(e.target.value);

      setIsClicked(false);

      setIsActive(true);
    }
  };

  const handleClick = e => {
    setIsActive(true);
    setIsClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        <input type='number' onKeyDown={handleKey} />
      ) : (
        <p onClick={handleClick}>Count : {count}</p>
      )}
      <button disabled={isActive} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button disabled={isActive} onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button disabled={isActive} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
