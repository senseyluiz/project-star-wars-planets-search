import './Header.css';
import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {
  const [keysFilter, setKeysFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const {
    filterName,
    setNumFilter,
    filterNumeric: { filterByNumericValues },
    removeFilter,
    options,

    setFilterNumeric } = useContext(DataContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setKeysFilter({ ...keysFilter, [name]: value });
  };

  const delFilter = (key) => {
    // console.log(key);
    // filterByNumericValues.forEach((element) => {
    //   if (element.column === key) {
    setFilterNumeric((prevstate) => ({
      ...prevstate,
      filterByNumericValues: [...filterByNumericValues
        .filter(({ column }) => column !== key)],
    }));
    // }
  };
  // };

  const handleClick = (flterColumn) => {
    setNumFilter(flterColumn);
    setKeysFilter((prevstate) => ({
      ...prevstate,
      column: prevstate.colum,
    }));
    console.log('TESTE', options);
  };
  return (
    <header>
      {/* <h1> Star Wars</h1> */}
      <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Emblema.png" alt="logo" />
      <input
        type="text"
        className="filterText"
        onChange={ filterName }
        data-testid="name-filter"
      />

      <div className="filtros">
        <label htmlFor="colun">
          Coluna
          <select
            id="colun"
            name="column"
            value={ keysFilter.column }
            data-testid="column-filter"
            onChange={ handleChange }
          >
            {
              options.map((option) => (
                <option key={ option } value={ option }>
                  {option}
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="operador">
          Operador
          <select
            id="operador"
            name="comparison"
            value={ keysFilter.comparison }
            data-testid="comparison-filter"
            onChange={ handleChange }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <input
          type="number"
          id="filterNumber"
          name="value"
          value={ keysFilter.value }
          data-testid="value-filter"
          onChange={ handleChange }
        />

        <button
          type="button"
          className="btnFilter"
          data-testid="button-filter"
          onClick={ () => handleClick(keysFilter) }
        >
          Filtrar

        </button>

        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removeFilter }
        >
          Remover todas filtragens
        </button>
      </div>
      <div className="selectFilter">
        {

          filterByNumericValues.map(({ column, comparison, value }) => (

            <p data-testid="filter" key={ column } id={ column }>
              {' '}
              {`${column} ${comparison} ${value}`}
              {' '}
              <button
                type="button"
                onClick={ () => delFilter(column) }
              >
                X
              </button>
              {' '}
            </p>
          ))
        }
      </div>
    </header>
  );
};

export default Header;
