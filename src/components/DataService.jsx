export const loadUsers = async () => {
    const response = await fetch('/users.json');
    const users = await response.json();
    return users;
  };
  
  export const initializeLocalStorage = async () => {
    if (!localStorage.getItem('users')) {
      const users = await loadUsers();
      localStorage.setItem('users', JSON.stringify(users));
    }
  };
  