import { FileText } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

type ArticleFormProp = {
    handleTitle: (_e: React.ChangeEvent<HTMLInputElement>) => void
    handleContent: (_e: React.ChangeEvent<HTMLTextAreaElement>) => void
    summerizeArticle: () => void
}

export const ArticleForm = ({ handleTitle, handleContent, summerizeArticle }: ArticleFormProp) => {
    return (
        <div className="space-y-4">
            <p className="text-muted-foreground">Paste your article below to generate a summarize and quiz question. Your articles will saved in the sidebar for future reference.</p>

            <div>
                <div className="flex gap-1 items-center mb-2">
                    <FileText size={16} />
                    <p className="text-[14px] font-semibold text-muted-foreground">Article Title</p>
                </div>
                <Input onChange={handleTitle} placeholder="Enter a title for your article" />
            </div>

            <div>
                <div className="flex gap-1 items-center mb-2">
                    <FileText size={16} />
                    <p className="text-[14px] font-semibold text-muted-foreground">Article Content</p>
                </div>
                <Textarea onChange={handleContent} placeholder="Paste your article here" />
            </div>
            <Button onClick={summerizeArticle}>Generate Summery</Button>
        </div>
    )
}
