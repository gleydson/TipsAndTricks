import React, { useState, useRef } from 'react';
import debounce from 'lodash/debounce';

export default function InputWithDebounce() {
  const [text, setText] = useState('');

  const delayedQuery = useRef(
    debounce(e => {
      setText(e);
      console.log(e);
    }, 500)
  ).current;

  function handleChange(e) {
    delayedQuery(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <span>=></span>
      <input type="text" onChange={() => { }} value={text} />
    </div>
  );
}