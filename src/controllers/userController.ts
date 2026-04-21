import { createUser } from "@/services/userService";
import { User } from "@/models/user";



export const adduser = async (body: User) => {
    const {name, email, age} = body;

    if(!name || !email){
        throw new Error("Name and Email are Mandatory");
    }

    return await createUser ({name, email, age});
}


