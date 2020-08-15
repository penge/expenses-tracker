import bcrypt from "bcryptjs";

import { stall } from "./helpers";

export default async function signup(email: string, password: string) {
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
