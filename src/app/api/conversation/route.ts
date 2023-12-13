import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { createConversation, getAllConversation } from "penly/Service/conversation-service";



export const GET = async (request: NextRequest) => {
 try{
    const result  = await getAllConversation();
    return NextResponse.json(result);
 } catch (error) {
    console.error(error);
 }
};
export const POST = async (request: NextRequest) => {
    const data = await request.json();
    const {members} = data;
    const createdData = await createConversation(members);
    return NextResponse.json(createdData);
};
