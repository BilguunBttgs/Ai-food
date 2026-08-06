"use client"
import { ArticleForm } from "@/components/ArticleForm"
import { SummerySection } from "@/components/SummerySection"
import { useAuth } from "@clerk/nextjs"
import axios from "axios"
import { Sparkles } from "lucide-react"
import { useState } from "react"

export default function Page() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [summery, setSummery] = useState("")

  const { userId } = useAuth()

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setContent(value)
  }

  const summerizeArticle = async () => {
    console.log("Minii bichsen utga", { title, content, userId })
    const response = await axios.post("/api/article", {
      title,
      content,
      userId,
    })
    console.log("response", response)
    setSummery(response.data.summery)
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-secondary">
      <header>hello header</header>
      <div className="w-200 space-y-4 rounded-2xl border bg-background p-7">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Sparkles />
          Article Quiz Generator
        </h2>
        {summery ? (
          <SummerySection title={title} content={content} summery={summery} />
        ) : (
          <ArticleForm
            handleContent={handleContent}
            handleTitle={handleTitle}
            summerizeArticle={summerizeArticle}
          />
        )}
      </div>
    </main>
  )
}
