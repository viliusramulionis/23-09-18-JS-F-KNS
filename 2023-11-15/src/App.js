import './App.css';
import image from './icon.png';

// Komponentas
const App = () => {
  const x = 10;
  const masyvas = ['HP', 'Lenovo', 'Macbook'];
  // const reiksme = `Test ${x}`;
  // const funkcija = () => {
  //   return 'Reikšmė';
  // }

  // Komponentas grąžina atgal JSX sintakse aprašytą šabloną
  return (
    // <> Fragmentas (Fragment)
    <>
        <h1>Sveiki Visi</h1>
        {/* class atributas JSX sintaksėje neegzistuoja, vietoje jo rašome className */}
        <div className="black">Reikšmė yra: {x}</div>
        {/* Savaime užsidarantys elementai privalo pabaigoje turėti pasvirą brūkšnį */}
        <img src={image} alt="Nuotrauka" />
        <h2>Sąrašas:</h2>,
        {masyvas.map(el => <li>{el}</li>)}
    </>
  );
}

export default App;
