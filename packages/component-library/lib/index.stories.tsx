import React from 'react';

export default { title: 'Button' };

export const withText = () => <button>Hello Button</button>;

export const withEmoji = () => (
  <button>
    <span role="img" aria-label="so cool">
      dsadsad jkhkjhjk
      😀 😎 👍 💯
    </span>
  </button>
);
