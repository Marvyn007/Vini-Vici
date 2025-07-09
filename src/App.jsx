import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'https://api.thecatapi.com/v1/breeds';

function App() {
  const [catList, setCatList] = useState([]);
  const [currentCat, setCurrentCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCatList(data);
    };
    fetchCats();
  }, []);

  const getImage = async (cat) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`);
    const data = await res.json();
    return data[0]?.url;
  };

  const handleDiscover = async () => {
    if (!catList.length) return;

    let filtered = catList.filter(cat => {
      return !banList.includes(cat.origin) && !banList.includes(cat.name) && !banList.includes(cat.weight.metric);
    });

    if (!filtered.length) return;

    const randomCat = filtered[Math.floor(Math.random() * filtered.length)];
    const imageUrl = await getImage(randomCat);

    const selected = {
      id: randomCat.id,
      name: randomCat.name,
      breed: randomCat.name,
      weight: randomCat.weight.metric,
      origin: randomCat.origin,
      lifespan: randomCat.life_span,
      image: imageUrl
    };

    setCurrentCat(selected);
    setHistory(prev => [...prev, selected]);
  };

  const toggleBan = (val) => {
    setBanList(prev =>
      prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]
    );
  };

  return (
    <div className="app">
      <div className="history">
        <h3>Who have we seen so far?</h3>
        {history.map((cat, idx) => (
          <div key={idx}>
            <img src={cat.image} alt="cat" />
            <p>{`A ${cat.breed} cat from ${cat.origin}`}</p>
          </div>
        ))}
      </div>

      <div className="main">
        <h1>Veni Vici!</h1>
        <p>Discover cats from your wildest dreams!</p>
        <p>😺😹😻😽😼🙀😿😾</p>

        {currentCat && (
          <div className="cat-card">
            <h2>{currentCat.name}</h2>
            <div className="tags">
              <button onClick={() => toggleBan(currentCat.breed)}>{currentCat.breed}</button>
              <button onClick={() => toggleBan(currentCat.weight)}>{currentCat.weight} lbs</button>
              <button onClick={() => toggleBan(currentCat.origin)}>{currentCat.origin}</button>
              <button>{currentCat.lifespan} years</button>
            </div>
            <img src={currentCat.image} alt="cat" />
          </div>
        )}

        <button className="discover-btn" onClick={handleDiscover}>🔀 Discover!</button>
      </div>

      <div className="banlist">
        <h2>Ban List</h2>
        <p>Select an attribute in your listing to ban it</p>
        {banList.map((item, idx) => (
          <button key={idx} onClick={() => toggleBan(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
