import Profile from './Profile/Profile.js';
import Statistics from './Statistics.js';
import Section from './Section/Section.js';
import FriendList from './FriendList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export  const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats" >
        <Statistics items={data} />
      </Section>

      <FriendList friends={friends} />
    

    </div>
  );
};