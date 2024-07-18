interface User {
  id: number;
  name: string;
  email: string;
}

export const loadUsers = async (): Promise<User[]> => {
  const response = await fetch('/users.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const users: User[] = await response.json();
  return users;
};

export const initializeLocalStorage = async (): Promise<void> => {
  if (!localStorage.getItem('users')) {
    const users = await loadUsers();
    localStorage.setItem('users', JSON.stringify(users));
  }
};
