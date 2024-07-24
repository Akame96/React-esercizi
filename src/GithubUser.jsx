import { useState, useEffect } from "react";


export function GithubUser({ username }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      }
      fetchData();
    }, [username]);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div>
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="50" />
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
      </div>
    );
  }