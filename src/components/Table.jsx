import './Table.css';
import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Table = () => {
  const { arrKeys, data, filter: { filterByName: { name } } } = useContext(DataContext);
  const dataFilter = data.filter((planet) => planet.name.includes(name));
  console.log(name);

  return (
    <table className="Table">
      <thead>
        <tr>
          {
            arrKeys.map((key, index) => key !== 'residents'
             && <th key={ index }>{key}</th>)
          }
        </tr>
      </thead>

      <tbody>
        {
          dataFilter.map((planet, index) => (
            <tr key={ index }>
              <td>
                {planet.name}
              </td>

              <td>
                {planet.rotation_period}
              </td>

              <td>
                {planet.orbital_period}
              </td>

              <td>
                {planet.diameter}
              </td>

              <td>
                {planet.climate}
              </td>

              <td>
                {planet.gravity}
              </td>

              <td>
                {planet.terrain}
              </td>

              <td>
                {planet.surface_water}
              </td>

              <td>
                {planet.population}
              </td>

              <td>
                {planet.films}
              </td>

              <td>
                {planet.created}
              </td>

              <td>
                {planet.edited}
              </td>

              <td>
                {planet.url}
              </td>

            </tr>

          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
