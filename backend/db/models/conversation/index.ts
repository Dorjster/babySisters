import { model, Schema, models, Model } from "mongoose";

export type ConversationModelType = {
    _id: Schema.Types.ObjectId;
    participants: string[];
    messages: string[];
};

const ConversationSchema = new Schema<ConversationModelType>(
    {
        participants: [
            {type: Schema.Types.ObjectId, ref: "Babysitter"},
            {type: Schema.Types.ObjectId, ref: "Parent"}
        ],
        messages: [
            {type: Schema.Types.ObjectId, ref: "Message", default: []}
        ]
    },
    {
        timestamps: true,
    }
);

export const ConversationModel: Model<ConversationModelType> =
    models["Conversation"] || model("Conversation", ConversationSchema);
