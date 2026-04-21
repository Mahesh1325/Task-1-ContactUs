import { adduser } from "@/controllers/userController";


export async function POST(req: Request){
    try{
        const body = await req.json();

        const result = await adduser(body);

        return Response.json({
            message: "User added Successfully",
            data: result
        })
    }

    catch(error: unknown){
        console.error("Error adding user:", error);
        return Response.json(
            {error: "User not added in DB"},
            {status: 500}
        )
    }

}