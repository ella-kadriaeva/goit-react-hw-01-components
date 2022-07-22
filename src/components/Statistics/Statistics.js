import Statistic from './Statistic';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistics({ items }) {
  return (
    <ul className={css.block}>
      {items.map(item => (
        <Statistic
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
