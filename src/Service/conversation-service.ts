import axios from "axios";
import { nanoid } from "nanoid";
import { Conversation } from "penly/types";
import { mongoApiRequest } from "penly/utils/mongoApiRequest";

const conversations = [
  { _id: nanoid(), members: [nanoid(), nanoid()] },
  { _id: nanoid(), members: [nanoid(), nanoid()] },
  { _id: nanoid(), members: [nanoid(), nanoid()] },
];


// api url = ap-south-1.aws.data.mongodb-api.com/app/data-gxuhn/endpoint/data/v1
// api key =  iD6fmjlp3xdLkseDaCgQPd4rc1NX7qhOOC2IAQi0U1WHrZW1TK23HDBTESvRWc5A;


export const getAllConversation = async (): Promise<Conversation[]> => {
  const {response , error} = await mongoApiRequest('find' , 'conversations' , {});
  if(error){
    console.log(error);
    return [];
  }
  return response.documents;
};

export const getConversation = async (_id: string): Promise<Conversation | null> => {
  const { response, error } = await mongoApiRequest(
    "findOne",
    "conversations",
    { filter: { _id } }
  );
  if (error) {
    console.log(error);
    return null;
  }
  return response;
};

export const createConversation = async (members: string[]): Promise<Conversation | null>  => {
  const newConversation = {
    _id: nanoid(),
    members,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
   const { response, error } = await mongoApiRequest("insertOne","conversations",{
    document: newConversation,
   });
   if(error) {
    console.error(error);
    return null
   }
   return newConversation;
};

