import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
