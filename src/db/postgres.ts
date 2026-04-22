import { Pool } from "pg";

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "user_db",
    password: "pg1325",
    port: 5432,
});

pool.connect()
    .then(() => console.log("PostgrSQL Connected"))
    .catch(err => console.log(err)) 