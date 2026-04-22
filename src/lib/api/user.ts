import { User } from "@/models/user";

export const createUser = async (data: User) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};
