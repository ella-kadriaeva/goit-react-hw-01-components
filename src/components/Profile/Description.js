import PropTypes from 'prop-types';
import css from './Profile.module.css';
export default function Descriptions({ avatar, username, tag, location }) {
  return (
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
}
Descriptions.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
