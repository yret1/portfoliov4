import { connectToMongoDB } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {


    try {
        const client = await connectToMongoDB();
        const db = client.db("Projects");
        const collection = db.collection("myProjects");
        const projects = await collection.find().toArray();

      
       return Response.json({projects : projects})
    }catch(err) {
       return Response.json({error : err})
    }
}