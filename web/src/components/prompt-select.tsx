import { useQuery } from '@tanstack/react-query'
import { getAllPrompts } from "@/services/prompts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface PromptSelectProps {
  onPromptSelected: (template: string) => void
}

export function PromptSelect(props: PromptSelectProps){
  const { data: prompts } = useQuery(["prompts"], async () => getAllPrompts());

  function handlePromptSelected(promptId: string){
    const selectedPrompt = prompts?.data.find(prompt => prompt.id === promptId)

    if(!selectedPrompt){
      return
    }

    props.onPromptSelected(selectedPrompt.template)
  }

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.data?.map(prompt => {
          return (
            <SelectItem key={prompt.id} value={prompt.id}>{prompt.title}</SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}