import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import DataContext from './context/DataContext';

function App() {
  const [data, setData] = useState([]);
  const [arrKeys, setArrKeys] = useState([]);

  const returnApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await (await fetch(url)).json();
    setData(response.results);
    setArrKeys(Object.keys(response.results[0]));
    return response;
  };

  useEffect(() => {
    returnApi();
  }, []);

  return (
    <DataContext.Provider value={ { data, arrKeys } }>
      <Table />
    </DataContext.Provider>
  );
}

export default App;
