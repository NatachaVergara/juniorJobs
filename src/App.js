import { Route, Routes } from 'react-router-dom';
import './App.css';

import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/*" element={<ProfilePage />} />
        {/* {authCtx.isLoggedIn && (
          <>
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
          </>
        )}
        {!authCtx.isLoggedIn && (
          <>
            <Route path="*" element={<Navigate replace to="/auth" />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )} */}
      </Routes>
      </header>
    </div>
  );
}

export default App;
