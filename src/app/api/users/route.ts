import { adduser } from "@/controllers/userController";

export async function POST(req: Request) 
{
    try{
        const body = await req.json();

        const result = await adduser(body);

        return Response.json({
            message: "User Added successfully",
            data: result
        });
    }
    catch(error)
    {
        console.error("API ERROR:", error)
        return Response.json(
            {error},
            {status: 500}
        )
    }
    
}