import { useAuth } from '../context/AuthContext';

export function Toolbar() {
  const { logout, profile } = useAuth();

  return (
    <header className="toolbar">
      <div className="brand">Neto Social</div>
      {profile && (
        <div className="profile">
          <span>Hello, {profile.name}</span>
          <img src={profile.avatar} alt={profile.name} />
          <button onClick={logout} type="button">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
