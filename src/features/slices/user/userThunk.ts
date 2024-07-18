import { createAsyncThunk } from '@reduxjs/toolkit';
import users from '../../../asset/users.json';
import { User } from '../../../types';


export const getUserListThunk = createAsyncThunk<User[]>(
    'user/getUserList',
    async () => {
      const UserListPromise = new Promise<User[]>((resolve, reject) => {
        setTimeout(() => {
          if (users.length > 0) {
            resolve(users as User[]);
          } else {
            reject('Void Array');
          }
        }, 200);
      });
  
      return UserListPromise
        .then((list) => list)
        .catch((error) => { throw new Error(error) });
    }
  );
  
  export const getUserThunk = createAsyncThunk<User, { id: string, list: User[] }>(
    'user/getUser',
    async ({ id, list }) => {
      const UserPromise = new Promise<User>((resolve, reject) => {
        setTimeout(() => {
          const userObject = list.filter(user => user.id === (id));
          if (userObject.length > 0) {
            resolve(userObject[0]);
          } else {
            reject('User Not Found');
          }
        }, 200);
      });
  
      return UserPromise
        .then((object) => object)
        .catch((error) => { throw new Error(error) });
    }
  );