import { useState, useEffect } from 'react';

function UseEffect() {
  const [value, setValue] = useState(0);
  const [fact, setFact] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(resp => resp.json())
    .then(resp => setFact(resp.text))
    .finally(() => setLoading(false));
  }, [refresh]);

  return (
      <>
      {loading &&
        <div className="loader"></div>
      }
      <h1>UseEffect</h1>
      <p>Mygtukas buvo paspaustas {value} kartus.</p>
      <button 
        className="btn btn-primary" 
        onClick={() => {
          setValue(value + 1);
          //Sekantys veiksmai
        }}
      >Paspausk mane</button>
      <h1 className="mt-5">Faktai apie kates</h1>
      <p className="py-3">{fact}</p>
      <button 
        className="btn btn-primary" 
        onClick={() => setRefresh(!refresh)}
      >Naujas faktas apie kates</button>
    </>
  );
}

export default UseEffect;
