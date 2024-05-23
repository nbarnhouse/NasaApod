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
    <div className="App">
      <h2>This is the sky!</h2>
      <p>Add picture and data here </p>
      {star.title}
      {star.copywright}
      {star.date}
      {star.explanation}
      <img src={star.url} alt="NasaAPOD" />
    </div>
  );
}

export default App;
