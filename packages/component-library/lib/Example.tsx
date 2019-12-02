import React, { ReactNode, useState } from 'react';

export interface ExampleProps {
  text: string;
  content: ReactNode;
}

export function Example({ content, text }: ExampleProps) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter((prevCounter: number): number => prevCounter + 1);

  return (
    <div>
      <button onClick={handleClick}>Increment Counter</button>
      <br />
      <p>You clicked {counter} times!</p>
    </div>
  );
}
