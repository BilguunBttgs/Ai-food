import { FileText } from "lucide-react"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"

type SummerySectionProps = {
  title: string
  content: string
  summery: string
}

type Quiz = {
  questions: {
    question: string
    options: string[]
    answer: number
  }[]
}

export const SummerySection = ({
  title,
  content,
  summery,
}: SummerySectionProps) => {
  const [quiz, setQuiz] = useState<Quiz | undefined>()

  const generateQuiz = async () => {
    const response = await axios.post("/api/quiz", { content })
    setQuiz(response.data.quiz)
    console.log("response", response)
  }
  return (
    <div className="space-y-4">
      <div className="mb-2 flex items-center gap-1">
        <FileText size={16} />
        <p className="text-[14px] font-semibold text-muted-foreground">
          Summerized Content
        </p>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{summery}</p>

      <div className="mb-2 flex items-center gap-1">
        <FileText size={16} />
        <p className="text-[14px] font-semibold text-muted-foreground">
          Content
        </p>
      </div>
      <p className="h-36 truncate text-wrap">{content}</p>

      <Button onClick={generateQuiz}>Take a quiz</Button>

      {quiz?.questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <div className="space-y-2">
            {question.options.map((option) => (
              <div key={option} className="rounded-md border p-3">
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
