import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface User {
  name: String;
  email: String;
  age: Number;
}

const userSchema = new Schema<User>({
  name: String,
  email: String,
  age: Number,
});

export const UserModel = model<User>("User", userSchema);
