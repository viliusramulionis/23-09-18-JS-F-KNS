import { useState } from 'react';
import './Autocomplete.css';

function Autocomplete() {
  const phrases = [
    'How much is the fish?',
    'How old is the earth?',
    'Who build pyramids?',
    'Where to buy new TV',
    'Which is the most popular language in the world',
    'Which is better PHP or Javascript?'
  ];
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData(phrases.filter(val => val.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter search keyword"
        onChange={handleChange}
      />
      {data.map((phrase, index) => <li key={index}>{phrase}</li>)}
    </>
  );
}

export default Autocomplete;
