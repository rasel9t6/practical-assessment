export const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};
export const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUser = async (email, password) => {
  const users = getUsersFromLocalStorage(); 

  if (users.email === email && users.password === password) {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (localCart.length > 0) {
      users.cart = [...new Set([...users.cart, ...localCart])];
      saveUsersToLocalStorage(users); 
      localStorage.removeItem('cart');
    }

    return users; 
  } else {
    return null;
  }
};

export const createUser = async ({ name, email, phone, password, cart }) => {
  const users = getUsersFromLocalStorage();

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('Email already in use. Please use a different email.');
  }

  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
    password,
    cart,
  };

  users.push(newUser);
  saveUsersToLocalStorage(users);

  return newUser;
};
export const logOut = () => {
  localStorage.removeItem('users');
};
