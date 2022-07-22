import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const spanClasses = [css.status];
  isOnline ? spanClasses.push(css.active) : spanClasses.push(css.off);
  return (
    <div className={css.item}>
      <span className={spanClasses.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
