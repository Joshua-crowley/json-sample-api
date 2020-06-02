import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Users() {

  useEffect(() => {
    fetchUsers();
  },[]);

  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
      );
    const users = await data.json();
    console.log(users);
    setUsers(users);

  };

 
    return ( 
      <div>
        {users.map(user => (
          <h1 key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </h1>
        ))}
      </div> 
    );
}
 
export default Users;