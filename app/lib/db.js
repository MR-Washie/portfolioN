import mysql from "mysql2/promise";


export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "newpassword",
    database: "portfolio",
})

try {
    const connection = await db.getConnection();
    console.log("Database connected successfully!");
    connection.release();
} catch (error) {
    console.error("Database connection failed: ", error);
    process.exit(1);
}