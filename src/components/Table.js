import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Table = () => {
  const { arrKeys, data } = useContext(DataContext);
  console.log('CHAVES: ', arrKeys);
  console.log('DATA: ', data);

  return (
    <table border="1">
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
          data.map((planet, index) => (
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
