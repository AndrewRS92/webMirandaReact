import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  workstation: string;
  number_phone: string;
  start_date: string;
  description: string;
  state: boolean;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updatedUser: User) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/src/asset/users.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users: User[] = await response.json();
      console.log('Fetched users:', users);

      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        setUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error fetching data:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: User) => (u.id === updatedUser.id ? updatedUser : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser, isEditing, setIsEditing }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
