import { supabase } from '@/app/utils/supabase'

export const tableFetch = async () => {
    const todos = await supabase.from("todos").select("*")
    return todos.data

}
