import { nanoid } from "nanoid";

const conversations = [
  { _id: nanoid(), members: [nanoid(), nanoid()] },
  { _id: nanoid(), members: [nanoid(), nanoid()] },
  { _id: nanoid(), members: [nanoid(), nanoid()] },
];

export const getAllConversation = () => {
  return conversations;
};

export const getConversation = (_id: string) => {
  const conversation = conversations.find(conversation => conversation._id === _id);
  return conversation;
};

export const createConversation = (members: string[]) => {
  const newMember = {
    _id: nanoid(),
    members,
  };
  conversations.push(newMember);
  return newMember;
};
