// Utility function to get all users from localStorage (mock database)
const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Utility function to save all users to localStorage
const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Mock function to verify user credentials
export const getUser = async (email, password) => {
  const users = getUsersFromLocalStorage();

  // Check if a user with the provided email and password exists
  return (
    users.find((user) => user.email === email && user.password === password) ||
    null
  );
};

// Mock function to create a new user
export const createUserInDb = async ({ name, email, phone, password }) => {
  const users = getUsersFromLocalStorage();

  // Check if the email is already in use
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('Email already in use. Please use a different email.');
  }

  // Create a new user object
  const newUser = { id: Date.now(), name, email, phone, password };

  // Add the new user to the list and save to localStorage
  users.push(newUser);
  saveUsersToLocalStorage(users);

  return newUser;
};
