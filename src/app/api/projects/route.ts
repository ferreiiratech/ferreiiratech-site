import { NextResponse } from "next/server"
import { projects } from "./data"
import {getDb} from "@/lib/db"

export async function GET() {
  const db = await getDb();
  const users = await db.collection("users").find().toArray();
  
  return NextResponse.json(projects)
}
