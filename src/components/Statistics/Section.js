import PropTypes from 'prop-types';
import css from './Statistic.module.css';
export default function Section({ title, children }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
