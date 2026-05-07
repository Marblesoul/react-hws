import { Landing } from './components/Landing';
import { NewsFeed } from './components/NewsFeed';
import { Toolbar } from './components/Toolbar';
import { useAuth } from './context/AuthContext';

export default function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Landing />;
  }

  return (
    <>
      <Toolbar />
      <NewsFeed />
    </>
  );
}
