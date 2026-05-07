import { LoginForm } from './LoginForm';

export function Landing() {
  return (
    <>
      <header className="toolbar">
        <div className="brand">Neto Social</div>
        <LoginForm />
      </header>

      <main className="landing">
        <div className="landing-copy">
          <p className="eyebrow">Welcome back</p>
          <h1>Neto Social</h1>
          <p>
            Авторизуйтесь, чтобы открыть персональную ленту новостей и профиль.
          </p>
        </div>
      </main>
    </>
  );
}
