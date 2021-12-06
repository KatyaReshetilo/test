import { useState } from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import s from './countryTable.module.css';
import ButtonBySort from '../buttonBySort/buttonBySort';

export default function CountryTable({ countries, openModal }) {
  const [sort, setSort] = useState(false);

  const getCoutryName = ev => {
    openModal(ev.target.innerText);
  };

  const clickByMax = () => {
    setSort(!sort);
    countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed);
  };
  const clickByMin = () => {
    setSort(!sort);
    countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
  };

  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.firstHead}>№</th>
          <th className={s.countryHead}>Country</th>
          <th className={s.lasttHead}>
            Total Confirmed
            <ButtonBySort onClick={clickByMax}>
              <FaArrowCircleUp
                style={{
                  height: '30px',
                  width: '30px',
                  color: '#FFFFFF',
                }}
              />
            </ButtonBySort>
            <ButtonBySort onClick={clickByMin}>
              <FaArrowCircleDown
                style={{
                  height: '30px',
                  width: '30px',
                  color: '#FFFFFF',
                }}
              />
            </ButtonBySort>
          </th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={country.Country} className={s.content}>
            <td className={s.firstHead}>{index + 1}</td>
            <td className={s.country} onClick={getCoutryName}>
              {country.Country}
            </td>
            <td className={s.lasttHead}>{country.TotalConfirmed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CountryTable.propTypes = {
  countries: PropTypes.array,
  openModal: PropTypes.func,
};
