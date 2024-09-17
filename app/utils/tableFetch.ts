// import { supabase } from '@/app/utils/supabase'

// export const tableFetch = async () => {
//     const todos = await supabase.from("storys").select("*")
//     return todos.data

// }


import { supabase } from '@/app/utils/supabase'

export const tableFetch = async () => {
    const { data, error } = await supabase.from("storys").select("*")
    if (error) {
        throw error
    }
    return data
}