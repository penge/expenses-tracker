import bcrypt from "bcryptjs";

import { stall } from "./helpers";

export default async function signin(email: string, password: string) {
  // Login fails if no credentials are provided
  if (!email || !password) {
    return false;
  }

  await stall(); // Simulate a connection

  const users = JSON.parse(localStorage.getItem("users") as string);
  if (!users || !users[email]) { // User is not registered
    return false;
  }

  const { salt, hash: expectedHash } = users[email]; // retrieve user

  // Check the credentials by comparing the hashes
  const hash = bcrypt.hashSync(password, salt);
  const isAuthenticated = hash === expectedHash;
  if (isAuthenticated) {
    localStorage.setItem("email", email);
  }

  return isAuthenticated;
}
