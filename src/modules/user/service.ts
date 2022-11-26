import { User } from "./definitions";
import { server } from "../../config";

export async function getUser(): Promise<User> {
  const response = await fetch(`${server}/api/data`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response?.ok) {
    throw new Error("Failed to get user");
  }
  return await response.json();
}
