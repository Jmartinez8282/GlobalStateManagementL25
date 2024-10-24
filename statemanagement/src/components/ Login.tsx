import { useState } from 'react';

const Login  = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('Jose!');

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {isLoggedIn ? (
        <div>
          <h2>It is I, {username}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;