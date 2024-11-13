export const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};
export const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUser = async (email, password) => {
  const users = getUsersFromLocalStorage();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];

    if (localCart.length > 0) {
      user.cart = [...new Set([...user.cart, ...localCart])];
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.removeItem('cart');
    }
    return user || null;
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
