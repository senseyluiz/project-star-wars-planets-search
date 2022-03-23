import './Header.css';
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {
  const { filterName } = useContext(DataContext);

  return (
    <header>
      <h1> Star Wars</h1>
      <input
        type="text"
        className="filterText"
        onChange={ filterName }
        data-testid="name-filter"
      />
    </header>
  );
};

export default Header;
