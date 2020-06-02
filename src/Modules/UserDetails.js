import React, { useEffect, useState } from 'react';


function UserDetail ({ match }) {

  useEffect(() => {
    fetchUser();
    console.log(match);
  },[]);

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
    const user = await fetchUser.json();
    setUser(user);

    console.log(user);
  }

 
    return ( 
      <div>
        <h1>{user.name}</h1>
      </div> 
    );
}
 
export default UserDetail;