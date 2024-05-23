import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const star = useSelector((store) => store.star);

  useEffect(() => {
    dispatch({ type: 'FETCH_APOD_DATA' });
  });

  return (
    <div className="App">
      <h2>This is the sky!</h2>
      <p>Add picture and data here </p>
      {star.explanation}
    </div>
  );
}

export default App;
