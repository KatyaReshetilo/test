import PropTypes from 'prop-types';
import s from './buttonBySort.module.css';

export default function ButtonBySort({ onClick, children }) {
  return (
    <button className={s.sortButton} onClick={onClick} type="button">
      {children}
    </button>
  );
}
ButtonBySort.propTypes = {
  onClick: PropTypes.func,
};
