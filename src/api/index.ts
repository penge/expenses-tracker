import bcrypt from "bcryptjs";

// Simulate a connection
async function stall(stallTime = 600) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

async function signup(email : string, password: string) {
  // Signup fails if no credentials are provided
  if (!email || !password) {
    return false;
  }

  await stall(); // Simulate a connection

  const users = JSON.parse(localStorage.getItem("users") as string) || {};
  if (email in users) { // User already exists
    return false;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  users[email] = { salt, hash }; // Add a new user

  localStorage.setItem("users", JSON.stringify(users)); // Save
  localStorage.setItem("email", email);

  return true;
}

async function login(email : string, password: string) {
  // Login fails if no credentials are provided
  if (!email || !password) {
    return false;
  }

  await stall(); // Simulate a connection

  const users = JSON.parse(localStorage.getItem("users") as string);
  if (!users || !users[email]) { // User is not registered
    return false;
  }

  const { salt, hash : expectedHash } = users[email]; // retrieve user

  // Check the credentials by comparing the hashes
  const hash = bcrypt.hashSync(password, salt);
  const isAuthenticated = hash === expectedHash;
  if (isAuthenticated) {
    localStorage.setItem("email", email);
  }

  return isAuthenticated;
}

export default {
  signup,
  login
};
