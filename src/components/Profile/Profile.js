import PropTypes from 'prop-types';
import css from './Profile.module.css';
import Descriptions from './Description.js';
export default function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <>
      <Descriptions
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
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
    </>
  );
}
Profile.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
