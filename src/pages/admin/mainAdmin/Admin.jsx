import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../../components/admin/navbar/Navbar';

export const Admin = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          axios.get('https://ecohaven.pythonanywhere.com/api/v1/users/me/', {
              headers: {
                'Authorization': `Token ${token}`
              }
          })
          .then((res) => setUser(res.data))
          .catch((error) => {
              console.error(error);
          });
      }
    },[])

    console.log(user);

  return (
    <div className="admin">
        <Navbar user={user}/>
    </div>
  )
}
