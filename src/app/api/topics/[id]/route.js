import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, body } = await req.json();
  await connectDB();
  await Post.findByIdAndUpdate(id, { title, body });
  return NextResponse.json({ message: "Topic Edited" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();
  const topic = await Post.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
