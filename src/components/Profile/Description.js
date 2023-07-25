import PropTypes from 'prop-types';
import { Avatar, BlockDescription, Name, Tag, Location } from './ProfileSt.steiled';
export default function Descriptions({ avatar, username, tag, location }) {
  return (
    <BlockDescription>
          <Avatar src={avatar } alt={username} />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </BlockDescription>
  );
}
Descriptions.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
