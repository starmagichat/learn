import { supabase } from '@/app/utils/supabase'

export const tableFetch = async () => {
    const { data, error } = await supabase.from("storys").select("*")
    if (error) {
        throw error
    }
    return data
}