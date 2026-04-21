import { supabase } from "@/db/supabase";

import { User } from "@/models/user";


export const createUser = async (user: User) => {
    
    const {data, error} = await supabase 
        .from("users")
        .insert([user])
        .select();

    if(error){
        throw new Error(error.message);
    }

    return data;
}



