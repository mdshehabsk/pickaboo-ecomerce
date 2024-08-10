import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import { IUser } from "./user.interface";

const UserSchema = new Schema<IUser>(
  {
    username:{
      type:String,
      required:true
    },
    email:{
      type:String,
      require:true
    },
    password:{
      type:String,
      required:function () {
        return !this.googleId && !this.facebookId;
      },
    },
    googleId: {
      type: String,
      unique:true,
      sparse:true
    },
    facebookId: {
      type: String,
      unique:true,
      sparse:true
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);






// create model:
export const User = model<IUser>("User", UserSchema);
