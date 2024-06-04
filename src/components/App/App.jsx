import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const star = useSelector((store) => store.star);

  useEffect(() => {
    dispatch({ type: 'FETCH_APOD_DATA' });
  }, [dispatch]);

  return (
    <div className="container glass">
      <div className="card">
        <div className="card-title">
          <h2>{star.title}</h2>
        </div>
        <div className="card-left">
          <h4>Date:</h4>
          {star.date}
          <h4>Description:</h4>
          <p style={{ display: 'block', margin: '10px' }}>{star.explanation}</p>
        </div>
        <div className="card-right">
          <img src={star.url} alt="NasaAPOD" />
        </div>
      </div>
    </div>
  );
}

export default App;
