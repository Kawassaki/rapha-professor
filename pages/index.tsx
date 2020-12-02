import React, { useState } from 'react';

const Home: React.FC = () => {
  return (
    <Count />
  );
}

const Count: React.FC = () => {
  const [count, setCount] = useState(1);
  const handleOnAdd = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        {count}
        <button onClick={handleOnAdd}>Add</button>
      </div>
    </div>
  );
}

export default Home;