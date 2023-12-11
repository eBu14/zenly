import { NextResponse } from "next/server";
import { getAllConversation } from "penly/Service/conversation-service";

export const GET = () => {
  const data = getAllConversation();
  return NextResponse.json({data});
};
export const POST = () => {};
export const PATCH = () => {};
export const DELETE = () => {};
