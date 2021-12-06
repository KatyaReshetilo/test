import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import logo from './logo.jpg';
import s from './filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={s.header}>
      <div className={s.mainHead}>
        <img className={s.logo} src={logo} alt="logo" />
        <h1>Statistic</h1>
      </div>

      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search..."
        />
        <ImSearch
          style={{
            height: '30px',
            width: '30px',
            color: '#666666',
          }}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
