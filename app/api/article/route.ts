import { NextResponse } from "next/server"

import { GoogleGenAI } from "@google/genai"
import { pool } from "@/lib/db"

export const POST = async (request: Request) => {
  const body = await request.json()
  const { title, content, userId } = body

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  })

  const interaction = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: `Please provide a concise summary of the following article: ${content}`,
  })

  console.log(interaction.output_text)

  await pool.query(
    `INSERT INTO articles (title, content, summery, userId) VALUES ($1, $2, $3, $4)`,
    [title, content, interaction.output_text, userId]
  )

  return NextResponse.json({
    message: "Amjilttai summerize hiile",
    summery: interaction.output_text,
  })
}
