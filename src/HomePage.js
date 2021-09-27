import { useState, useEffect } from 'react';
import BreedButton from './BreedButton';

function Home() {
  const url = 'https://dog.ceo/api/breeds/list/all';
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [breed, setBreed] = useState([]);

  const fetchBreed = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newBreed = Object.keys(data.message);
    setBreed(newBreed);
    setLoading(false);
  };

  useEffect(() => {
    fetchBreed();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Doggy Pics</h1>
        <h3>select breed and browse dog pics!</h3>
      </header>
      <div className="button-container">
        {breed.map((item, index) => {
          return (
            <BreedButton
              key={index}
              item={item}
              className="button-breed"
            ></BreedButton>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
