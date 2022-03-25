import './Header.css';
import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {
  const [keysFilter, setKeysFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const { filterName, setNumFilter } = useContext(DataContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setKeysFilter({ ...keysFilter, [name]: value });
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
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
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
          onClick={ () => setNumFilter(keysFilter) }
        >
          Filtrar

        </button>
      </div>
    </header>
  );
};

export default Header;
