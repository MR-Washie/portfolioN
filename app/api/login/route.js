import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { db } from "@/app/lib/db";

export async function POST(req) {
  const { email, password } = await req.json();

  const [admin] = await db.execute(
    "SELECT * FROM admin WHERE email = ?",
    [email]
  );

  if (admin.length === 0) {
    return NextResponse.json({ error: "Admin not found" }, { status: 401 });
  }

  const user = admin[0];

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  const response = NextResponse.json({ message: "Login success" });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}