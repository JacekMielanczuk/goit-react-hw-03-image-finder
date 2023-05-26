import styles from './button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};