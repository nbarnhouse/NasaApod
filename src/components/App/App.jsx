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
    <div className="">
      <h1>{star.title}</h1>
      <p>{star.date}</p>
      <p>{star.explanation}</p>
      <p>
        <img src={star.url} alt="NasaAPOD" />
      </p>
    </div>
  );
}

export default App;
