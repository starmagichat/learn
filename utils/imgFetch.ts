import { supabase } from '@/utils/supabase'

export async function imgtestFetch() {
    try {
        const { data } = await supabase
            .storage
            // .from(fromStorage)
            .from('vercel-2_storage')
            // .getPublicUrl('https://lgoadopmhowcddsnmtac.supabase.co/storage/v1/object/public/vercel-2_storage/vercel-2_storage/toypootest.webp');
            .getPublicUrl('toypootest.webp');
        return data;
    }
    catch (error: any) {
        console.error('Error fetching file from Supabase:', error.message);
        return null;
    }
}