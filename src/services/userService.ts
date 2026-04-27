import { pool } from "@/db/postgres";
import { User } from "@/models/user";

export const createUser = async (user: User) => {
  try {
    const query = `
      INSERT INTO users 
      (first_name, last_name, email, mobile, city, age)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [
      user.first_name,
      user.last_name,
      user.email.toLowerCase().trim(),
      user.mobile,
      user.city,
      user.age,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];

  } catch (error: unknown) {
    const err = error as { code?: string; message?: string };

    if (err.code === "23505") {
      throw new Error("Email already exists");
    }

    throw new Error(err.message || "Database error");
  }
};
