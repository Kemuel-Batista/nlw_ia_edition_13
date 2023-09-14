import { api } from "@/lib/axios";

interface IPrompts {
    id: string
    title: string
    template: string
}

export const getAllPrompts = async () => {
    return await api.get<IPrompts[]>('/prompts')
}