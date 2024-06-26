import { Router } from "express";
import { createConversation, createMessage } from "../../controllers";
import { updateConversation } from "../../controllers";
import { getConversation } from "../../controllers";
import { getAllConversation } from "../../controllers/chat/getAllConvers";

export const Chat = Router();

Chat.post("/createConversation", createConversation);
Chat.post("/updateConversation", updateConversation);
Chat.post("/getConversation", getConversation);
Chat.post("/createMsg", createMessage);
Chat.get("/getAllConvers", getAllConversation);
