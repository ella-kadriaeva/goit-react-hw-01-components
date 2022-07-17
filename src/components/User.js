import PropTypes from 'prop-types';

export default function User({ avatar, username, tag, location }) {
return (
<div class="profile">
    <div class="description">
        <img
        src={avatar}
        alt={username}
        class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
    </div>
</div>
)
};
User.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};