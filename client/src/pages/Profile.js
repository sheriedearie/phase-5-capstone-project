import React, { useContext } from 'react'
import { UserContext } from '../components/User'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Profile() {
  const { user } = useContext(UserContext);
  const avatarURL = user.avatar === null ? window.location.origin + '/default-avatar.png' : user.avatar.url;

  if (!user) return <h2> Please Login to View Profile</h2>;
  console.log(user.avatar)
  return (
    <div>
      
      {user && <h2>Welcome back {user.name}!</h2>}
      <Card className="card" elevation={0}>

        <CardContent align="center">

          <img src={avatarURL} alt="avatar" />

        </CardContent>
      </Card>
    </div>
  );
}

export default Profile