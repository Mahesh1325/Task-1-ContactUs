import { User } from "@/models/user";
import { createUser } from "@/services/userService";

export const adduser = async (body: User) => {
  const {
    first_name,
    last_name,
    email,
    mobile,
    city,
    age
  } = body;

  const result = await createUser({
    first_name,
    last_name,
    email,
    mobile,
    city,
    age
  });

  return result;
};
