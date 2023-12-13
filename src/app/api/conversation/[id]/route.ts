import { NextRequest, NextResponse } from "next/server";
import { getAllConversation, getConversation } from "penly/Service/conversation-service";
import { getPathVariable } from "penly/utils/url";

export const GET = async (request: NextRequest) => {
  

    const _id = getPathVariable(request , "/api/conversation/");
    const result = await getConversation(_id);    
    if(result === null) {
        return NextResponse.json({message : "Not found" } , {status : 404})
    }
    return NextResponse.json(result);
}
export const PATCH = (request: NextRequest) => {

};
export const DELETE = (request: NextRequest) => {};