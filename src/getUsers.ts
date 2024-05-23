import { UserType } from "./types/UserType";

export async function getUsers(): Promise<UserType[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}