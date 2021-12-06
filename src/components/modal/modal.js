import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.css';
import { FaHeartbeat, FaSkull, FaFileMedical } from 'react-icons/fa';

export default function Modal({ onClose, country }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleClickBackdrope = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleClickBackdrope}>
      <div className={s.modal}>
        <h2 className={s.modalHead}>{country.Country}</h2>
        <table>
          <tbody>
            <tr className={s.firstModalItem}>
              <td className={s.criterion}>
                <FaHeartbeat
                  style={{
                    marginRight: 39,
                    height: '30px',
                    width: '30px',
                  }}
                />
                Total Confirmed
              </td>
              <td className={s.meaning}>{country.TotalConfirmed}</td>
            </tr>
            <tr className={s.modalItem}>
              <td>
                <FaSkull
                  style={{
                    marginRight: 39,
                    height: '30px',
                    width: '30px',
                  }}
                />
                Total Deaths
              </td>
              <td>{country.TotalDeaths}</td>
            </tr>
            <tr className={s.modalItem}>
              <td>
                <FaFileMedical
                  style={{
                    marginRight: 39,
                    height: '30px',
                    width: '23px',
                  }}
                />{' '}
                Total Recovered
              </td>
              <td>{country.TotalRecovered}</td>
            </tr>
          </tbody>
        </table>
        <button className={s.button} type="button" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  country: PropTypes.object,
  onClose: PropTypes.func,
};
