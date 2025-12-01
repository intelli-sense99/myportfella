import { NextResponse } from "next/server";
import Admin from "@/app/models/Admin";
import bcrypt from "bcryptjs";
import connectDB from "@/app/lib/dbconnect";

// http://localhost:3000/api/admin/seed    (visit one time seed only)

export async function GET() {
  await connectDB();

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return NextResponse.json({ error: "Missing .env values" }, { status: 400 });
  }

  // Check if already exists
  const exists = await Admin.findOne({ email });
  if (exists) {
    return NextResponse.json({ message: "Admin already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await Admin.create({
    email,
    password: hashed,
  });

  return NextResponse.json({ message: "Admin created successfully" });
}
