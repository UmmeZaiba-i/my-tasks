// Fetching Data with useEffect
import React, {useState, useEffect} from 'react'
interface User{
    name:string,
    email:string,
    id:number;
    username:string;
}
const User = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();                                                                                                       
  return (
    <div>
      <ul>

      </ul>
    </div>
  )
}

export default User
