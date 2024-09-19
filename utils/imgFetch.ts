import { supabase } from '@/utils/supabase'

export async function imgtestFetch() {
    try {
        const { data } = await supabase
            .storage
            .from('vercel-2_storage')
            .getPublicUrl('toypootest.webp');
        return data;
    }
    catch (error: any) {
        console.error('Error fetching file from Supabase:', error.message);
        return null;
    }
}