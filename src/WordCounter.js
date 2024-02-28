// src/WordCounter.js
import React, { useState } from 'react';
import './WordCounter.css'; // Import the corresponding CSS file

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Count words by splitting the text using a regular expression
    const words = newText.match(/\b\w+\b/g) || [];
    setWordCount(words.length);
  };

  const handleReset = () => {
    setText('');
    setWordCount(0);
  };

  return (
    <div className="WordCounter">
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows={8} // Increase the number of rows to make the textarea larger
      />
      <p>Word Count: {wordCount}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default WordCounter;
