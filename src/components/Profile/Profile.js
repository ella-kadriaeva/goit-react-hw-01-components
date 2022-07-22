import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({ stats }) {
  const { followers, views, likes } = stats;
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
}
Profile.propTypes = {
  stats: PropTypes.object.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
