export const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUser = async (email, password) => {
  const users = getUsersFromLocalStorage();
  console.log(users);
  return (
    [users].find(
      (user) => user.email === email && user.password === password
    ) || null
  );
};

export const createUser = async ({ name, email, phone, password, cart }) => {
  const users = getUsersFromLocalStorage();

  // Check if the email is already in use
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('Email already in use. Please use a different email.');
  }

  // Create a new user object with a dynamically generated user ID
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
