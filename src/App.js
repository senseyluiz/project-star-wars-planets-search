import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import DataContext from './context/DataContext';

function App() {
  const [data, setData] = useState([]);
  const [arrKeys, setArrKeys] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [filterNumeric, setFilterNumeric] = useState({
    filterByNumericValues: [],
  });
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  // Função que adiciona filtro no filterNumeric
  const setNumFilter = (filtro) => {
    setFilterNumeric((previstate) => ({
      ...previstate,
      filterByNumericValues: [...previstate.filterByNumericValues,
        filtro,
      ],
    }));
    const teste = options.filter((option) => option !== filtro.column);
    setOptions(teste);
  };

  // Função que remove todos os filtros
  const removeFilter = () => {
    setFilterNumeric(() => ({
      filterByNumericValues: [],
    }));
  };

  // Função que filtra pela digitação
  const filterName = ({ target }) => {
    setFilter((previstate) => ({
      ...previstate,
      filterByName: { name: target.value },
    }));
  };

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
    <DataContext.Provider
      value={ {
        data,
        arrKeys,
        filterName,
        filter,
        filterNumeric,
        setNumFilter,
        removeFilter,
        options,
        setOptions,
        setFilterNumeric,
      } }
    >
      <Header />
      <Table />
    </DataContext.Provider>
  );
}

export default App;
