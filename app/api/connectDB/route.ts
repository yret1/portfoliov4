import { connectToMongoDB } from "@/lib/mongo";
import { NextApiRequest, NextApiResponse } from "next";


export async function POST(req: NextApiRequest, res: NextApiResponse) {


    try {
        const client = await connectToMongoDB();
        const db = client.db("Projects");
        const collection = db.collection("myProjects");
        const projects = await collection.find().toArray();

      
       return Response.json({projects : projects})
    }catch(err) {
       return res.json({error : err});
    }
}