
import React from 'react';
import { useAuthContext } from '../contexts/auth-context';

const ProfilePage = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
};

export default ProfilePage;
