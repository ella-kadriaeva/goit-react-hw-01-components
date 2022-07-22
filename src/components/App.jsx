import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import Section from './Statistics/Section.js';
import FriendList from './FriendListItem/FriendList';
import Container from './Container/Container.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  
  return (
<Container>
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

      <TransactionHistory transactions={transactions} />

</Container>
  );
};