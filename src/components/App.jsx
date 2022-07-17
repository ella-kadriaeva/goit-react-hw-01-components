import User from './User.js';
import user from '../user.json';

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
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      />
    </div>
  );
};