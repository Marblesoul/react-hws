import { FormEvent, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function LoginForm() {
  const { login } = useAuth();
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(loginValue, password);
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Не удалось войти');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        aria-label="Login"
        autoComplete="username"
        onChange={(event) => setLoginValue(event.target.value)}
        placeholder="Username"
        type="text"
        value={loginValue}
      />
      <input
        aria-label="Password"
        autoComplete="current-password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <button disabled={loading} type="submit">
        {loading ? 'Signing in...' : 'Login'}
      </button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
}
