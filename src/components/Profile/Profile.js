
import PropTypes from 'prop-types';
import { Stats, StatsHead, Label, Quantity } from './ProfileSt.steiled.js';
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
      <Stats>
        <StatsHead >
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsHead>
        <StatsHead >
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsHead>
        <StatsHead >
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsHead>
      </Stats>
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
