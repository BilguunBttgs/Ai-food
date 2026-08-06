// userId gaarn articlesaa avchirah
// Dynamic params [userId] =>

import { pool } from "@/lib/db"
import { NextResponse } from "next/server"

// axios.get('/api/article/user_2xJ4Z9nrLGF7uAx3H9YMYb4q4Fr')
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) => {
  const parameter = await params

  const data = await pool.query("SELECT * FROM articles WHERE userId = $1", [
    parameter.userId,
  ])

  return NextResponse.json({
    message: "Articlaa av",
    data: data.rows,
  })
}
