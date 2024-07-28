import { useState } from 'react';
import useGithubUser from './UseGithubUser';


export function GithubUser() {
  const [username, setUsername] = useState('mojombo');
  const { user, error, loading } = useGithubUser(username);

  return (
    <div>
      <h1>GitHub User Information</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
        <h2>{user.name}</h2>
        <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}


