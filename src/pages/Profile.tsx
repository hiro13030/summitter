import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile: {username}</h1>
      {/* TODO: Implement profile information and posts */}
      <p>Profile information and posts will be displayed here</p>
    </div>
  );
};

export default Profile;