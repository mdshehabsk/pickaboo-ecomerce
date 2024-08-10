/* eslint-disable no-unused-vars */
import { Model, Types, Document } from "mongoose";


export interface IUser extends Document {
  _id: Types.ObjectId
  username: string
  email:string
  password: string
  googleId: string
  facebookId:string
  isEmailVerified: boolean
}


