import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
return (
<ul class="friend-list">
        {friends.map(friend => (
            <li key={friend.id} class="item">
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

