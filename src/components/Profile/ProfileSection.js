import css from './Profile.module.css';

function ProfileSection({ children }) {
  return <div className={css.profile}>{children}</div>;
}

export default ProfileSection;
