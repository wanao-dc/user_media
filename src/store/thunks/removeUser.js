import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // ici on retourne user car l'api retourne un objet vide
  // user nous permettra d'identifier l'utilisateur supprimé dans le reducer
  return user;
});

export { removeUser };
