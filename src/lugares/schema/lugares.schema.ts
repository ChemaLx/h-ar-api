import { Schema } from "mongoose";

export const LugaresSchema = new Schema({
    name: String,
    description: String,
    imageUrl: String
})