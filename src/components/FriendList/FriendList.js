import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
return (
<ul className={css.friends}>
        {friends.map(friend => (
            <li key={friend.id} className={css.item}>
                <FriendListItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            </li>
        ))}
</ul>
    
)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    }),
    ),
};

